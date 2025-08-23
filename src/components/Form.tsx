import Person from "@/core/Person";
import Input from "./Input";
import { useState } from "react";

interface FormProps {
  person: Person;
  personChange?: (person: Person) => void
  cancel?: () => void;

}

export default function Form(props: FormProps) {
  const id = props.person?.personID;
  const [name, setName] = useState(props.person?.personName);
  const [company, setCompany] = useState(props.person?.personCompany);
  const [profile, setProfile] = useState(props.person?.personProfile);
  const [lastContact, setLastContact] = useState(
    props.person?.personLastContact ?? ""
  );
  const [whatToSay, setWhatToSay] = useState(props.person?.personWhatToSay);

  return (
    <div className="mt-6 bg-white space-y-4 w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Novo Contato</h2>
      <div className="flex flex-col space-y-4">
        <Input text="Nome" value={name || ""} valueChange={setName} />
        <Input text="Empresa" value={company || ""} valueChange={setCompany} />
        <Input
          text="Perfil do LinkedIn"
          value={profile || ""}
          valueChange={setProfile}
        />
        <Input
          text="Último Contato"
          value={String(lastContact)}
          valueChange={setLastContact}
        />
        <Input
          text="O que falar"
          value={whatToSay || ""}
          valueChange={setWhatToSay}
        />
      </div>
      <div className="bg-gray-50 py-3 sm:flex sm:flex-row-reverse">
        <button
          type="button"
          onClick={() => props.personChange?.(new Person(id, name, company, profile, lastContact, whatToSay))}
          className="cursor-pointer inline-flex w-full justify-center rounded-md bg-indigo-600 hover:bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto "
        >
          Confirmar
        </button>
        <button
          type="button"
          onClick={props.cancel}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto cursor-pointer"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
