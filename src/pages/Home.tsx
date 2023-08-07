import { FiPlus } from 'react-icons/fi'

import { Header } from '../components/Header'
import { Button } from '../components/Button'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { MoviePreview } from '../components/MoviePreview'

export function Home() {
  const [notes, setNotes] = useState<object>([])
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${searchValue}`)
      setNotes(response.data)
    }

    fetchNotes()
  }, [searchValue])

  return (
    <>
      <div className="p-2">
        <Header.Root>
          <Header.Search onChange={(e) => setSearchValue(e.target.value)} />
          <Header.Profile />
        </Header.Root>

        <main className="mx-auto max-w-6xl pt-12">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-normal text-neutral-50">
              Meus filmes
            </h2>

            <Link to="/createnote">
              <Button title="Adicionar filme">
                <FiPlus />
              </Button>
            </Link>
          </div>

          <div className="flex max-h-[480px] flex-col gap-6 overflow-auto 2xl:max-h-[680px]">
            <MoviePreview.Root>
              <MoviePreview.Title title="Teste" />
              <MoviePreview.Details description="Teste teste" />
              <MoviePreview.Tags tags={['teste', 'oi']} />
            </MoviePreview.Root>
          </div>
        </main>
      </div>
    </>
  )
}
