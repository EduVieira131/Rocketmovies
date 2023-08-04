import { FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { ButtonText } from '../components/ButtonText'

import { useState } from 'react'
import { api } from '../services/api'
import { useNavigate } from 'react-router-dom'

import image from '../assets/signImage.png'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Preencha todos os campos')
    }
    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Usuário cadastrado com sucesso')
        navigate('/')
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('Não foi possível cadastrar o usuário.')
        }
      })
  }

  function handleSwitchPage() {
    navigate('/')
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
            Crie sua conta
          </h2>

          <div className="mb-6 flex w-full flex-col gap-2">
            <Input.Root>
              <Input.Icon icon={FiUser} />
              <Input.Content
                title="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Input.Root>
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
              title="Cadastrar"
              onClick={(e) => {
                e.preventDefault()
                handleSignUp()
              }}
            />
          </div>

          <ButtonText
            placeholder="Voltar para o login"
            onClick={handleSwitchPage}
          />
        </form>

        <div className="ml-auto flex max-h-screen">
          <img src={image} alt="Imagem de um cinema" />
        </div>
      </div>
    </>
  )
}
