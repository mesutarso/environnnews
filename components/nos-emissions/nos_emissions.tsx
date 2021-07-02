import Link from 'next/link'

import css from './nos_emissions.styled.scss'
import CardArticle from '../card-articles/card_articles'

const Emissions = ({ items }) => {
    return(
        <div className={css.video_container}>
            <div className={css.content_video_home}>
                {
                    items.slice(2, 6).map((
                        {
                            _id,
                            titre,
                            categorie,
                            file
                        }
                    ) => {
                        return(
                            <CardArticle
                                key={_id}
                                titre = {titre}
                                url = {`/article/${categorie}/${_id}`}
                                source = {file === undefined ? '/images/reportage.jpg' : file}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Emissions