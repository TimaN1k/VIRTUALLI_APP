import { Footer } from "../../Components/Footer/Footer"
import { Hero } from "../../Components/Hero/Hero"
import { InternetShop } from "../../Components/InternetShop/InternetShop"
import { ModalMenu } from "../../Components/ModalMenu/ModalMenu"
import { Partners } from "../../Components/Partners/Partners"
import { Rewiews } from "../../Components/Rewiews/Rewiews"
import { Form } from "../../Components/Form/Form"

export function AboutUS(){
    return(
        <>
            <ModalMenu/>
            <Form/>     
            <div className="conteiner">                    
              <Hero/> 
              <InternetShop/>
              <Rewiews/>
              <Partners/>                                          
            </div>  
            <Footer/> 
        </>
    )
}
