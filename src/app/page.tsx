"use client";

import CollectionPerson from "@/backend/db/CollectionPerson";
import NetworkingLottie from "@/components/Animation";
import Form from "@/components/Form";
import { IconAddContact } from "@/components/Icons";
import ModalTailwindUI from "@/components/Modal";
import Table from "@/components/Table";
import Person from "@/core/Person";
import PersonRepository from "@/core/PersonRepository";
import { useEffect, useState } from "react";

const titles = [
  "Nome",
  "Empresa",
  "Perfil do LinkedIn",
  "Último Contato",
  "O que falar",
];

const data = [
  new Person(
    "1",
    "Sofia",
    "Bradesco",
    "https://www.linkedin.com/in/aline-aespindola",
    new Date("2025-07-22"),
    "Estudos frontend"
  ),
  new Person(
    "2",
    "Paulo",
    "Mercado Livre",
    "https://www.linkedin.com/in/thiago-martins-9b2353285/",
    new Date("2025-07-22"),
    "Estudos backend"
  ),
];

export default function Home() {
  const repo: PersonRepository = new CollectionPerson();

  const [visible, setVisible] = useState<"table" | "form">("table");
  const [people, setPeople] = useState<Person[]>([])
  const [person, setPerson] = useState<Person>(Person.void())

  useEffect(() => {
    getAll()
  }, [])

  function getAll() {
    repo.getAll().then(people => {
      setPeople(people)
      setVisible('table')
    });
  }

  async function savePerson(person: Person) {
    await repo.save(person);
    getAll();
  }

  function personSelected(person: Person) {
    setPerson(person);
    setVisible('form')
  }

  async function personDeleted(person: Person) {
    await repo.delete(person);
    getAll();
  }

  function newPerson() {
    setPerson(Person.void())
    setVisible('form')
  }

  return (
    <div className="max-w-5xl mx-auto">
      <NetworkingLottie />
      <ModalTailwindUI
        textButton="Novo Contato"
        iconButton={<IconAddContact />}
        onClick={newPerson}
        open={visible ? (visible === "form" ? true : false) : false}
        content={
          <Form
            person={person}
            cancel={() => setVisible("table")}
            personChange={savePerson}
          />
        }
      />
      <Table
        titles={titles}
        data={people}
        personSelected={personSelected}
        personDeleted={personDeleted}
      />
    </div>
  );
}
