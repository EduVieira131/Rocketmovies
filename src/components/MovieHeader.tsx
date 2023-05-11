import { ButtonText } from './ButtonText'

import { FiClock } from 'react-icons/fi'

import starsImage from '../assets/stars.svg'

export function MovieHeader() {
  return (
    <div className="flex flex-col gap-6 w-fit mt-10">
      <ButtonText placeholder="Voltar" haveIcon to='/'/>

      <div className="flex items-center gap-5">
        <h1 className="text-[#F4EDE8] text-4xl font-medium ">Interestellar</h1>
        <img src={starsImage} alt="Imagem de estrelas" />
      </div>

      <div className='flex items-center gap-2'>
        <span className="flex gap-2 items-center text-[#F4EDE8] ">
          <img
            src="https://github.com/EduVieira131.png"
            alt="Imagem de perfil do usuário"
            className="w-4 h-4 rounded-full border-2 border-[#3E3B47]"
          />
          <p>Por Eduardo Vieira</p>
        </span>

        <span className="flex gap-2 items-center text-[#F4EDE8] ">
          <p className='text-[#FF859B]'><FiClock/></p>
          <p>10/05/23 às 08:00</p>
        </span>
      </div>
    </div>
  )
}
