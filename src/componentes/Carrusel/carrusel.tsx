import "./carrusel.css";

export default function Carrusel() {
  return (
   <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/tumix-frontend/imagenes/1.png" className="d-block w-100" alt="Imagen 1" />
        </div>
        <div className="carousel-item">
          <img src="/tumix-frontend/imagenes/2.png" className="d-block w-100" alt="Imagen 2" />
        </div>
        <div className="carousel-item">
          <img src="/tumix-frontend/imagenes/3.png" className="d-block w-100" alt="Imagen 3" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  )
}