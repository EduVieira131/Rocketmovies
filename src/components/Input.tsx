interface InputProps {
  placeholder: string
  icon?: any
  type?: string
}

export function Input({ placeholder, icon: Icon, type,...rest }: InputProps) {
  return (
    <div className="flex items-center gap-3 bg-[#262529] w-full py-4 px-6 rounded-xl text-[#F4EDE8]">
      {Icon !== undefined ? <Icon className="text-[#948F99]" /> : ''}
      <input
        type={type ? type : 'text'}
        placeholder={placeholder}
        className="bg-[#262529] w-full h-full focus:outline-none"
        {...rest}
      />
    </div>
  )
}
