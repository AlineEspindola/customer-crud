import ModalTailwindUI from "@/components/Modal";
import Table from "@/components/Table";

const titles = [
  "Nome",
  "Empresa",
  "Perfil do LinkedIn",
  "Último Contato",
  "O que falar",
];

const data = [
  {
    Nome: "Aline",
    Empresa: "Senai",
    "Perfil do LinkedIn": "https://www.linkedin.com/in/aline-aespindola",
    "Último Contato": "22/07/2025",
    "O que falar": "Estudos frontend",
  },
  {
    Nome: "Thiago",
    Empresa: "Del Grande",
    "Perfil do LinkedIn":
      "https://www.linkedin.com/in/thiago-martins-9b2353285/",
    "Último Contato": "23/07/2025",
    "O que falar": "Estudos backend",
  },
];

export default function Home() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <Table titles={titles} data={data} />
      <ModalTailwindUI></ModalTailwindUI>
    </div>
  );
}
