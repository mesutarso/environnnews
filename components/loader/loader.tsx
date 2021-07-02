import Fade from 'react-reveal/Fade'
import Link from 'next/link'

import css from './loader.styled.scss'

const Loader = () => {
    return(
        <div className={css.container_loader}>
            <Fade bottom>
                <h1 className={css.label_message_confirmation}>
                    Merci pour votre message, nous essayerons de vous contacter le plus tôt  possible.
                </h1>
                <Link href='/'>
                    <a><i aria-hidden className="fas fa-long-arrow-alt-left"></i> Retour à la page d'accueil</a>
                </Link>
            </Fade>
        </div>
    )
}

export default Loader