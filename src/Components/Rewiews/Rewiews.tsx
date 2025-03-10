import StarIcon from '@mui/icons-material/Star';
import { motion, Variants } from 'framer-motion'

interface Irewiews extends Variants{
    hidden:{
        x:number,
        opacity: number
    },
    visible: (custom:number) => {
        x: number,
        opacity: number,
        transition:{
            delay:number
        }
    }
}

const rewiewsTitle: Irewiews = {
    hidden:{
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition:{delay: custom * 0.2}
    })        
}

const rewiewsCard: Irewiews = {
    hidden:{
        x: +200,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition:{delay: custom * 0.2}
    })        
}

export function Rewiews(){
    return(
          <article className="rewiews">
            <div className="rewiews__wrapper">
                <motion.h2 variants={rewiewsTitle} initial='hidden' whileInView='visible' custom={2} viewport={{once:true}} className="rewiews__title">Отзывы</motion.h2>
                <div className="rewiews__commentPath">
                    <motion.div variants={rewiewsCard} initial='hidden' whileInView='visible' custom={2} viewport={{once:true}} className="rewiews__commentCard card-border">
                        <div className="rewiews__stars">
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                        </div>
                        <div className="rewiews__text">
                            <p>
                                По 30 минут вместо тренировки, особенно если купить утяжелители и играть во что-то вроде BeatSaber. Глаза не устают, контроллеры отзывчивые
                            </p>
                        </div>
                        <div className="rewiews__user">
                            <div className="rewiews__img"></div>
                            <div className="rewiews__info">
                                <div className="rewiews__name">Антон</div>
                                <div className="rewiews__product">Valve Index VR Kit</div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={rewiewsCard} initial='hidden' whileInView='visible' custom={3} viewport={{once:true}} className="rewiews__commentCard card-border">
                        <div className="rewiews__stars">
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                        </div>
                        <div className="rewiews__text">
                            <p>Давно хотели эти очки. Прямо до фанатизма :D Буду разбираться и разрабатывать под них разные приложения.</p>
                        </div>
                        <div className="rewiews__user">
                            <div className="rewiews__img"></div>
                            <div className="rewiews__info">
                                <div className="rewiews__name">Татьяна</div>
                                <div className="rewiews__product">Google Glass Enterptise edition 2</div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div variants={rewiewsCard} initial='hidden' whileInView='visible' custom={4} viewport={{once:true}} className="rewiews__commentCard card-border">
                        <div className="rewiews__stars">
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                            <StarIcon/>
                        </div>
                        <div className="rewiews__text">
                            <p>Картинка 2*2448 при частоте 120Гц(RTX3090, i9) выглядит великолепно, движение плавное(Fallout 4VR, Alyx, Doom VFR, ..).</p>
                        </div>
                        <div className="rewiews__user">
                            <div className="rewiews__img"></div>
                            <div className="rewiews__info">
                                <div className="rewiews__name">София</div>
                                <div className="rewiews__product">HTC VIVE PRO 2</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
          </article>
    )
}
