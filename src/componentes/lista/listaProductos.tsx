import { useNavigate } from "react-router-dom"

interface Producto {
  nombre: string;
  precios: number[];
  categorias: string[];
  fila: number;
  imagen: string;
  descripcion: string;
}

export default function ListaProductos({ productosFiltrados }: { productosFiltrados: Producto[] }){
  const navigate = useNavigate()
    
  return(
    <div id="listaProductos" className="my-5 d-flex flex-wrap gap-3 justify-content-center">
      {productosFiltrados.map(producto => (
        <div className="listaProducto d-flex rounded-5 shadow overflow-hidden border position-relative" key={producto.nombre} >
          <div className="listaImagen"><img className="w-100" src="tumix-frontend/imagenes/logo.png" onClick={() => navigate("/producto", {state: {producto}})}/></div>
          <div className="listaInfo">
            <div className="listaNombre">
              {producto.nombre}
            </div>
            <div className="listaDescripcion">
              {producto.descripcion}
            </div>
            <div className="listaLeer" onClick={() => navigate("/producto", {state: {producto}})}>leer mas</div>
          </div>    
              
          <div className="listaPrecios d-flex flex-column justify-content-center bg-white ms-auto text-center align-items-center p-3">
            <div className="listaP">100grs: {producto.precios[3]}</div>
            <div className="listaP">250grs: {producto.precios[2]}</div>
            <div className="listaP">500grs: {producto.precios[1]}</div>
            <div className="listaP">1 kilo: {producto.precios[0]}</div>
            <div className="listaComprar" onClick={() => navigate("/producto", {state: {producto}})}>comprar</div>
          </div>     
        </div>
      ))}
    </div>
  )
}