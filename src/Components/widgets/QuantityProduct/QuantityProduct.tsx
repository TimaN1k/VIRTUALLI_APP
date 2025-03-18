import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useProductBascet } from '../../../Store/ProductBascet';
import { IArrProductInBascet } from '../../Bascet/Bascet';

export const QuantityProduct:React.FC<IArrProductInBascet> = ({id, quantity}) => {

    const {addQuantityProduct, removeQuantityProduct} = useProductBascet()

    return(
        <div className="quantity">
            <button onClick={() => removeQuantityProduct(id)} className="quantity__remove" type="button">
                <RemoveIcon/>
            </button>
            <div className="quantity__number">
                <p>{quantity}</p>
            </div>
            <button onClick={() => addQuantityProduct(id)} type="button" className="quantity__add">
                <AddIcon/>
            </button>
        </div>
    )
}
