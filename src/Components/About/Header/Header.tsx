import { LogoIcon } from '../../IconComponents/HeaderIcon/LogoIcon';
import { CartIcon } from '../../IconComponents/HeaderIcon/CartIcon';
import { PhoneIcon } from '../../IconComponents/HeaderIcon/PhoneIcon';
import { SearchIcon } from '../../IconComponents/HeaderIcon/SearchIcon';
import { useModalMenu } from '../../../Store/ModalMenuStore';
import {motion, Variants} from 'framer-motion'
import { Link } from '@tanstack/react-router';

interface IheadAnimation extends Variants{
    hidden:{
        opacity:number
    },
    visible: (custom:number) =>{
        transition:{
            delay:number
        }
        opacity:number
    }
}

const headAnimation: IheadAnimation = {
    hidden:{
        opacity:0
    },
    visible: custom => ({
        transition: {delay: custom * 0.2},
        opacity: 1
    })
}

export function Header(){

    const {isActive, setActive} = useModalMenu();

    return(
        <motion.header custom={2} viewport={{once:true}} initial='hidden' whileInView='visible' variants={headAnimation} className="header">            
            <div className="header__wrapper">
                <a href="-" className="header__logo">
                    <LogoIcon/>
                </a>
                <div className="header__navigation hidden-mobile">
                    <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__item">
                            <Link to='/about' className="header__link">О нас</Link>
                        </li>
                        <li className="header__item">
                            <a href="-" className="header__link">Команда</a>
                        </li>
                        <li className="header__item">
                            <a href="-" className="header__link">Каталог</a>
                        </li>
                        <li className="header__item">
                            <a href="-" className="header__link">Спецусловия</a>
                        </li>
                        <li className="header__item">
                            <Link to='/contact' className="header__link">Контакты</Link>
                        </li>
                    </ul>
                    </nav>
                    <div className="header__inner">  

                        {/* В каждом компоненте иконки className = header__icon*/}
                        <button className="btn-reset">
                           <PhoneIcon/> 
                        </button> 
                        <button className="btn-reset">
                           <SearchIcon/>  
                        </button>                                  
                        <button className="btn-reset header__product-counter">
                           <CartIcon/> 
                        </button>                                              
                    </div>
                </div>
                <button onClick={setActive} className={'header__burger-btn btn-reset visualli-mobile ' + (!isActive ? '' : 'visually-hidden')}></button>
            </div>
        </motion.header>
    )
}
