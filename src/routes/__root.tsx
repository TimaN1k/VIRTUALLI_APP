import { createRootRoute, Outlet} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Header } from '../Components/Header/Header'


export const Route = createRootRoute({
  component: () => (
    <> 
      <div className="conteiner">
        <Header/> 
        </div>           
        <hr />
        <Outlet />
        <TanStackRouterDevtools />
      
    </>
  ),
})
