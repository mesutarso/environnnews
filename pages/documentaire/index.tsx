import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import Link from 'next/link'

import css from './documentaire.styled.scss'
import Layout from '../../components/layout'
import CardYoutube from '../../components/card-youtube/card_youtube'

import IBreaking from '../../entities/article'

interface IDocumentaire{
    documentaire?: {
        items?: []
    };
    breakingData: IBreaking[];
}

const Documentaire : NextPage<IDocumentaire> = ({ 
    
    documentaire : { 
        items 
    },
    breakingData

}) => {
    return(
        <Layout
            title = 'Environews RDC | Film documentaire sur Environews TV'
            title_meta = 'Environews RDC | Film documentaire sur Environews TV'
            description = 'Environews RDC réalise pour des documentaires a un prix compétitif. Régardez nos documentaire sur la chaine thématique Environews TV.'
            image_article='/images/favicon.png'
            baniere={[]}
            articles={breakingData}
        >
            <div className={css.container_graphique}>
                <h1 className={css.title_graphique}>FILM DOCUMENTAIRE <div className={css.line_title_art}></div></h1>
                
                <div className={css.container_explication}>
                    <Fade left>
                        <div className={css.image_explication}>
                            <Image
                                src= '/images/docu.jpg'
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
                                <li> Brief & Scénario</li>
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
                        « Film de caractère didactique ou informatif qui vise principalement à restituer les apparences de la réalité » 1, le documentaire — tel un document administratif — est présenté comme une preuve de l’existence d’un phénomène technique, sociétal (humain ou animal), ou historique, dont il veut établir une description minutieuse, voire en tenter l’explication.
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

    const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles`)
    const breakingData = await result.data.data

    return{
        props: {
            documentaire: data,
            breakingData: breakingData
        }
    }
}

export default Documentaire