import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

import css from './card_youtube.styled.scss'

interface IaYoutube{
    source?: string;
    description?: string;
}

const CardYoutube: React.FC<IaYoutube> = ({ 
    source, 
    description 
}) => {
    return(
        <Fade bottom>
            <div className={css.card_youtube}>
            <Link href='#'>
            <div className={css.contrainer_flex_youtube}>
                <div className={css.image}>
                    <iframe 
                        title = {description}
                        width="300" 
                        height="200"
                        src={source}
                        frameBorder="0"
                        
                    ></iframe>
                </div>
                <div className={css.content_text_realisation}>
                    <p>
                        {/* {description} */}
                    </p>
                </div>
            </div>
            </Link>
            </div>
        </Fade>
    )
}

export default CardYoutube