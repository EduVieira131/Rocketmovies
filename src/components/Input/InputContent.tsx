import { ComponentProps } from 'react'

interface InputContentProps extends ComponentProps<'input'> {
  title: string
}

export function InputContent({ title, ...rest }: InputContentProps) {
  return (
    <input
      placeholder={title}
      className="h-full w-full bg-[#262529] focus:outline-none"
      {...rest}
    />
  )
}
