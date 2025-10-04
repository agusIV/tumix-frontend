import { useState } from "react";

interface Producto {
  nombre: string;
  precios: number[];
  categorias: string[];
  fila: number;
  imagen: string;
  descripcion: string;
}

// ListaBuscador.tsx - Versión más simple
interface ListaBuscadorProps {
    lista: Producto[];
    categoriasSeleccionadas: string[];
    onCategoriaChange: (categoria: string) => void; // Tipo más simple
}

export default function ListaBuscador({ lista, categoriasSeleccionadas, onCategoriaChange }: ListaBuscadorProps) {
  const categorias = [...new Set(lista.flatMap(p => p.categorias))]
  const [dispositivo] = useState(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  
  if (dispositivo) {
    console.log("Es un dispositivo móvil");
  } else {
    console.log("Es una computadora");
  }
  return (
    <div id="listaBuscador" className="d-flex gap-2">
      {dispositivo ? (
        <div>
          <button id="listaFiltroCelular" className="rounded-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
            Filtrar
          </button>
          <div className="offcanvas offcanvas-bottom" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasBottomLabel">
                Categorias
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body small">
              {categorias.map(c => {
                const id = `categoria-${c}`
                return(
                  <div key={c} className="listaCheckBox my-1">
                    <input 
                      id={id}
                      type="checkbox" 
                      checked={categoriasSeleccionadas.includes(c)}
                      onChange={() => onCategoriaChange(c)} 
                    />
                    <label htmlFor={id}>{c}</label>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      ):(
        <div id="listaFiltroComputadora" className="dropdown">
          <button id="FiltroComputadoraBoton" className="dropdown-toggle rounded-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filtar
          </button>
          <div id="FiltroComputadoraLista" className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
            {categorias.map(c => {
                const id = `categoria-${c}`
                return(
                  <div key={c} className="listaCheckBox my-1">
                    <input 
                      id={id}
                      type="checkbox" 
                      checked={categoriasSeleccionadas.includes(c)}
                      onChange={() => onCategoriaChange(c)} 
                    />
                    <label htmlFor={id}>{c}</label>
                  </div>
                )
              })}
          </div>
        </div>
      )}
    </div>
  )
}
