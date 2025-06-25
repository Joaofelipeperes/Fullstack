import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Calendario from './pages/Calendario/Home'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import CadastrarCalendario from './pages/Calendario/Cadastrar'
import EditarCalendario from './pages/Calendario/Editar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Calendario />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/calendario/cadastrar" element={<CadastrarCalendario />} />
        <Route path="/calendario/editar" element={<EditarCalendario />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
