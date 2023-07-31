import { createContext, useContext } from 'react'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{ name: 'eduardo', email: 'eduardo@gmail.com' }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthProvider)

  return context
}

export { AuthProvider, useAuth }
