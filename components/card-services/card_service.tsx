import Image from 'next/image'

import css from './card_service.styled.scss'

import Fade from 'react-reveal/Fade';

interface IaService{
    titre?: string;
    content?: string;
    source?: string;
    classe?: string
}

const CardService: React.FC<IaService> = ({ 
    titre, 
    content, 
    source, 
    classe 
}) => {
    return(
        <Fade bottom>

            <div className={classe} id={css.card_service}>
                <div className={css.image}>
                    <Image
                            src={source}
                            alt="Image redaction"
                            width={300}
                            height={180}
                    /> <br/>
                </div>
                <div className={css.content_service}>
                    <div className={css.titre_serive}>
                        <h2>{titre}</h2>
                    </div>
                    <div className={css.description_service}>
                        <p>
                            {content}

                        </p>
                    </div>
                </div>

            </div>
        </Fade>
    )
}

export default CardService