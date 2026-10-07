import { useLocation } from 'react-router'

export default function NoEncontrada() {
  const ubicacion = useLocation()
  return (
    <>
      <h1 className="h3">Página no encontrada</h1>
      <p>No se pudo encontrar <code>{ubicacion.pathname}</code> :c</p>
    </>
  )
}