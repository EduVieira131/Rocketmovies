import { Button } from '../components/Button'
import { ButtonText } from '../components/ButtonText'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { NewTag } from '../components/NewTag'
import { Tag } from '../components/Tag'

export function CreateMovie() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto p-4 flex flex-col gap-10">
        <div>
          <ButtonText placeholder="Voltar" haveIcon to="/" />
          <h1 className="text-[#F4EDE8] text-4xl font-medium mt-6">
            Novo Filme
          </h1>
        </div>

        <div className="flex items-center gap-10">
          <Input placeholder="Título" />
          <Input placeholder="Sua nota de 0 a 5" type="number" />
        </div>

        <textarea
          id="observations"
          placeholder="Observações"
          className="w-full h-72 bg-[#262529] focus:outline-none py-4 px-6 rounded-xl text-[#F4EDE8] resize-none"
        ></textarea>

        <div>
          <h2 className="text-[#999591] text-xl mb-6 font-normal">
            Marcadores
          </h2>

          <div className="flex flex-wrap items-center gap-6 bg-[#0D0C0F] rounded-lg w-full p-4">
            <Tag label="React" />

            <NewTag />
          </div>
        </div>

        <div className="flex gap-10">
          <button className="flex items-center justify-center gap-2 w-full h-full text-[#FF859B] bg-[#0D0C0F] rounded-lg py-4 px-8">
            Excluir nota
          </button>

          <Button title="Salvar alterações" />
        </div>
      </main>
    </>
  )
}
