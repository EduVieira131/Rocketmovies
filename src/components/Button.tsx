import { ReactNode, ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  title: string
  children?: ReactNode
}

export function Button({ children, title, ...rest }: ButtonProps) {
  return (
    <button
      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF859B] px-8 py-3 font-medium text-[#1C1B1E]"
      {...rest}
    >
      {children}
      {title}
    </button>
  )
}
