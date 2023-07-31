import React from 'react'
import ReactDOM from 'react-dom/client'

import { Routes } from './routes'

import { AuthProvider } from './hooks/auth'

import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
)
