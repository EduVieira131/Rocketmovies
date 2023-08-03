import { ComponentProps } from 'react'

interface TagButtonInputProps extends ComponentProps<'input'> {
  editable?: boolean
  value?: string
}

export function TagButtonInput({
  editable,
  value,
  ...rest
}: TagButtonInputProps) {
  return (
    <input
      type="text"
      readOnly={editable}
      placeholder="Novo Link"
      {...rest}
      defaultValue={value}
      className="w-fit bg-transparent outline-none"
    />
  )
}
