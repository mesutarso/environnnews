import Link from 'next/link'

import css from './container_threed_card.styled.scss'
import CardArticle from '../card-articles/card_articles'

const ContainerThreed = ({ conservations }) => {
    return(
        <div className={css.container_slider_home}>
            <h1>{conservations[0].categorie.toUpperCase()} <div className={css.line_title_art}></div></h1>
            <div className={css.three_card}>
                {conservations.slice(0, 3).map(({
                    _id,
                    file,
                    titre,
                    categorie
                })=>{
                    return(
                        <div key = {_id}>
                            <CardArticle
                                titre = {titre}
                                url = {`/article/${categorie}/${_id}`}
                                source = {file === undefined ? '/images/reportage.jpg' : file}
                            />
                        </div>
                    )
                })}
            </div>
            <div className={css.voir_plus}>
                <Link href={`/article/${conservations[0].categorie}`}>
                    <a className={css.plus_contenu}>Voir tous les contenus</a>
                </Link>
            </div>
        </div>
    )
}

export default ContainerThreed