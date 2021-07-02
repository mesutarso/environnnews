import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

import css from './card_equipe.style.scss'

interface IaEquipe{
    nom_equipe?: string; 
    petite_description?: string; 
    mindset_equipe?: React.ReactNode;
    source?: string;
    url_gmail?: string;
    url_facebook?: string;
    url_instagram?: string
}


const CardEquipe: React.FC<IaEquipe> = ({ 
    nom_equipe, 
    petite_description, 
    mindset_equipe, 
    source, 
    url_gmail,
    url_facebook,
    url_instagram 
}) => {
    return(
        

            <div className={css.card_equipe}>
                {/* <Fade bottom> */}
                    <div className={css.image_card_equipe}>
                        <Image
                                src={source}
                                alt="Image redaction"
                                width={235}
                                height={225}
                        /> 
                    </div>
                {/* </Fade>
                <Fade bottom cascade> */}
                    <div className={css.content_card_equipe}>
                        <h2 className={css.nom_equipier}>
                            {nom_equipe}
                        </h2>
                        <h4 className={css.description}>
                            {petite_description}
                        </h4>
                        <p className={css.mindset}>
                            {mindset_equipe}
                        </p>
                        <p className={css.reseaux_equipe}>
                            <Link href={url_gmail}>
                                <i aria-hidden className="far fa-envelope"></i>
                            </Link>
                            <Link href={url_facebook}>
                                <i aria-hidden = 'true' className="fab fa-facebook"></i> 
                            </Link>
                            <Link href={url_instagram}>
                                <i aria-hidden = 'true' className="fab fa-instagram"></i> 
                            </Link>
                            
                        </p>
                    </div>
                {/* </Fade> */}
            </div>
       
    )
}

export default CardEquipe