import { useModalMenu } from "../../Store/ModalMenuStore"


export function ModalMenu(){

    const {isActive, setActive} = useModalMenu();

    return(
        <div className={'modal '+ (isActive ? 'active' : 'close visually-hidden')}> 
            <button onClick={setActive} className="modal__btn-close btn-reset">                              
            </button>           
            <div className="modal__wrapper">                
                <ul className="modal__list">
                    <li className="modal__item">
                        <a href="-" className="modal__link">О нас</a>
                    </li>
                    <li className="modal__item">
                        <a href="-" className="modal__link">Команда</a>
                    </li>
                    <li className="modal__item">
                        <a href="-" className="modal__link">Каталог</a>
                    </li>
                    <li className="modal__item">
                        <a href="-" className="modal__link">Спецусловия</a>
                    </li>
                    <li className="modal__item">
                        <a href="-" className="modal__link">Контакты</a>
                    </li>
                </ul>
            </div>            
        </div>
    )
}
