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

export default function ListaBuscador({
  lista, 
  categoriasSeleccionadas, 
  onCategoriaChange 
}: ListaBuscadorProps) {
  const categorias = [...new Set(lista.flatMap(p => p.categorias))]
  
  return (
    <div id="listaBuscador" className="d-flex flex-wrap gap-1 justify-content-center">
      {categorias.map(c => {
        const id = `categoria-${c}`
        return(
          <div key={c} className="listaCheckBox rounded-5">
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
  )
}
