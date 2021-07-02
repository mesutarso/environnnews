import Image from 'next/image'

import css from './card_first_article.styled.scss'
import CardCategorie from '../card-categories/card_categories'

interface ICard {
    titre?: string,
    source?: string
}

const CardFirstArticle: React.FC<ICard> = ({
    titre,
    source
}) => {
    return(
        <div className={css.card_first_article}>
            <div className={css.image_card_first_article}>
                <Image
                    src= {source}
                    alt="Image realisation"
                    width={980}
                    height={551}
                />
                <h2>
                    {titre}

                </h2>
            </div>
        </div>
    )
}

export default CardFirstArticle