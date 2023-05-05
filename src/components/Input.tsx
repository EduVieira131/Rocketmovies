interface InputProps {
  placeholder: string;
}

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="bg-[#262529] w-3/4 max-w-[630px] py-4 px-6 rounded-xl"
    />
  )
}
