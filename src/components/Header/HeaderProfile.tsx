import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

export function HeaderProfile() {
  const { signOut, user } = useAuth()

  const navigate = useNavigate()

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder

  function handleSignOut() {
    navigate('/')
    signOut()
  }

  return (
    <div className="flex items-center gap-2 place-self-center">
      <div className="flex flex-col">
        <span className="whitespace-nowrap font-bold text-[#F4EDE8]">
          {user.name}
        </span>

        <button className="self-end text-[#948F99]" onClick={handleSignOut}>
          Sair
        </button>
      </div>

      <Link to="/profile">
        <img
          src={avatarUrl}
          alt="Imagem do usuário"
          className="h-14 w-14 max-w-fit rounded-full border-2 border-[#3E3B47]"
        />
      </Link>
    </div>
  )
}
