import { motion, Variants } from 'framer-motion'

interface ILastCard extends Variants{
    hidden:{
        x:number,
        opacity:number
    },
    visible: (custom:number) => {
        x:number,
        opacity:number,
        transition:{
            delay:number
        }
    }
}

const leftLastCard: ILastCard = {
    hidden:{
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        opacity: 1,
        x: 0,
        transition: {delay: custom * 0.2}
    })
}

const rightLastCard: ILastCard = {
    hidden:{
        x: +100,
        opacity: 0
    },
    visible: custom => ({
        opacity: 1,
        x: 0,
        transition: {delay: custom * 0.2}
    })
}

export function LastProduct(){
    return(
        <div className="last">
            <div className="last__wrapper">
                <motion.div initial='hidden' viewport={{once:true, amount: 0.5}} whileInView='visible' custom={2} variants={leftLastCard} className="last__cardProd htc-vive-img card-border user-attention">
                    <div className="last__info-prod">
                        <div className="last__title">HTC VIVE Pro 2</div>
                        <div className="last__text">
                            <p>Система виртуальной реальности</p>
                        </div>
                    </div>
                    <div className="last__btn button">Заказать</div>
                </motion.div>
                <motion.div variants={rightLastCard} initial='hidden' whileInView='visible' viewport={{once:true, amount: 0.5}} custom={2} className="last__cardProd card-border ps-img user-attention">
                    <div className="last__info-prod">
                        <div className="last__title">PlayStation VR 2</div>
                        <div className="last__text">
                            <p>Шлем виртуальной реальности</p>
                        </div>
                    </div>
                    <div className="last__btn button">Заказать</div>
                </motion.div>
            </div>
        </div>
    )
}
