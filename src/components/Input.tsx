interface InputProps {
  placeholder: string
  icon?: any
  type?: string
}

export function Input({ placeholder, icon: Icon, type, ...rest }: InputProps) {
  return (
    <div className="flex w-full items-center gap-3 rounded-xl bg-[#262529] px-6 py-4 text-[#F4EDE8]">
      {Icon !== undefined ? <Icon className="text-[#948F99]" /> : ''}
      <input
        type={type || 'text'}
        placeholder={placeholder}
        className="h-full w-full bg-[#262529] focus:outline-none"
        {...rest}
      />
    </div>
  )
}
