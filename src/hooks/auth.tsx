import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

interface dataProps {
  avatar?: string
  token?: string
  user?: object
}

interface userProps {
  avatar?: string
}

function AuthProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<dataProps>({})

  async function signIn({
    email,
    password,
  }: {
    email: string
    password: string
  }) {
    try {
      const response = await api.post('/sessions', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))
      localStorage.setItem('@rocketmovies:token', token)

      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setData({ user, token })
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível fazer login na aplicação!')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@rocketmovies:user')
    localStorage.removeItem('@rocketmovies:token')

    setData({})
  }

  async function updateProfile({
    user,
    avatarFile,
  }: {
    user: userProps
    avatarFile: File | null
  }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append('avatar', avatarFile)

        const response = await api.patch('/users/avatar', fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put('/users', user)
      localStorage.setItem('@rocketmovies:user', JSON.stringify(user))

      setData({ user, token: data.token })

      alert('Perfil atualizado!')
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível autalizar os dados da aplicação!')
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@rocketmovies:token')
    const user = localStorage.getItem('@rocketmovies:user')

    if (token && user) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user: data.user, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
