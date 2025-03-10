import { Link } from '@tanstack/react-router'

export function EmptyBascet(){
    return(       
            <article className="empty">
                <div className="empty__wrapper">
                    <h2 className="empty__title">Козина пуста</h2>
                    <div className="empty__description">
                        <p>Добавьте товар и он дубет отображаться здесь</p>
                    </div>
                    <button className="empty__btn button">
                        <Link to='/'>Каталог</Link>
                    </button>
                </div>                
            </article>       
    )
}
