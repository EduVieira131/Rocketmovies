import { FiPlus } from 'react-icons/fi'

import { Header } from '../components/Header'
import { Button } from '../components/Button'

export function Home() {
  return (
    <div>
      <Header />

      <main className="max-w-5xl mx-auto pt-12">
        <div className="flex justify-between items-center">
          <h2 className="font-normal text-3xl text-neutral-50">Meus filmes</h2>

          <Button title="Adicionar filme">
            <FiPlus/>
          </Button>
        </div>

        
      </main>
    </div>
  )
}
