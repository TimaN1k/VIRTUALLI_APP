import { MessegeProduct } from '../../Components/Bascet/MessegeProduct/MessegeProduct'
import {Form }from '../../Components/Form/Form'
import { useFavoriteStore } from '../../Store/FavoriteStore'
import { useSortStore } from '../../Store/SortStore'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useProductBascet } from '../../Store/ProductBascet';
import { Link } from '@tanstack/react-router';

export interface IProduct{
    name?:string,
    manifacture?: string,
    price?:number,
    imgURL?: string,
    id?: number,
    quantity?: number,
    showAnimation?: boolean
}

export const product:Array<IProduct> = [
    {
        id: 0,            
        name: 'Apple Vision pro',
        manifacture: 'Apple',
        price: 260000,
        imgURL: '/img/AppleVisionPro.jpg',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 1,
        name: 'Valve Index Vr Kit',
        manifacture: 'Valve',
        price: 120000,
        imgURL: '/img/ValveIndexVrKit.jpeg',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 2,
        name: 'Play Station VR 2',
        manifacture: 'Play Station',
        price: 160000,
        imgURL: '/img/PlayStationVR2.jpeg',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 3,
        name: 'HTC Vive Focus 3',
        manifacture: 'HTC',
        price: 90000,
        imgURL: '/img/HTCViveFocus3.png',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 4,
        name: 'HTC Vive Pro 2',
        manifacture: 'HTC',
        price: 100000,
        imgURL: '/img/HTCVivePro2.jpg',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 5,
        name: 'Oculus Quest 3',
        manifacture: 'Oculus',
        price: 130000,
        imgURL: '/img/oculus.jpg',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 6,
        name: 'Hoco DCA10',
        manifacture: 'Hoco',
        price: 40000,
        imgURL: '/img/Hoco.webp',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 7,
        name: 'Pico 4',
        manifacture: 'Pico',
        price: 40000,
        imgURL: '/img/pico4.webp',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 8,
        name: 'Rombica',
        manifacture: 'Rombica',
        price: 60000,
        imgURL: '/img/rombica.jpg',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 9,
        name: 'White',
        manifacture: 'HTC',
        price: 80000,
        imgURL: '/img/white.webp',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 10,
        name: 'Ritmix 3',
        manifacture: 'Ritmix',
        price: 100000,
        imgURL: '/img/ritmix3.jpg',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 11,
        name: 'Hiper',
        manifacture: 'Hiper',
        price: 110000,
        imgURL: '/img/hiper.webp',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 12,
        name: 'Bobo VR',
        manifacture: 'Bobo',
        price: 70000,
        imgURL: '/img/bobovr.jpg',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 13,
        name: 'Popo',
        manifacture: 'Popo',
        price: 50000,
        imgURL: '/img/popo.webp',
        quantity: 1,
        showAnimation: false,
    },
    {
        id: 14,
        name: 'HomDo',
        manifacture: 'HomDo',
        price: 65000,
        imgURL: '/img/Homdo.webp',
        quantity: 1,
        showAnimation: false,
    }
]

export const Catalogs:React.FC<IProduct> = ({id}) => {

    const {value} = useSortStore()    
    const newSCR = product.filter((item) => item.name === value)// Не забудь изменить названия
    
    return(
        <div className="conteiner">
            <Form/> 
            <MessegeProduct index={id} messege={'Товар добавлен в корзину'}/>
            <article className="catalog">
            <div className="catalog__wrapper">
                {value ? (
                    newSCR.map((item) => <Card key={item.id} {...item}/>)                    
                ) : ( product.map((prod) => <Card key={prod.id} {...prod}/>))}                                                                          
            </div>
        </article>
        </div>
    )
}

const Card:React.FC<IProduct> = ({name, price, manifacture, imgURL, id}) => {   
    
    const {addProduct, productInBascet} = useProductBascet()

    const {productInFavorite,removeProductFavorite, addProductFavorite} = useFavoriteStore()
    
    const isFavorite = productInFavorite.some((favoriteItem) => favoriteItem?.id === id);

    function toggleFavorite() {
        if (isFavorite) {
            removeProductFavorite(id); // Удаляем товар из избранного
        } else {
            addProductFavorite(id, product); // Добавляем товар в избранное
        }
    }   
    
    const inBuscet = productInBascet.find((productIn) => productIn?.id == id) !== undefined
    
     return(
        <div className="catalog__card">
            <button type='button' onClick={toggleFavorite} className="catalog__favorite btn-reset">
                {isFavorite ? <FavoriteIcon style={{color:'purple'}}/> : <FavoriteBorderIcon style={{color: 'black'}} />}                
            </button>
            <img className="catalog__imges" src={imgURL} alt="img"/>
            <div className="catalog__cardInfo">
                <div className="catalog__productName">
                    <p>{name}</p>
                </div>
                <div className="catalog__manifact">
                    <p>Производитель: {manifacture}</p>
                </div>
                <div className="catalog__specification">
                    <p>Цена: {price}</p>
                </div>
                {!inBuscet && <button type='button' className='button' onClick={() => addProduct(id!, product)}>Добавить в корзину</button>}
                {inBuscet && <button className='button' type='button'>
                    <Link to='/bascet'>В корзине</Link>
                </button>}
            </div>             
        </div> 
     )
}
