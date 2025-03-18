import { useProductBascet } from "../../Store/ProductBascet"
import { QuantityProduct } from "../widgets/QuantityProduct/QuantityProduct";
import { EmptyBascet } from "./EmptyBascet/EmptyBascet"
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useFavoriteStore } from "../../Store/FavoriteStore";
import { product } from "../../Pages/Catalog/Catalog";
import FavoriteIcon from '@mui/icons-material/Favorite';

export interface IArrProductInBascet{    
    name?:string,
    manifacture?: string,
    price?:number,
    imgURL?: string,
    id?: number,
    quantity?: number    
 } 

export function Bascet(){

    const {isEmpty, productInBascet, lengthProductInBascet} = useProductBascet()  
   

    function totalSum():any{
        return productInBascet.reduce((all, currentPrice) => all + (currentPrice?.quantity! * currentPrice?.price!), 0) 
    }

    const allSumProductInBascet = totalSum()

    console.log(allSumProductInBascet)
    
    return(
        <>
        <div className="conteiner">
            <section className="bascet">
                <article className="card-bascet">
                    {!isEmpty ? (<div className="card-bascet__des">
                        <h2 className="card-bascet__title">
                        Корзина
                        </h2>
                        <p className="card-bascet__ligth-prod">
                            {String(lengthProductInBascet) + ' товаров'}
                        </p>
                    </div>) : ('')}
                    {isEmpty ? (<EmptyBascet/>) : (productInBascet.map((prod) => <CardBascet key={prod?.id} {...prod}/>))}
                </article>
                { !isEmpty && (
                     <article className="sumProduct">
                        <h2 className="sumProduct__title">Итого:</h2>
                        <p className="sumProduct__price">{allSumProductInBascet}</p>
                     </article>
                    )
                }                
            </section>
        </div>
        </>
    )
}

export const CardBascet:React.FC<IArrProductInBascet> = ({imgURL, name, price, manifacture, id, quantity}) =>{

    const {deleteProductInBascet} = useProductBascet() 

    const sumProduct = price! * quantity!

    const { addProductFavorite, removeProductFavorite, productInFavorite } = useFavoriteStore();

    const isFavorite = productInFavorite.some((favoriteItem) => favoriteItem?.id === id);

    function toggleFavorite() {
        if (isFavorite) {
            removeProductFavorite(id); 
        } else {
            addProductFavorite(id, product);
        }
    }  

    return (
        <>
        <div className="card-bascet__wrapper">
            <div className="card-bascet__info">
                <img src={imgURL} alt="Img" className="card-bascet__img" />
                <div className="card-bascet__description">
                    <p>{name}</p>
                    <p className="desc--c">{manifacture}</p>
                    <div className="card-bascet__buttonPart">
                        <button className="btn-reset" title="Добавить  в избранное" onClick={toggleFavorite}>
                            {isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                        </button>
                        <button onClick={() => deleteProductInBascet(id)} title='Удалить из корзины' className="btn-reset">
                            <DeleteIcon className="card-bascet__del"/>
                        </button> 
                    </div>                 
                </div>
            </div>
            <QuantityProduct id={id} quantity={quantity}/>                  
            <div className="card-bascet__price">
                <p>{sumProduct}</p>
            </div>            
        </div>        
        </>
    )
}
