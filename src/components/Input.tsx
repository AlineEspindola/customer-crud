interface InputProps {
  type?: "text" | "number";
  text: string;
  value: string | number;
  readOnly?: boolean;
  valueChange?: (value: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-sm font-medium text-gray-700">{props.text}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        readOnly={props.readOnly}
        onChange={e => props.valueChange?.(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm 
                   focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}
