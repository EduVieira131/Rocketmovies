import { ComponentProps, ReactNode } from 'react'

interface InputRootProps extends ComponentProps<'div'> {
  children: ReactNode
}

export function InputRoot({ children }: InputRootProps) {
  return (
    <div className="flex w-full items-center gap-3 rounded-xl bg-[#262529] px-6 py-4 text-[#F4EDE8]">
      {children}
    </div>
  )
}
