import { Input } from '../Input'

export function HeaderSearch({ ...rest }) {
  return (
    <Input.Root>
      <Input.Content title="Pesquisar pelo título" type="text" {...rest} />
    </Input.Root>
  )
}
