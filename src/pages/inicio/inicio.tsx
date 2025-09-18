import "./inicio.css"
import Carrusel from "../../componentes/carrusel";
import Catalogo from "../../componentes/catalogo";
import Envios from "../../componentes/envios";
//import {useUsuario} from "../../contextAPI/usuarioContext"

export default function Inicio() {
    //const {usuario} = useUsuario()
    return(
        <div id="inicio">
            <Carrusel/>
            <Catalogo/>
            <Envios/>
        </div> 
    )
}