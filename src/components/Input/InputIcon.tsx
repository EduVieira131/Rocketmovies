import { ElementType } from 'react'

interface InputIconProps {
  icon: ElementType
}

export function InputIcon({ icon: Icon }: InputIconProps) {
  return <Icon className="text-[#948F99]" />
}
