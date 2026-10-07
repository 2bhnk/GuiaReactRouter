import { useParams, Link } from 'react-router'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import { buscarProducto, formatearPrecio } from '../datos/productos.js'

export default function DetalleProducto() {
  const { id } = useParams()
  const producto = buscarProducto(id)

  if (!producto) {
    return <Alert variant="danger">No existe el producto {id}.</Alert>
  }

  return (
    <>
      <Button as={Link} to="/" variant="outline-secondary" className="mb-3">
        Volver
      </Button>
      <h1 className="h3">{producto.nombre}</h1>
      <p className="fs-4 fw-semibold">{formatearPrecio(producto.precio)}</p>
      <p>{producto.descripcion}</p>
    </>
  )
}