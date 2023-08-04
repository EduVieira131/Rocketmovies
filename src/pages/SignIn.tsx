import { FiLock, FiMail } from 'react-icons/fi'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { ButtonText } from '../components/ButtonText'

import { useState } from 'react'
import { useAuth } from '../hooks/auth'
import { useNavigate } from 'react-router-dom'

import image from '../assets/signImage.png'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
  }

  function handleSwitchPage() {
    navigate('/register')
  }

  return (
    <>
      <div className="flex items-stretch">
        <form className="mx-auto flex flex-col items-center justify-center p-4">
          <h1 className="place-self-center text-5xl font-bold text-[#FF859B]">
            RocketMovies
          </h1>
          <p className="mb-12 text-sm text-[#CAC4CF]">
            Aplicação para acompanhar tudo que assistir.
          </p>

          <h2 className="mb-12 w-full text-left text-2xl text-[#F4EDE8]">
            Faça seu login
          </h2>

          <div className="mb-6 flex w-full flex-col gap-2">
            <Input.Root>
              <Input.Icon icon={FiMail} />
              <Input.Content
                title="E-mail"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Input.Root>

            <Input.Root>
              <Input.Icon icon={FiLock} />
              <Input.Content
                title="Senha"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Input.Root>
          </div>

          <div className="mb-12 w-full">
            <Button
              title="Entrar"
              onClick={(e) => {
                e.preventDefault()
                handleSignIn()
              }}
            />
          </div>

          <ButtonText placeholder="Criar conta" onClick={handleSwitchPage} />
        </form>

        <div className="ml-auto flex max-h-screen">
          <img src={image} alt="Imagem de um cinema" />
        </div>
      </div>
    </>
  )
}
