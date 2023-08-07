import { ComponentProps } from 'react'
import { Input } from '../Input'

type HeaderSearchProps = ComponentProps<'input'>

export function HeaderSearch({ ...rest }: HeaderSearchProps) {
  return (
    <Input.Root>
      <Input.Content title="Pesquisar pelo título" type="text" {...rest} />
    </Input.Root>
  )
}
