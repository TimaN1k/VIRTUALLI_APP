import { AboutUS } from "../Pages/AboutUs/AboutUs"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return(    
    <>
      <AboutUS/>        
    </>
  )
}
