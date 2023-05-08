interface InputProps {
  placeholder: string;
}

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="bg-[#262529] md:w-3/4 md:max-w-[630px] py-4 px-6 rounded-xl order-3 col-span-2 md:order-2"
    />
  )
}
