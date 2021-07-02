import { useRouter } from 'next/router'
import Image from 'next/image'
import Slider from 'react-slick'

import css from './card_archive_article_styled.scss'
import CardArchive from '../card-archive/card_archive'

const ArchiveArticle = ({ data }) =>{
    
    const router = useRouter()
    const thisRouter = router.asPath
    
    return(
        <div className={css.card_archive_article}>
            <h2 className={css.title_card_archive}>
                LES OPPORTINUTES
                <div className={css.line_title_art}></div> 
            </h2>
            <div>
                <CardArchive
                    data = {data}
                />
            </div>
        </div>
    )
}

export default ArchiveArticle