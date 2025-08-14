import ModalTailwindUI from "@/components/Modal";
import Table from "@/components/Table";
import Person from "@/core/Person";

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
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Table titles={titles} data={data} />
      <ModalTailwindUI></ModalTailwindUI>
    </div>
  );
}
