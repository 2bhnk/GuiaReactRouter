import { Routes, Route } from 'react-router'
import { Row, Col } from 'react-bootstrap'

import Layout from './componentes/Layout.jsx'
import Nosotros from './pags/Nosotros.jsx'
import DetalleProducto from './pags/DetalleProducto.jsx'
import NoEncontrada from './pags/NoEncontrada.jsx'
import TarjetaProducto from './componentes/TarjetaProducto.jsx'
import { productos } from './datos/productos.js'

function Catalogo() {
  return (
    <>
      <h1 className="h3 mb-3">Catálogo</h1>
      <Row xs={1} sm={2} lg={3} className="g-3">
        {productos.map((item) => (
          <Col key={item.id}>
            <TarjetaProducto producto={item} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Catalogo />} />
        <Route path="nosotros" element={<Nosotros />} />
        <Route path="producto/:id" element={<DetalleProducto />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  )
}