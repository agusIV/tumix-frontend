import { createContext, useState, useContext } from "react";
import type {ReactNode} from "react"

//2. Interfaces para los tipos
interface Usuario {
  id: string;
  nombre: string;
  email: string;
}

interface Producto {
  id: number
  nombre: string;
  precios: number[];
  categoria: string;
  fila: number
}

//2. tipo de contexto
interface UsuarioContextType {
  usuario: Usuario | null;
  iniciar: (uData: Usuario) => void;
  cerrar: () => void;
  carrito: Producto[];
  agregarAlCarrito: (producto: Producto) => void;
  borrarDelCarrito: (id: number) => void;
  vaciarCarrito: () => void;
}

//3. Crear el contexto con un valor por defecto
const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

//4. Props para el proovedor
interface UsuarioProovedorProps {
  children: ReactNode;
}

//5. Proovedor
export const UsuarioProovedor = ({ children }: UsuarioProovedorProps) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carrito, setCarrito] = useState<Producto[]>([]);

  const iniciar = (uData: Usuario) => setUsuario(uData);
  const cerrar = () => setUsuario(null);

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito(prev => {
      const existe = prev.find(p => p.id === producto.id);
      if (existe) {
        return prev.map(p => 
          p.id === producto.id ? { ...producto } : p
        );
      } else {
        return [...prev, producto];
      }
    });
  };

  const borrarDelCarrito = (id: number) => {
    setCarrito(prev => prev.filter(p => p.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  return (
    <UsuarioContext.Provider 
      value={{
        usuario, 
        iniciar, 
        cerrar, 
        carrito, 
        agregarAlCarrito, 
        borrarDelCarrito, 
        vaciarCarrito
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};

// Hook personalizado con verificación
export const useUsuario = (): UsuarioContextType => {
  const context = useContext(UsuarioContext);
  if (context === undefined) {
    throw new Error("useUsuario debe ser usado dentro de un UsuarioProvider");
  }
  return context;
};
