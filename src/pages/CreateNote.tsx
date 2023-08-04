import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../components/Button'
import { ButtonText } from '../components/ButtonText'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { TagButtonComponent } from '../components/TagButton'
import { api } from '../services/api'

export function CreateMovie() {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [rating, setRating] = useState<number>(0)

  const [markers, setMarkers] = useState<string[]>([])
  const [newMarker, setNewMarker] = useState('')

  const navigate = useNavigate()

  function handleAddMarker() {
    setMarkers((prevState) => [...prevState, newMarker])
    setNewMarker('')
  }

  function handleRemoveMarker(deleted: string) {
    setMarkers((prevState) => prevState.filter((marker) => marker !== deleted))
  }

  function handleBack() {
    navigate(-1)
  }

  async function handleAddNewNote() {
    if (!title) {
      return alert('Por favor, insira um título para a nota.')
    }

    if (!rating) {
      return alert('Você precisa digitar uma nota para o filme.')
    }

    if (!description) {
      return alert('Você precisa digitar uma descrição para a nota.')
    }

    if (newMarker) {
      return alert(
        'Você deixou um marcador no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.',
      )
    }

    await api.post('/notes', {
      title,
      description,
      rating,
      tags: markers,
    })

    alert('Nota criada com sucesso!')
    navigate(-1)
  }

  return (
    <>
      <Header />

      <main className="mx-auto mt-10 flex max-w-6xl flex-col gap-10 p-4">
        <div>
          <ButtonText placeholder="Voltar" haveIcon onClick={handleBack} />
          <h1 className="mt-6 text-4xl font-medium text-[#F4EDE8]">
            Novo Filme
          </h1>
        </div>

        <div className="flex items-center gap-10">
          <Input.Root>
            <Input.Content
              title="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Input.Root>

          <Input.Root>
            <Input.Content
              title="Sua nota de 0 a 5"
              type="number"
              onChange={(e) => setRating(Number(e.target.value))}
            />
          </Input.Root>
        </div>

        <textarea
          id="observations"
          placeholder="Observações"
          onChange={(e) => setDescription(e.target.value)}
          className="h-72 w-full resize-none rounded-xl bg-[#262529] px-6 py-4 text-[#F4EDE8] focus:outline-none"
        ></textarea>

        <div>
          <h2 className="mb-6 text-xl font-normal text-[#999591]">
            Marcadores
          </h2>

          <div className="flex w-full flex-wrap items-center gap-6 rounded-lg bg-[#0D0C0F] p-4">
            {markers.map((marker, index) => (
              <TagButtonComponent.Root addTagStyle key={index}>
                <TagButtonComponent.Input value={marker} />
                <TagButtonComponent.Action
                  onClick={() => handleRemoveMarker(marker)}
                />
              </TagButtonComponent.Root>
            ))}

            <TagButtonComponent.Root>
              <TagButtonComponent.Input
                value={newMarker}
                onChange={(e) => setNewMarker(e.target.value)}
              />
              <TagButtonComponent.Action onClick={handleAddMarker} editable />
            </TagButtonComponent.Root>
          </div>
        </div>

        <div className="flex gap-10">
          <button className="flex h-full w-full items-center justify-center gap-2 rounded-lg bg-[#0D0C0F] px-8 py-4 text-[#FF859B]">
            Excluir nota
          </button>

          <Button title="Salvar alterações" onClick={handleAddNewNote} />
        </div>
      </main>
    </>
  )
}
