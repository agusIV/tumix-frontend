import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { cargarLista } from './services/listaServices.ts'
import { ListaProovedor } from './contextAPI/listaContext.tsx';
import { UsuarioProovedor } from "./contextAPI/usuarioContext.tsx"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import logo from "../src/assets/imagenes/logo.png"

function Root() {
  const [lista, setLista] = useState<any[] | null>(null)

  useEffect(() => {
    const fetchLista = async () => {
      const data = await cargarLista()
      setLista(data)
    }
    fetchLista()
  }, [])

  const estilo = {
    color: "white",
    backgroundColor: "#d6670c",
    height: "100vh"
  }

  if (!lista) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={estilo}>
        <div className='w-25'>
          <img className="w-100 bg-light rounded-circle" src={logo} alt="" />
          <h1 className="text-center">Cargando...</h1>
        </div>
      </div>
    )
  }return(
    <UsuarioProovedor>
      <ListaProovedor listaInicial={lista}>
        <App/>
      </ListaProovedor>
    </UsuarioProovedor>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
