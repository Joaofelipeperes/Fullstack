import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calendario from './pages/Calendario/Home'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calendario/>
  </StrictMode>,
)
