import React from 'react'
import ReactDOM from 'react-dom/client'
import { CreateMovie } from './pages/CreateMovie'

import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CreateMovie />
  </React.StrictMode>
)
