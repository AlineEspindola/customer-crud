import Input from "./Input";

interface FormProps {}

export default function Form(props: FormProps) {
  return (
    <div className="mt-6 bg-white space-y-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 text-alig">Novo Contato</h2>
      <Input text="Nome" value="Joaquim" />
      <Input text="Empresa" value="PetLove" />
      <Input text="Perfil do LinkedIn" value="LINK" />
      <Input text="Último Contato" value="21/07/2025" />
      <Input text="O que falar" value="Estudos Devops" />
    </div>
  );
}
