import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton';

import css from './card_actualite.styled.scss'
import CardCategorie from '../card-categories/card_categories'

interface IaCard{
    source?: string;
    titre?: string,
    url?: string,
    auteur
}

const CardActualite: React.FC<IaCard> = ({ 
    source, 
    titre,
    url,
    auteur
}) => {
    return(
        <Link href={url}>
            <div className={css.container_card_actualite}>
                <div className={css.card_actualite}>
                        <Image
                            src= {source}
                            alt = "Image actualité"
                            width = {854}
                            height = {543}
                        />
                        <h2 className={css.label_actualite}>
                            {titre}
                        </h2>                        
                </div> 
            </div>
        </Link>
    )
}

export default CardActualite