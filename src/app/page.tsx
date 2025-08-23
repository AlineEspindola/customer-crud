"use client";

import NetworkingLottie from "@/components/Animation";
import Form from "@/components/Form";
import { IconAddContact } from "@/components/Icons";
import ModalTailwindUI from "@/components/Modal";
import Table from "@/components/Table";
import Person from "@/core/Person";
import { useState } from "react";

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

function personSelected(person: Person) {
  console.log("personSelected");
}

function personDeleted(person: Person) {
  console.log("personDeleted");
}

export default function Home() {

  function savePerson(person: Person) {
    console.log(person)
  }

  const [visible, setVisible] = useState<'table' | 'form'>('table')

  return (
    <div className=" max-w-5xl mx-auto">
      <NetworkingLottie />
      <ModalTailwindUI
        textButton="Novo Contato"
        iconButton={<IconAddContact />}
        onClick={() => setVisible('form')}
        open={visible ? visible === "form" ? true : false : false}
        content={
          <Form person={data[1]} cancel={() => setVisible('table')} personChange={savePerson}/>
        }
      />
      <Table
        titles={titles}
        data={data}
        personSelected={personSelected}
        personDeleted={personDeleted}
      />
    </div>
  );
}
