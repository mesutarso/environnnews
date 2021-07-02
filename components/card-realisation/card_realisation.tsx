import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

import css from './card_realisation.scss'

interface IaRealisation{
    source?: string;
    description?: string;
}

const CardRealisation: React.FC<IaRealisation> = ({ 
    source, 
    description 
}) => {
    return(
        <Fade bottom>
            <div className={css.card_realisation}>
            <Link href='#'>
            <div >
                <div className={css.image}>
                    <Image
                        src= {source}
                        alt="Image realisation"
                        width={400}
                        height={200}
                    /> <br/>
                </div>
                <div className={css.content_text_realisation}>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            </Link>
            </div>
        </Fade>
    )
}

export default CardRealisation