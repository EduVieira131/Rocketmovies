import { useAuth } from '../hooks/auth'
import { Input } from './Input'

import { Link, useNavigate } from 'react-router-dom'

export function Header() {
  const { signOut } = useAuth()

  const navigate = useNavigate()

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  return (
    <header className="flex w-full items-center justify-center gap-16 border-b-2 border-[#3E3B47] px-28 py-6 ">
      <h1 className="place-self-center text-lg font-bold text-[#FF859B] lg:text-2xl">
        RocketMovies
      </h1>

      <Input placeholder="Pesquisar pelo título" />

      <div className="flex items-center gap-2 place-self-center">
        <div className="flex flex-col">
          <span className="whitespace-nowrap font-bold text-[#F4EDE8]">
            Eduardo Vieira
          </span>
          <button className="self-end text-[#948F99]" onClick={handleSignOut}>
            Sair
          </button>
        </div>

        <Link to="/profile">
          <img
            src="https://github.com/EduVieira131.png"
            alt="Imagem do usuário"
            className="h-14 w-14 max-w-fit rounded-full border-2 border-[#3E3B47]"
          />
        </Link>
      </div>
    </header>
  )
}
