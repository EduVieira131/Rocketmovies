import { ReactNode } from 'react'

interface ButtonProps {
  title: string
  children?: ReactNode
}

export function Button(props: ButtonProps) {
  return (
    <button className="flex items-center justify-center gap-2 w-full bg-[#FF859B] rounded-lg px-8 py-3 text-[#1C1B1E] font-medium">
      {props.children}
      {props.title}
    </button>
  )
}
