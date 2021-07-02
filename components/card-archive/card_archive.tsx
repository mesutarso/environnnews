import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

import css from './card_archive.styled.scss'

interface IaYoutube{
    source?: string;
    description?: string;
    data?: [];
    titre?: string
}

const CardArchive: React.FC<IaYoutube> = ({ 
    source, 
    description,
    data,
    titre
}) => {
    return(
        <Fade bottom>
            <div className={css.container_card_archive}>
                
                    <ul>
                        {data.slice(0,6).map(({ titre, _id, categorie })=>{
                            
                            return(
                                <Link href = {`/article/${categorie}/${_id}`} key={_id}>
                                    <li>
                                        <h2 className={css.title_archive}> 
                                            {titre}  
                                        </h2>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
            </div>
        </Fade>
    )
}

export default CardArchive