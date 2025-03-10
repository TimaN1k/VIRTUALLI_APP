import { Adobe } from "../IconComponents/Partners/Adobe";
import { Apple } from "../IconComponents/Partners/Apple";
import { Binance } from "../IconComponents/Partners/Binance";
import { Nike } from "../IconComponents/Partners/Nike";
import { Ps } from "../IconComponents/Partners/Ps";
import { Twitch } from "../IconComponents/Partners/Twitch";
import { Valve } from "../IconComponents/Partners/Valve";
import { Vk } from "../IconComponents/Partners/Vk";
import { Xbox } from "../IconComponents/Partners/Xbox";
import { motion, Variants } from 'framer-motion'

interface IpatnersLine extends Variants{
    hidden:{
        x:number,
        opacity: number
    },
    visible: (custom:number) => {
        x: number,
        opacity: number,
        transition:{
            delay:number
        }
    }
}

const partnersBotLine: IpatnersLine = {
    hidden:{
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition:{delay: custom * 0.2}
    })        
}

const partnersTopLine: IpatnersLine = {
    hidden:{
        x: +100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition:{delay: custom * 0.2}
    })        
}


export function Partners(){
    return(
        <article className="partners">
            <div className="partners__wrapper">
                <motion.h2 variants={partnersBotLine} initial='hidden' viewport={{once:true}} custom={2} whileInView='visible' className="partners__title">Наши партнёры</motion.h2>
                <div className="partners__logotips">
                    <motion.div initial='hidden' custom={2} whileInView='visible' viewport={{once:true, amount:0.5}} variants={partnersTopLine} className="partners__top-logotips">
                        <a href="" className="partners__top-logo" title='Nike'>
                            <Nike/>                            
                        </a>
                        <a href="" className="partners__top-logo" title='Twitch'>
                            <Twitch/>                            
                        </a>
                        <a href="" className="partners__top-logo" title='Binance'>
                            <Binance/>                            
                        </a>
                        <a href="" className="partners__top-logo" title='VK'>
                            <Vk/>                            
                        </a>
                        <a href="" className="partners__top-logo" title='PlayStation'>
                            <Ps/>                                                       
                        </a>
                    </motion.div>
                    <motion.div initial='hidden' whileInView='visible'  custom={2} viewport={{once:true, amount: 0.5}} variants={partnersBotLine} className="partners__bot-logotips">
                        <a href="" className="partners__bot-logo" title='Adobe'>
                            <Adobe/>                            
                        </a>
                        <a href="" className="partners__bot-logo" title='Valve'>
                            <Valve/>                            
                        </a>
                        <a href="" className="partners__bot-logo" title='Apple'>
                            <Apple/>
                        </a>
                        <a href="" className="partners__bot-logo" title='Xbox'>
                            <Xbox/>
                        </a>                        
                    </motion.div>
                </div>
            </div>
        </article>
    )
}
