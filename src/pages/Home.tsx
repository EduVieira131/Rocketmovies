import { FiPlus } from 'react-icons/fi'

import { Header } from '../components/Header'
import { Button } from '../components/Button'
import { MovieCard } from '../components/MovieCard'

import { Link } from 'react-router-dom'

export function Home() {
  return (
    <>
      <Header />

      <main className="max-w-6xl mx-auto mt-12">
        <div className="flex justify-between items-center mb-10">
          <h2 className="font-normal text-3xl text-neutral-50">Meus filmes</h2>

          <Link to="/createnote">
            <Button title="Adicionar filme">
              <FiPlus />
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-6 max-h-[680px] overflow-auto">
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </main>
    </>
  )
}
