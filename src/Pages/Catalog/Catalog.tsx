import {Form }from '../../Components/Form/Form'
import { useProductBascet } from '../../Store/ProductBascet'
import { useSortStore } from '../../Store/SortStore'

export interface IProduct{
    name:string,
    manifacture: string,
    price:number,
    imgURL: string,
    id: number    
}

export const product:Array<IProduct> = [
    {
        id: 0,            
        name: 'Apple Vision pro',
        manifacture: 'Apple',
        price: 260000,
        imgURL: '/img/AppleVisionPro.jpg'
    },
    {
        id: 1,
        name: 'Valve Index Vr Kit',
        manifacture: 'Valve',
        price: 120000,
        imgURL: '/img/ValveIndexVrKit.jpeg'
    },
    {
        id: 2,
        name: 'Play Station VR 2',
        manifacture: 'Play Station',
        price: 160000,
        imgURL: '/img/PlayStationVR2.jpeg'
    },
    {
        id: 3,
        name: 'HTC Vive Focus 3',
        manifacture: 'HTC',
        price: 90000,
        imgURL: '/img/HTCViveFocus3.png'
    },
    {
        id: 4,
        name: 'HTC Vive Pro 2',
        manifacture: 'HTC',
        price: 100000,
        imgURL: '/img/HTCVivePro2.jpg'
    },
    {
        id: 5,
        name: 'Oculus Quest 3',
        manifacture: 'Oculus',
        price: 130000,
        imgURL: '/img/oculus.jpg'
    },
    {
        id: 6,
        name: 'Hoco DCA10',
        manifacture: 'Hoco',
        price: 40000,
        imgURL: '/img/Hoco.webp'
    },
    {
        id: 7,
        name: 'Pico 4',
        manifacture: 'Pico',
        price: 40000,
        imgURL: '/img/pico4.webp'
    },
    {
        id: 8,
        name: 'Rombica',
        manifacture: 'Rombica',
        price: 60000,
        imgURL: '/img/rombica.jpg'
    },
    {
        id: 9,
        name: 'White',
        manifacture: 'HTC',
        price: 80000,
        imgURL: '/img/white.webp'
    },
    {
        id: 10,
        name: 'Ritmix 3',
        manifacture: 'Ritmix',
        price: 100000,
        imgURL: '/img/ritmix3.jpg'
    },
    {
        id: 11,
        name: 'Hiper',
        manifacture: 'Hiper',
        price: 110000,
        imgURL: '/img/hiper.webp'
    },
    {
        id: 12,
        name: 'Bobo VR',
        manifacture: 'Bobo',
        price: 70000,
        imgURL: '/img/bobovr.jpg'
    },
    {
        id: 13,
        name: 'Popo',
        manifacture: 'Popo',
        price: 50000,
        imgURL: '/img/popo.webp'
    },
    {
        id: 14,
        name: 'HomDo',
        manifacture: 'HomDo',
        price: 65000,
        imgURL: '/img/Homdo.webp'
    }
]

export function Catalogs(){

    const {value} = useSortStore()
    
    const newSCR = product.filter((item) => item.name === value)
    
    return(
        <div className="conteiner">
            <Form/> 
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
    
    const {addProduct} = useProductBascet()
    
     return(
        <div className="catalog__card">
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
            </div>
             <button onClick={() => addProduct(id, product)} className="button catalog__btn">Закать</button>
        </div> 
     )
}
