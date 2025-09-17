import { createContext, useContext, useState} from "react";
import type {ReactNode} from "react"

// 1. Tipo de los elementos de la lista
export interface Producto {
  nombre: string;
  precios: number[];
  categorias: string[];
  fila: number;
  imagen: string;
  descripcion: string;
}

// 2. Tipo del contexto
interface ListaContextType{
    lista: Producto[]
    setLista: React.Dispatch<React.SetStateAction<Producto[]>>
}

// 3. Crear contexto con tipo o `undefined`
const ListaContext = createContext<ListaContextType | undefined>(undefined)

// 4. Props del proveedor
interface ListaProovedorProps{
    children: ReactNode
    listaInicial: Producto[]
}

// 5. Proveedor
export const ListaProovedor = ({children, listaInicial}: ListaProovedorProps) => {
    const [lista, setLista] = useState<Producto[]>(listaInicial)

    return (
        <ListaContext.Provider value={{lista, setLista}}>
            {children}
        </ListaContext.Provider>
    )
}

// Hook personalizado con verificación
export const useLista = () => {
    const context = useContext(ListaContext)
    if (!context) {
        throw new Error("useLista debe usarse dentro de in <ListaProovedor>")
    }
    return context
}
