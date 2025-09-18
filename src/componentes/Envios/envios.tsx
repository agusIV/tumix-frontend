import "./Envios.css"

export default function Envios() {
    return (
        <div id="envios" className="mx-auto my-5 rounded-5 overflow-hidden text-center">
            <h2 id="enviosTitulo">envios y puntos de encuentro</h2>
            <div id="enviosInfo" className="gap-2 pt-3">
                <div id="enviosTexto" className="fs-5">realizamos envios y puntos de encuentro en las zonas marcadas los dias martes, miercoles y viernes</div>
                <img src="/tumix-frontend/imagenes/zonaDeEntrega.png" className="w-100" alt="" />
            </div>
        </div>
    )
}