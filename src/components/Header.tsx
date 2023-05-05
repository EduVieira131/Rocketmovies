export function Header() {
  return (
    <header className="bg-[#1C1B1E] flex items-center justify-center gap-16 w-full px-32 py-6 border-b-2 border-[#3E3B47] divide-[#3E3B47]">
      <h1 className="text-[#FF859B] text-2xl font-bold">RocketMovies</h1>

      <input
        type="text"
        placeholder="Pesquisar pelo título"
        className="bg-[#262529] w-3/4 max-w-[630px] py-4 px-6 rounded-xl"
      />

      <div className="flex items-center gap-2">
        <div className="flex flex-col">
          <span className="whitespace-nowrap text-[#F4EDE8] font-bold">
            Eduardo Vieira
          </span>
          <a href="#" className="self-end text-[#948F99]">
            Sair
          </a>
        </div>

        <img
          src="https://github.com/EduVieira131.png"
          alt="Imagem do usuário"
          className="w-16 h-16 border-2 border-[#3E3B47] rounded-full"
        />
      </div>
    </header>
  )
}
