import Person from "@/core/Person";
import PersonRepository from "@/core/PersonRepository";
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getFirestore,
  doc,
  deleteDoc,
  addDoc,
  setDoc,
  getDocs,
} from "firebase/firestore";
import app from "../config";

export default class CollectionPerson implements PersonRepository {
  private db = getFirestore(app);

  converter = {
    toFirestore(person: Person) {
      return {
        name: person.personName,
        company: person.personCompany,
        profile: person.personProfile,
        lastContact: person.personLastContact,
        whatToSay: person.personWhatToSay,
      };
    },
    fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>): Person {
      const data = snapshot.data();
      return new Person(
        snapshot.id,
        data.name,
        data.company,
        data.profile,
        data.lastContact?.toDate ? data.lastContact.toDate() : new Date(data.lastContact),
        data.whatToSay
      );
    },
  };

  async save(person: Person): Promise<Person> {
    if (person.personID) {
      const docRef = doc(this.db, "people", person.personID).withConverter(
        this.converter
      );
      await setDoc(docRef, person);
      return person;
    }

    const docRef = await addDoc(this.collection(), person);
    return new Person(
      docRef.id,
      person.personName,
      person.personCompany,
      person.personProfile,
      person.personLastContact,
      person.personWhatToSay
    );
  }

  async delete(person: Person): Promise<void> {
    if (!person.personID)
      throw new Error("Person precisa de um ID para deletar");
    const docRef = doc(this.db, "people", person.personID);
    await deleteDoc(docRef);
  }

  async getAll(): Promise<Person[]> {
    const snapshot = await getDocs(this.collection());
    return snapshot.docs.map((doc) => doc.data());
  }

  private collection() {
    return collection(this.db, "people").withConverter(this.converter);
  }
}
