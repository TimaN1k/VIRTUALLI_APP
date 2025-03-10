import { createFileRoute } from '@tanstack/react-router'
import { Catalogs } from '../Pages/Catalog/Catalog'

export const Route = createFileRoute('/')({
  component: Catalog,
})

function Catalog() {
  return (
    <Catalogs/>
  )
}
