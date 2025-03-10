import { Link } from "@tanstack/react-router";


export function AroundClock(){
    return(
        <article className="around user-attention">
            <div className="around__wrapper">            
                <div className="around__info">
                    <h2 className="around__title">Работаем
                         круглосуточно</h2>
                    <div className="around__text">
                        <p>Наш интернет-магазин работает 24/7.Для нас важен каждый клиент, поэтому мы делаем всё, чтобы Вы остались довольны.                  
                        </p>                
                    </div>
                </div>                
                <button className="button around__btn">
                    <Link to="/">Посмотреть товары</Link>
                </button> 
            </div>        
        </article>
    )
}
