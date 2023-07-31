import { Input } from './Input'

import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex items-center justify-center flex-wrap lg:flex-nowrap gap-3 lg:gap-16 w-full px-4 lg:px-28 py-6 border-b-2 border-[#3E3B47] ">
      <h1 className="text-[#FF859B] text-lg lg:text-2xl font-bold place-self-center">
        RocketMovies
      </h1>

      <Input placeholder="Pesquisar pelo título" />

      <div className="flex items-center gap-2 place-self-center">
        <div className="flex flex-col">
          <span className="whitespace-nowrap text-[#F4EDE8] font-bold">
            Eduardo Vieira
          </span>
          <Link to="/" className="self-end text-[#948F99]">
            Sair
          </Link>
        </div>

        <Link to="/profile">
          <img
            src="https://github.com/EduVieira131.png"
            alt="Imagem do usuário"
            className="w-14 max-w-fit h-14 border-2 border-[#3E3B47] rounded-full"
          />
        </Link>
      </div>
    </header>
  )
}
