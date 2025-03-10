import { Form } from "../../Components/Form/Form";

export function Contacting(){
    return(
        <article className="contact">
            <Form/>
            <div className="contact__wrapper">
                <h2 className="contact__title">Связаться с нами</h2>
                <ul className="contact__list">
                    <li className="contact__item">
                        <div className="contact__connection">
                            <div className="contact__way">
                                <p>Горячая линия:</p>
                            </div>
                            <div className="contact__meaning">
                                <a href="tel:+89034390509">89034390509</a>
                            </div>
                        </div>
                    </li>
                    <li className="contact__item">
                        <div className="contact__connection">
                            <div className="contact__way">
                                <p>Телеграмм:</p>
                            </div>
                            <div className="contact__meaning">
                                <a href="-">@Owksw</a>
                            </div>
                        </div>
                    </li>
                    <li className="contact__item">
                        <div className="contact__connection">
                            <div className="contact__way">
                                <p>WhatsApp:</p>
                            </div>
                            <div className="contact__meaning">
                                <a href="tel:+89034390509" >89034390509</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </article>
    )
}
