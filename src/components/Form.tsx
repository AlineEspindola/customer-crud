import Input from "./Input";

interface FormProps {}

export default function Form(props: FormProps) {
  return (
    <div className="mt-6 bg-white space-y-4 w-full">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Novo Contato</h2>
      <div className="flex flex-col space-y-4">
        <Input text="Nome" value="Joaquim" />
        <Input text="Empresa" value="PetLove" />
        <Input text="Perfil do LinkedIn" value="LINK" />
        <Input text="Último Contato" value="21/07/2025" />
        <Input text="O que falar" value="Estudos Devops" />
      </div>
    </div>
  );
}
