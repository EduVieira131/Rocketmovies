import { ButtonText } from './ButtonText'

import { FiClock } from 'react-icons/fi'

import starsImage from '../assets/stars.svg'
import { useNavigate } from 'react-router-dom'

export function MovieHeader() {
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  return (
    <div className="mt-10 flex w-fit flex-col gap-6">
      <ButtonText placeholder="Voltar" haveIcon to="/" />

      <div className="flex items-center gap-5">
        <h1 className="text-4xl font-medium text-[#F4EDE8] ">Interestellar</h1>
        <img src={starsImage} alt="Imagem de estrelas" />
      </div>

      <div className="flex items-center gap-2">
        <span className="flex items-center gap-2 text-[#F4EDE8] ">
          <img
            src="https://github.com/EduVieira131.png"
            alt="Imagem de perfil do usuário"
            className="h-4 w-4 rounded-full border-2 border-[#3E3B47]"
          />
          <p>Por Eduardo Vieira</p>
        </span>

        <span className="flex items-center gap-2 text-[#F4EDE8] ">
          <p className="text-[#FF859B]">
            <FiClock />
          </p>
          <p>10/05/23 às 08:00</p>
        </span>
      </div>
    </div>
  )
}
