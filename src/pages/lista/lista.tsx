import "./lista.css"
import { useSearchParams} from 'react-router-dom';
import ListaBuscador from "../../componentes/lista/listaBuscador";
import ListaProductos from "../../componentes/lista/listaProductos";
import { useLista } from "../../contextAPI/listaContext";
import { useState } from "react";

export default function Lista(){
  const { lista } = useLista()
  const [searchParams, setSearchParams] = useSearchParams();
  const categoriasSeleccionadas = searchParams.getAll("categoria");

  const handleCategoriaChange = (categoria: string) => {
    const nuevasCategorias = categoriasSeleccionadas.includes(categoria)
      ? categoriasSeleccionadas.filter(c => c !== categoria)
      : [...categoriasSeleccionadas, categoria];
    
    const params = new URLSearchParams();
    nuevasCategorias.forEach(cat => params.append("categoria", cat));
    setSearchParams(params);
  };

  const prodFiltrados = lista.filter((producto) => {
    return categoriasSeleccionadas.length === 0 || 
      producto.categorias.some(cat => categoriasSeleccionadas.includes(cat));
  });
  const [dispositivo] = useState(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
  return(
    <div id={dispositivo ? "listaMovil" : "lista"} className="mx-auto my-5">
      <ListaBuscador 
        lista={lista}
        categoriasSeleccionadas={categoriasSeleccionadas}
        onCategoriaChange={handleCategoriaChange}
        dispositivo={dispositivo}
      />
      <ListaProductos 
        productosFiltrados={prodFiltrados}
        dispositivo={dispositivo} 
      />
    </div>
  )
}