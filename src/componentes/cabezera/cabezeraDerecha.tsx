import {useUsuario} from "../../contextAPI/usuarioContext"
import type { NavigateFunction } from "react-router-dom";

interface Props {
  navigate: NavigateFunction;
}

export default function CabezeraDerecha({navigate}: Props) {
  console.log("...")
  
  const {carrito} = useUsuario()
  const token = localStorage.getItem("token")

  const cerrarSesion = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }
  return (
    <div id="cabezeraDerecha" className="d-flex align-items-lg-center flex-lg-row flex-column">
      <div id="cabezeraProductos" className="flex-fill">
        <span className="cabezeraBotones" onClick={() => navigate("Lista")}>
          Lista de productos
        </span>
      </div>
      {token ? (
        <div id="cabezeraCerrar" className="flex-fill">
          <span className="cabezeraBotones" onClick={cerrarSesion}>Cerrar Sesion</span>
        </div>
      ) : (<>
        <div id="cabezeraCrear" className="flex-fill">
          <span className="cabezeraBotones" onClick={() => navigate("/Crear")}>Crear Cuenta</span>
        </div>
        <div id="cabezeraIniciar" className="flex-fill">
          <span className="cabezeraBotones" onClick={() => navigate("/Iniciar")}>Iniciar Sesion</span>
        </div>
      </>)}
      <div id="cabezeraCarrito" className="flex-fill">
        <div className="cabezeraBotones" onClick={() => navigate("/Carrito")}>
          <div id="cabezeraCantidad">{carrito.length}</div>
          <i id="cabezeraIcono" className="fas fa-shopping-cart"></i>
          <span>Carrito</span>
        </div>
      </div>
    </div>   
  )
}
