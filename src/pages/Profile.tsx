import { FiCamera, FiLock, FiMail, FiUser } from 'react-icons/fi'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { ButtonText } from '../components/ButtonText'

import avatarPlaceholder from '../assets/avatar_placeholder.svg'

import { api } from '../services/api'
import { useAuth } from '../hooks/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const navigate = useNavigate()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarUrl)
  const [avatarFile, setAvatarFile] = useState(null)

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: password,
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function handleAvatarChange(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <>
      <header className="h-36 w-full bg-[#FF859B]/5">
        <div className=" ml-[12%] w-fit pt-16">
          <ButtonText placeholder="Voltar" haveIcon onClick={handleBack} />
        </div>
      </header>

      <main className="mx-auto -mt-20 flex max-w-[340px] flex-col items-center ">
        <div className="relative mb-16">
          <img
            src={avatar}
            alt="Imagem do usuário"
            className="h-[186px] w-[186px] rounded-full"
          />

          <label
            htmlFor="avatar"
            className="absolute bottom-2 right-2 cursor-pointer rounded-full bg-[#FF859B] p-4"
          >
            <FiCamera />

            <input
              type="file"
              id="avatar"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </label>
        </div>

        <div className="flex w-full flex-col gap-2">
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
              title="Seu e-mail"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Input.Root>

          <span className="mt-6">
            <Input.Root>
              <Input.Icon icon={FiLock} />
              <Input.Content
                title="Senha atual"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Input.Root>
          </span>

          <Input.Root>
            <Input.Icon icon={FiLock} />
            <Input.Content
              title="Nova senha"
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </Input.Root>

          <span className="mt-6 w-full">
            <Button title="Salvar" onClick={handleUpdate} />
          </span>
        </div>
      </main>
    </>
  )
}
