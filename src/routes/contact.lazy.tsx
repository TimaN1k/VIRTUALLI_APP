import { createLazyFileRoute } from '@tanstack/react-router'
import { Contacting } from '../Pages/Contact/Contact'

export const Route = createLazyFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return(
    <>
    <Contacting/>
    </>
  )    
}
