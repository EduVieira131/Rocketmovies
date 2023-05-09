import { ButtonText } from '../components/ButtonText'
import { Header } from '../components/Header'
import { Input } from '../components/Input'

export function CreateMovie() {
  return (
    <>
      <Header />

      <main>
        <ButtonText placeholder="Voltar" haveIcon />

        <h1>Novo Filme</h1>

        <div>
          <Input placeholder='Título'/>
          <Input placeholder='Sua nota de 0 a 5' type='number'/>
        </div>
      </main>
    </>
  )
}
