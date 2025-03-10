import { AroundClock } from "./AroundClock/AroundClock";
import { Fell } from "./Feel/Fell";
import { LastProduct } from "./LastProduct/LastProduct";
import { Specification } from "./Specifications/Specifications";
import {motion, Variants} from 'framer-motion'

interface ItopShop extends Variants{
    hidden:{   
        y:number,     
        opacity:number
    },
    visible: (custom:number) => {   
        y:number,     
        opacity:number,
        transition:{
            delay:number
        }
    }
}

const topShop: ItopShop = {
    hidden:{     
        y: 100,   
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,        
        transition: {delay: custom * 0.2}
    })
}

export function InternetShop(){
    return(
        <section className="shop">
            <motion.div variants={topShop} custom={2} initial='hidden' whileInView='visible' viewport={{once:true}} className="shop__title">
                <p>Интернет-магазин будущего</p>
            </motion.div>    
            <div className="shop__wrapper">                
                    <motion.div variants={topShop} custom={2} initial='hidden' whileInView='visible' viewport={{once:true}} className="shop__top">
                        <Specification/>           
                        <AroundClock/> 
                    </motion.div>            
                <Fell/>
                <LastProduct/>             
            </div>                                                       
        </section>
    )
}
