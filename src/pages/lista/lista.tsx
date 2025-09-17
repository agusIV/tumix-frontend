import "./lista.css"
import {useState, useEffect} from "react"
import { useLocation, useSearchParams} from 'react-router-dom';
import type { SetURLSearchParams } from "react-router-dom";
import ListaBuscador from "../../componentes/lista/listaBuscador";
import ListaProductos from "../../componentes/lista/listaProductos";
import { useLista } from "../../contextAPI/listaContext";

interface Producto {
  nombre: string;
  precios: number[];
  categorias: string[];
  fila: number;
  imagen: string;
  descripcion: string;
}

interface LocationState {
  cat?: string;
  filtrados?: Producto[];
}

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

    return(
        <div id="lista">
            <ListaBuscador 
                lista={lista}
                categoriasSeleccionadas={categoriasSeleccionadas}
                onCategoriaChange={handleCategoriaChange}
            />
            <ListaProductos productosFiltrados={prodFiltrados} />
        </div>
    )
}