import { FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { ButtonText } from '../components/ButtonText'

import { useAuth } from '../hooks/auth'
import { useState } from 'react'

export function Profile() {
  const { user } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState()
  const [newPassword, setNewPassword] = useState()

  return (
    <>
      <header className="h-36 w-full bg-[#FF859B]/5">
        <div className=" ml-[12%] w-fit pt-16">
          <ButtonText placeholder="Voltar" haveIcon to="/" />
        </div>
      </header>

      <main className="mx-auto -mt-20 flex max-w-[340px] flex-col items-center ">
        <div className="relative mb-16">
          <img
            src="https://github.com/EduVieira131.png"
            alt="Imagem do usuário"
            className="h-[186px] w-[186px] rounded-full"
          />

          <label
            htmlFor="avatar"
            className="absolute bottom-2 right-2 cursor-pointer rounded-full bg-[#FF859B] p-4"
          >
            <FiCamera />

            <input type="file" id="avatar" className="hidden" />
          </label>
        </div>

        <div className="flex w-full flex-col gap-2">
          <Input
            placeholder="Seu nome"
            icon={FiUser}
            value={name}
            onChange={setName}
          />
          <Input
            placeholder="Seu e-mail"
            icon={FiMail}
            type="email"
            value={email}
            onChange={setEmail}
          />
          <span className="mt-6">
            <Input
              placeholder="Senha atual"
              icon={FiLock}
              type="password"
              onChange={setPassword}
            />
          </span>
          <Input
            placeholder="Nova senha"
            icon={FiLock}
            type="password"
            onChange={setNewPassword}
          />

          <span className="mt-6 w-full">
            <Button title="Salvar" />
          </span>
        </div>
      </main>
    </>
  )
}
