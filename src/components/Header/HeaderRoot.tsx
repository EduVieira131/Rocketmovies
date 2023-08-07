import { ComponentProps, ReactNode } from 'react'

interface HeaderRootProps extends ComponentProps<'header'> {
  children: ReactNode
}

export function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <header className="flex w-full items-center justify-center gap-16 border-b-2 border-[#3E3B47] px-28 py-6 ">
      <h1 className="place-self-center text-lg font-bold text-[#FF859B] lg:text-2xl">
        RocketMovies
      </h1>

      {children}
    </header>
  )
}
