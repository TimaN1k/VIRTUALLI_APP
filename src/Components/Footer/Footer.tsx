import { Facebook } from "../IconComponents/footerIcon/Facebook";
import { Gmail } from "../IconComponents/footerIcon/Gmail";
import { Instagram } from "../IconComponents/footerIcon/Instagram";
import { Telegram } from "../IconComponents/footerIcon/Telegram";
import { LogoIcon } from "../IconComponents/HeaderIcon/LogoIcon";
import { delay, motion, Variants } from 'framer-motion'

interface IfooterAnimation extends Variants{
    hidden:{
        y:number,
        opacity:number
    },
    visible: (custom:number) =>{
        y:number,
        opacity: number,
        transition:{
            delay:number
        }
    }
}
const footerAnimation: IfooterAnimation = {
    hidden:{
        y: 100,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity:1,
        transition: {delay: custom * 0.2}
    })
}

export function Footer(){
    return(
        <footer className="footer">
            <motion.div variants={footerAnimation} initial='hidden' whileInView='visible' custom={2} viewport={{once:true}} className="footer__wrapper conteiner">
                <div className="footer__leftPart">
                    <div className="footer__lastInfo">
                        <a href="-" className="footer__logo">
                            <LogoIcon/>
                        </a>
                        <div className="footer__text">
                            <p>Попробуй новые эмоции и впечатления прямо у себя дома</p>
                        </div>
                    </div>
                    <div className="footer__confidence">
                        <div className="footer__iconContact">
                            <div className="footer__icon hover-accent" title="Instagram">
                                <Instagram/>
                            </div>
                            <div className="footer__icon hover-accent" title="Telegram">
                                <Telegram/>
                            </div>
                            <div className="footer__icon hover-accent" title="Facebook">
                                <Facebook/>
                            </div>
                            <div className="footer__icon hover-accent" title="Gmail">
                                <Gmail/>
                            </div>                            
                        </div>
                        <div className="footer__political">Политика конфиденциальности</div>                        
                    </div>
                </div>
                <div className="footer__rightPart">
                    <nav className="footer__menu">
                        <h3 className="footer__title">Компания</h3>
                        <ul className="footer__list footer__list--big-gap">
                            <li className="footer__item">
                                <a href="-" className="footer__link">О нас</a>
                            </li>                            
                            <li className="footer__item">
                                <a href="-" className="footer__link">Каталог</a>
                            </li>                            
                            <li className="footer__item">
                                <a href="-" className="footer__link">Контакты</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="footer__menu">
                        <h3 className="footer__title">Продукция</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="-" className="footer__link">Шлемы виртуальной реальности</a>
                            </li>
                            <li className="footer__item">
                                <a href="-" className="footer__link">Очки виртуальной реальности</a>
                            </li>
                            <li className="footer__item">
                                <a href="-" className="footer__link">Системы виртуальной реальности</a>
                            </li>                           
                            <li className="footer__item">
                                <a href="-" className="footer__link">Аксессуары</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </motion.div>
        </footer>
    )
}
