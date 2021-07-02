import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

import css from './card_articles.styled.scss'

interface IArticle{
    url?: string;
    titre?: string;
    source?: string;
}

const CardArticles: React.FC<IArticle> = ({ 
    url, 
    titre, 
    source 
}) => {
    return(
        <Fade bottom>
            <Link href={url}>
                    <div className={css.container_card_articles}>
                        <div className={css.image_card_article}>
                            <Image
                                src= {source}
                                alt="Image article"
                                layout="fill"
                            /> 
                        </div>
                        <div className={css.content_card_article}>
                            <h2 className={css.label_article_card}>
                                {titre.substring(0, 90) + '...'}
                            </h2>
                        </div>
                    </div>
            </Link>
        </Fade>
    )
}

export default CardArticles
