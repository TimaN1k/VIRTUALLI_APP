import { useProductBascet } from "../../Store/ProductBascet"
import { EmptyBascet } from "./EmptyBascet/EmptyBascet"
import DeleteIcon from '@mui/icons-material/Delete';

export interface IArrProductInBascet{    
    name?:string,
    manifacture?: string,
    price?:number,
    imgURL?: string,
    id?: number   
     
 } 

export function Bascet(){

    const {isEmpty, productInBascet, sumProductInBascet} = useProductBascet()

    return(
        <>
        <div className="conteiner">
            <section className="bascet">
                <div className="card-bascet">
                    {isEmpty ? (<EmptyBascet/>) : (productInBascet.map((prod) => <CardBascet key={prod?.id} {...prod}/>))}
                </div>
                {sumProductInBascet ? (
                     <article className="sumProduct">
                        <h2 className="sumProduct__title">Итого:</h2>
                        <p className="sumProduct__price">{sumProductInBascet}</p>
                     </article>
                    ) : (<></>)}                
            </section>
        </div>
        </>
    )
}
const CardBascet:React.FC<IArrProductInBascet> = ({imgURL, name, price, manifacture, id}) =>{

    const {deleteProductInBascet} = useProductBascet()    
    

    return (
        <>
        <div className="card-bascet__wrapper">
            <div className="card-bascet__info">
                <img src={imgURL} alt="Img" className="card-bascet__img" />
                <div className="card-bascet__description">
                    <p>{name}</p>
                    <p className="desc--c">{manifacture}</p>
                    <button onClick={() => deleteProductInBascet(id, price)} title='Удалить из корзины' className="favdel__btn btn-reset">
                    <DeleteIcon/>
                    </button>                  
                </div>
            </div>            
            <div className="card-bascet__price">
                <p>{price}</p>
            </div>            
        </div>        
        </>
    )
}

