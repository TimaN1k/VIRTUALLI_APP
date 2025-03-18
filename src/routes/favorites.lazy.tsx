import { createLazyFileRoute } from '@tanstack/react-router'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useFavoriteStore } from '../Store/FavoriteStore'
import { IArrProductInBascet } from '../Components/Bascet/Bascet'

export const Route = createLazyFileRoute('/favorites')({
  component: RouteComponent,
})

function RouteComponent() {
  
  const {isEmptyinFavorite, productInFavorite} = useFavoriteStore()

  return (
    <article className="favorites">
        {isEmptyinFavorite ? <h2>Избранное</h2> : <></>}
        {isEmptyinFavorite ? productInFavorite.map((element) => <CardInFavotite key={element?.id} {...element}/>) : <></>}        
    </article>
  )
}

const CardInFavotite:React.FC<IArrProductInBascet> = ({imgURL, name, manifacture, id}) => {
  
  const {removeProductFavorite} = useFavoriteStore()

  return(
    <>
        <div className="card-bascet__wrapper">
            <div className="card-bascet__info">
                <img src={imgURL} alt="Img" className="card-bascet__img" />
                <div className="card-bascet__description">
                    <p>{name}</p>
                    <p className="desc--c">{manifacture}</p>
                    <div className="card-bascet__buttonPart">
                        <button onClick={() => removeProductFavorite(id)} className="btn-reset" title="Удалить из избранного">
                            <FavoriteIcon className="card-bascet__fav"/>
                        </button>                        
                    </div>                 
                </div>
            </div>                
        </div>        
        </>
  )
}
