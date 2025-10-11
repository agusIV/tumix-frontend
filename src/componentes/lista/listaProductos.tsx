import { useNavigate } from "react-router-dom"
interface Producto {
  nombre: string;
  precios: number[];
  categorias: string[];
  fila: number;
  imagen: string;
  descripcion: string;
}

interface ListaProductosProps {
  productosFiltrados: Producto[]
  dispositivo: boolean
}

export default function ListaProductos({ productosFiltrados , dispositivo}: ListaProductosProps){
  const navigate = useNavigate()
  
  return(
    <div id={`listaProductos${dispositivo ? "Movil":""}`} className="my-5 d-flex flex-wrap gap-3 justify-content-center">
      {productosFiltrados.map(producto => { 
        const imagen = new URL(`../../assets/imagenes/logo.png`, import.meta.url).href
        return (
          <div className={`listaProducto${dispositivo ? "Movil":""} d-flex rounded-5 shadow overflow-hidden border position-relative`} key={producto.nombre} >
            <div className={`listaImagen${dispositivo ? "Movil":""}`}><img className="w-100" src={imagen} onClick={() => navigate("/producto", {state: {producto}})}/></div>
            <div className={`listaInfo${dispositivo ? "Movil":""}`}>
              <div className={`listaNombre${dispositivo ? "Movil":""}`}>
                {producto.nombre}
              </div>
              <div className={`listaDescripcion${dispositivo ? "Movil":""} p-1`}>
                {producto.descripcion}
              </div>
              <div className={`listaLeer${dispositivo ? "Movil":""}`} onClick={() => navigate("/producto", {state: {producto}})}>leer mas</div>
            </div>    
                
            <div className={`listaPrecios${dispositivo ? "Movil":""} d-flex flex-column justify-content-center bg-white ms-auto text-center align-items-center`}>
              <div className="listaP">100grs: {producto.precios[3]}</div>
              <div className="listaP">250grs: {producto.precios[2]}</div>
              <div className="listaP">500grs: {producto.precios[1]}</div>
              <div className="listaP">1 kilo: {producto.precios[0]}</div>
              <div className="listaComprar rounded-3 p-1" onClick={() => navigate("/producto", {state: {producto}})}>comprar</div>
            </div>     
          </div>
        )
      })}
    </div>
  )
}