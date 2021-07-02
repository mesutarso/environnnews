import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import axios from 'axios'

import css from './spot_publicitaire.styled.scss'
import Layout from '../../components/layout'
import CardYoutube from '../../components/card-youtube/card_youtube'

import IBaniere from '../../entities/baniere'
import IBreaking from '../../entities/article'

interface ISpot{
    spotPublicitaire?: {
        items?: []
    },
    pubBaniere: IBaniere[]
    breakingData: IBreaking[]
}

const SpotPublicitaire: NextPage<ISpot> = ({ 
    spotPublicitaire : { 
        items 
    } ,
    pubBaniere,
    breakingData
}) => {

    return(
        <Layout
            title = 'Environews RDC | Spot publicitaire'
            title_meta = 'Environews RDC | Spot publicitaire'
            description = 'Environews RDC vous réalise des spot publicitaire a un prix qui défis toute concurrence. Contactez nous pour discuter de votre projet.'
            image_article='/images/favicon.png'
            baniere={pubBaniere}
            articles={breakingData}
        >
            <div className={css.container_spot_publicitaire}>
                <h1 className={css.title_spot}>SPOT PUBLICITAIRE <div className={css.line_title_art}></div></h1>
                
                <div className={css.content_spot_publicitaire}>
                    <Fade left>
                        <div className={css.image_explication}>
                            <Image
                                src= '/images/spot.jpg'
                                alt="Image graphique"
                                width={480}
                                height={350}
                            /> 
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={css.content_first_section_explication}>
                        
                            <ul>
                                <li> Étude de votre projet </li>
                                <li>Rédaction du Cahier des Charges</li>
                                <li> Création d'un spot sur-mesure </li>
                                <li> Intégration des ameliorations </li>
                                <li> Livraison du produit </li>
                            </ul>
                        </div>
                    </Fade>

                </div>
                <div className={css.description_service}>
                    <h3>DESCRIPTION DU SERVICE <div className={css.line_title_art}></div></h3>
                    <p>
                        Un spot publicitaire ou spot de publicité ou film publicitaire est une annonce publicitaire dépassant rarement 30 secondes. Cette courte production sonore ou vidéo contenant un message publicitaire est destinée à être diffusée, soit à la radio, soit à la télévision, au cinéma ou encore sur Internet.
                    </p>

                </div>
                <div className={css.realisation_graphique}>
                    <h2>REALISATIONS <div className={css.line_title_art}></div> </h2>
                    <div className={css.content_emission}>
                            {
                                items.map((
                                    {
                                        id,
                                        snippet: {
                                            title,
                                            resourceId: {
                                                videoId
                                            }
                                        }
                                    }
                                ) =>{
                                    return(
                                        <CardYoutube
                                            key = {id}
                                            source = {`https://www.youtube.com/embed/${videoId}`}
                                            description = {`${title}`}
                                        />
                                )
                            })}
                    </div>
                    <Link href='https://www.youtube.com/playlist?list=PL-LxX6x2SWXuoMpjpewUJ5UUaGeWCORnI'>
                        <a>Plus des vidéos ici</a>
                    </Link>
                </div>

            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {

    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URI_YOUTUBE}?part=snippet&playlistId=PL-LxX6x2SWXuoMpjpewUJ5UUaGeWCORnI&maxResults=9&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)

    const pub = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/publicites`)
    const pubData = await pub.data.data

    const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles`)
    const breakingData = await result.data.data

    return{
        props: {
            spotPublicitaire: data,
            pubBaniere: pubData,
            breakingData: breakingData
        }
    }
}

export default SpotPublicitaire