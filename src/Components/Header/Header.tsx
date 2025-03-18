import { LogoIcon } from '../IconComponents/HeaderIcon/LogoIcon';
import { CartIcon } from '../IconComponents/HeaderIcon/CartIcon';
import { useModalMenu } from '../../Store/ModalMenuStore';
import {motion, Variants} from 'framer-motion'
import { Link } from '@tanstack/react-router';
import PersonIcon from '@mui/icons-material/Person';
import { useFormStore } from '../../Store/FormStore';
import { useProductBascet } from '../../Store/ProductBascet';
import { Sort } from './SortProductInput/SortProduct';
import { useFavoriteStore } from '../../Store/FavoriteStore';
import FavoriteIcon from '@mui/icons-material/Favorite';

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

    const {isVis} = useFormStore()
    const {isActive, setActive} = useModalMenu() 
    const { lengthProductInBascet, isEmpty } = useProductBascet()     
    const { isEmptyinFavorite } = useFavoriteStore()     

    return(
        <motion.header custom={2} viewport={{once:true}} initial='hidden' whileInView='visible' variants={headAnimation} className="header">            
            <div className="header__wrapper">
                <Link to='/about' className="header__logo">
                    <LogoIcon/>
                </Link>     
                <Sort/>                   
                <div className="header__navigation hidden-mobile">
                    <nav className="header__menu">
                    <ul className="header__list">
                        <li className="header__item">
                            <Link to='/about' className="header__link">О нас</Link>
                        </li>                        
                        <li className="header__item">
                            <Link to='/' className="header__link">Каталог</Link>
                        </li>                        
                        <li className="header__item">
                            <Link to='/contact' className="header__link">Контакты</Link>
                        </li>
                    </ul>
                    </nav>
                    <div className="header__inner">
                        {/* В каждом компоненте иконки className = header__icon*/}
                        { isEmptyinFavorite ? 
                            <button type='button' className='btn-reset'>
                                 <Link to='/favorites'>
                                 <FavoriteIcon/>
                                 </Link>
                            </button> : <></>}
                        <button onClick={isVis} className="btn-reset">
                           <PersonIcon/>
                        </button>                                                        
                        <button className="btn-reset header__product-counter">
                           <Link to='/bascet'>
                                <CartIcon/> 
                           </Link>
                           {isEmpty ? ('') : (<div className="bascetIndication">{lengthProductInBascet}</div>)}
                        </button>                                              
                    </div>
                </div>
                <button onClick={setActive} className={'header__burger-btn btn-reset visualli-mobile ' + (!isActive ? '' : 'visually-hidden')}></button>
            </div>
        </motion.header>
    )
}
