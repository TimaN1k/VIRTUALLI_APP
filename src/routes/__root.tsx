import { createRootRoute, Outlet} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Header } from '../Components/Header/Header'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Route = createRootRoute({
  component: () => (
    <> 
      <div className="conteiner">
        <Header/> 
        </div>           
        <hr />
        <Outlet />
        <TanStackRouterDevtools />  
        <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}            
            pauseOnHover={false}
            theme="dark"
            closeButton={false}            
        />    
    </>
  ),
})
