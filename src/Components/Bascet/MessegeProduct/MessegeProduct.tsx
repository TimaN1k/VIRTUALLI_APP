import { useProductBascet } from "../../../Store/ProductBascet"

interface IMessege{    
    index: number|undefined
    messege: string
}

export const  MessegeProduct:React.FC<IMessege> = ({index, messege}) => {
    
    const {productInBascet} = useProductBascet()
    
    const isProductInBascetAnimation = productInBascet.find((item) => {
        if(item?.id === index){
            if(item?.showAnimation){
                return true                
            }            
        }
    })

    return(
        <div className={`messege ${ isProductInBascetAnimation ? ' messege-ani' : ''}`}>
            <p>{messege}</p>
        </div>        
    )
}
