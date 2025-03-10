import { createFileRoute } from '@tanstack/react-router'
import { Bascet } from '../Components/Bascet/Bascet'


export const Route = createFileRoute('/bascet')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Bascet/>
  )
}
