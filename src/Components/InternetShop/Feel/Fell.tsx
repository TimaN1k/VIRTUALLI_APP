import { motion, Variants} from 'framer-motion'



interface IcardAnimation extends Variants{
    hidden:{
        x:number,
        opacity:number
    },
    visible: (custom:number) =>{
        x:number,
        opacity: number,
        transition:{
            delay:number
        }      
    }    
}

const cardAnimation: IcardAnimation = {
    hidden:{
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
        viewport:{amouth: custom + 1}             
    })
}

export function Fell(){
    return(
        <motion.article
         initial='hidden'
         whileInView='visible'
         custom={1}
         viewport={{once: true, amount: 0.2}}                 
         variants={cardAnimation}
         className="feel">
            <div className="feel__wrapper">
                <motion.div custom={2} variants={cardAnimation} viewport={{once:true, amount: 0.5}} className="feel__userAtent">
                    <h2 className="feel__title">
                        Прочувствуй
                    </h2>
                    <div className="feel__text">
                        <p>Позволь новым эмоциям захлестнуть тебя</p>
                    </div>
                </motion.div>
                <div className="feel__vr-illustration"></div>
            </div>
        </motion.article>
    )
} 
