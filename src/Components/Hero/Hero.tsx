import { Link } from '@tanstack/react-router'
import { motion, Variants } from 'framer-motion'

interface IheroAnimation extends Variants{
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

const heroAnimationAttention: IheroAnimation = {
    hidden:{
        x: -100,
        opacity: 0
    },
    visible: custom =>({
        opacity: 1,
        x:0,
        transition:{delay: custom * 0.2}
    })
}

const heroAnimationCard: IheroAnimation = {
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

export function Hero(){

    return(
        <section className="hero">
            <div className="hero__wrapper">
                <motion.article viewport={{once:true}} custom={2} initial='hidden' whileInView='visible' variants={heroAnimationAttention} className="hero__user-attention user-attention">
                    <div className="hero__inner hero__inner--smoll ">
                        <h2 className="hero__title">Погрузись в мир виртуальной реальности</h2>
                        <div className="hero__text">
                            <p>Попробуй новые эмоции и  впечатления прямо у себя дома</p>
                        </div>
                        <button className="hero__btn button">
                            <Link to='/'>Каталог</Link>
                        </button>
                    </div>
                </motion.article>
                <div className="hero__product">
                    <motion.div viewport={{once:true}} custom={4} variants={heroAnimationCard}  initial='hidden' whileInView='visible' className="hero__card-apple hero__card--size card shadow">
                        <div className="hero__card-wrapper">
                            <div className="hero__card__name-product">
                                <p>Apple Vision Pro</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div viewport={{once:true}} initial='hidden' whileInView='visible' variants={heroAnimationCard} custom={6} className="hero__card-focus hero__card--size card shadow">
                        <div className="hero__card-wrapper">
                            <div className="hero__card__name-product">
                                <p>HTC Vive Focus 3</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div viewport={{once:true}} initial='hidden' whileInView='visible' variants={heroAnimationCard} custom={8} className="hero__card-index hero__card--size card shadow">
                        <div className="hero__card-wrapper">
                            <div className="hero__card__name-product">
                                <p>valve index vr kit</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
