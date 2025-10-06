import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { cargarLista } from './services/listaServices.ts'
import { ListaProovedor } from './contextAPI/listaContext.tsx';
import { UsuarioProovedor } from "./contextAPI/usuarioContext.tsx"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

/*const inicializar = async () => {
  const lista = await cargarLista()
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <UsuarioProovedor>
      <ListaProovedor listaInicial={lista}>
        <App/>
      </ListaProovedor>
      </UsuarioProovedor>
    </StrictMode>,
  )
}

inicializar()
*/
function Root() {
  const [lista, setLista] = useState<any[] | null>(null)

  useEffect(() => {
    const fetchLista = async () => {
      const data = await cargarLista()
      setLista(data)
    }
    fetchLista()
  }, [])
  if (!lista) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2>Cargando...</h2>
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