import Person from "@/core/Person";
import Input from "./Input";
import { useState } from "react";

interface FormProps {
  person: Person;
  personChange?: (person: Person) => void;
  cancel?: () => void;
}

export default function Form(props: FormProps) {
  const id = props.person?.personID;
  const [name, setName] = useState(props.person?.personName);
  const [company, setCompany] = useState(props.person?.personCompany);
  const [profile, setProfile] = useState(props.person?.personProfile);
  const [lastContact, setLastContact] = useState<Date | null>(
    props.person?.personLastContact ?? null
  );
  const [lastContactStr, setLastContactStr] = useState(
    props.person?.personLastContact
      ? formatDateBR(props.person.personLastContact)
      : ""
  );
  const [whatToSay, setWhatToSay] = useState(props.person?.personWhatToSay);

  function formatDateBR(date: Date | string) {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  }

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
          type="text"
          text="Último Contato"
          value={lastContactStr}
          valueChange={(val) => {
            setLastContactStr(val);
            const parts = val.split("/");
            if (parts.length === 3) {
              const [day, month, year] = parts;
              const date = new Date(
                Number(year),
                Number(month) - 1,
                Number(day)
              );
              if (!isNaN(date.getTime())) setLastContact(date);
            }
          }}
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
          onClick={() =>
            props.personChange?.(
              new Person(
                id,
                name,
                company,
                profile,
                lastContact || new Date(),
                whatToSay
              )
            )
          }
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
