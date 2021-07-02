import  { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import Link from 'next/link'

import css from './motion_design.styled.scss'
import Layout from '../../components/layout'
import CardYoutube from '../../components/card-youtube/card_youtube'

import IBaniere from '../../entities/baniere'
import IBreaking from '../../entities/article'

interface IMotion{
    motionDesign?: {
        items?: []
    },
    pubBaniere: IBaniere[];
    breakingData: IBreaking[]
}

const MotionDesign: NextPage<IMotion> = ({ 
    motionDesign : { 
        items 
    } ,
    pubBaniere,
    breakingData

}) => {
    
    return(
        <Layout
            title = 'Environews RDC | Motion design'
            title_meta = 'Environews RDC | Motion design'
            description = 'Environews RDC vous réalise du très bon motion design a un prix qui défis toute concurrence. Contactez nous pour discuter de votre projet.'
            baniere={pubBaniere}
            articles={breakingData}
        >
            <div className={css.container_graphique}>
                <h1 className={css.title_graphique}>MOTION DESIGN <div className={css.line_title_art}></div></h1>
                
                <div className={css.container_explication}>
                    <Fade left>
                        <div className={css.image_explication}>
                            <Image
                                src= '/images/motion.png'
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
                                <li>Brief & Scénario</li>
                                <li> Storyboard</li>
                                <li> Maquettage </li>
                                <li> Animation </li>
                                <li> Sound Design </li>
                                <li> Livraison du produit </li>
                            </ul>
                        </div>
                    </Fade>

                </div>
                <div className={css.description_service}>
                    <h3>DESCRIPTION DU SERVICE <div className={css.line_title_art}></div></h3>
                    <p>
                        Le motion design, aussi appelé animation graphique, graphisme animé, conception du mouvement ou conception graphique animée est une forme d'art visuel consistant à créer des œuvres animées ; il implique d'utiliser le mouvement comme principal outil graphique et artistique.
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
                    <Link href='https://www.youtube.com/playlist?list=PL-LxX6x2SWXuh_qOnIwurWyXqCNy2P8HP'>
                        <a>Plus des vidéos ici</a>
                    </Link>
                </div>

            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {

    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URI_YOUTUBE}?part=snippet&playlistId=PL-LxX6x2SWXuh_qOnIwurWyXqCNy2P8HP&maxResults=9&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)

    const pub = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/publicites`)
    const pubData = await pub.data.data

    const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles`)
    const breakingData = await result.data.data

    return{
        props: {
            motionDesign: data,
            pubBaniere: pubData,
            breakingData: breakingData
        }
    }
}

export default MotionDesign