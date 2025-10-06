import './App.css'
import ScrollToTop from "./componentes/scrollToTop";
import Cabezera from "./pages/cabezera";
import Inicio from "./pages/inicio"
import Lista from "./pages/lista"
import Pie from "./pages/pie"
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/tumix-frontend/">
      <ScrollToTop/>
      <Cabezera/>
      <Routes>
        <Route path="" element={<Inicio/>}/>
        <Route path="Lista" element={<Lista/>}/>
      </Routes>
      <Pie/>
    </BrowserRouter>
  )
}

export default App

/*
import Lista from "./pages/lista"
import Crear from "./pages/crear"
import Iniciar from "./pages/iniciar"
import Carrito from "./pages/carrito"
import Producto from "./pages/producto"



        <Route path="/Crear" element={<Crear/>}/>
        <Route path="/Iniciar" element={<Iniciar/>}/>
        <Route path="/Carrito" element={<Carrito/>}/>
        <Route path="/Producto" element={<Producto/>}/>
*/