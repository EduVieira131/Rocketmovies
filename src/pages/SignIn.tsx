import { FiLock, FiMail } from 'react-icons/fi'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { ButtonText } from '../components/ButtonText'

import image from '../assets/signImage.png'

export function SignIn() {
  return (
    <>
      <div className="flex items-stretch">
        <form className="flex flex-col items-center justify-center mx-auto p-4">
          <h1 className="text-[#FF859B] text-5xl font-bold place-self-center">
            RocketMovies
          </h1>
          <p className="text-[#CAC4CF] text-sm mb-12">
            Aplicação para acompanhar tudo que assistir.
          </p>

          <h2 className="w-full text-[#F4EDE8] text-2xl text-left mb-12">
            Faça seu login
          </h2>

          <div className="flex flex-col gap-2 w-full mb-6">
            <Input placeholder="E-mail" icon={FiMail} />
            <Input placeholder="Senha" icon={FiLock} type="password" />
          </div>

          <div className="w-full mb-12">
            <Button title="Entrar" />
          </div>

          <ButtonText placeholder="Criar conta" to="/register" />
        </form>

        <div className="flex ml-auto max-h-screen">
          <img src={image} alt="Imagem de um cinema" />
        </div>
      </div>
    </>
  )
}
