import { Input } from './Input'

export function Header() {
  return (
    <header className="md:flex md:items-center md:justify-center grid grid-cols-2 grid-rows-2 gap-3 lg:gap-16 w-full px-4 lg:px-28 py-6 border-b-2 border-[#3E3B47] ">
      <h1 className="text-[#FF859B] text-2xl font-bold order-1 place-self-center">
        RocketMovies
      </h1>

      <Input placeholder="Pesquisar pelo título" />

      <div className="flex items-center gap-2 order-2 place-self-center">
        <div className="flex flex-col">
          <span className="whitespace-nowrap text-[#F4EDE8] font-bold">
            Eduardo Vieira
          </span>
          <a href="#" className="self-end text-[#948F99]">
            Sair
          </a>
        </div>

        <a href="#">
        <img
          src="https://github.com/EduVieira131.png"
          alt="Imagem do usuário"
          className="w-14 max-w-fit h-14 border-2 border-[#3E3B47] rounded-full"
        />
        </a>
      </div>
    </header>
  )
}
