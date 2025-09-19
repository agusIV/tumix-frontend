import "./catalogo.css"
import { useNavigate } from 'react-router-dom';

export default function Catalogo() {
  const navigate = useNavigate()
  const cambiarRuta = (cat: string) => {
    const parametro = new URLSearchParams({categoria: cat}).toString()
    navigate(`/Lista?${parametro}`);
  }
  
  return (
    <div id="catalogo" className='mx-auto my-5 rounded-5 overflow-hidden'>
      <h2 id="catalogoTitulo" className='text-center p-3'>CATEGORIAS</h2>
      <div id="catalogoSecciones" className='d-flex flex-wrap gap-2 justify-content-center py-3'>
        <div className="catalogoCategoria" onClick={() => cambiarRuta("Mix")}>
          <img className="catalogoImagen" src={"imagenes/mix.jpeg"} alt=""/>
          <div className="catalogoNombre">mixes</div >
        </div>
        <div className="catalogoCategoria" onClick={() => cambiarRuta("Frutos Secos")}>
          <img className="catalogoImagen" src={"imagenes/secos.jpeg"} alt=""/>
          <div className="catalogoNombre">frutos secos</div >
        </div>
        <div className="catalogoCategoria" onClick={() => cambiarRuta("Frutas Deshidratadas")}>
          <img className="catalogoImagen" src={"imagenes/deshidratadas.jpeg"} alt=""/>
          <div className="catalogoNombre">frutas deshidratadas</div >
        </div>
        <div className="catalogoCategoria" onClick={() => cambiarRuta("Snacks")}>
          <img className="catalogoImagen" src={"imagenes/snacks.jpeg"} alt=""/>
          <div className="catalogoNombre">snacks</div >
        </div>
        <div className="catalogoCategoria" onClick={() => cambiarRuta("Cereales y Granos")}>
          <img className="catalogoImagen" src={"imagenes/CYG.jpeg"} alt=""/>
          <div className="catalogoNombre">cereales y granos</div >
        </div>
        <div className="catalogoCategoria" onClick={() => cambiarRuta("Otros")}>
          <img className="catalogoImagen" src={"imagenes/otros.jpeg"} alt=""/>
          <div className="catalogoNombre">otros</div >
        </div>
      </div>
    </div>
  )
}
