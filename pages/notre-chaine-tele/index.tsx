import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

import Layout from '../../components/layout'
import css from './notre_chaine_tele.scss'
import Lottie from '../../components/lottie/lottie'
import TV from '../../public/images/lottie/16714-graphs-in-tv.json'
import TV_two from '../../public/images/lottie/14429-tv.json'
import CardYoutube from '../../components/card-youtube/card_youtube'

import Lundi from '../../components/data/lundi/lundi'
import Mardi from '../../components/data/mardi/mardi'
import Mercredi from '../../components/data/mercredi/mercredi'
import Jeudi from '../../components/data/jeudi/jeudi'
import Vendredi from '../../components/data/vendredi/vendredi'
import Dimanche from '../../components/data/dimanche/dimanche'
import Samedi from '../../components/data/samedi/samedi'

import IBaniere from '../../entities/baniere'
import IBreaking from '../../entities/article'

interface Props{
    children?: React.ReactNode,
    data?: {
        items: []
    };
    pubBaniere: IBaniere[],
    breakingData: IBreaking[]
}

const NotreChaineTele: NextPage<Props> = ({ data: { items }, pubBaniere, breakingData }) => {

    const [lundi, setLundi] = useState()
    const [click, setClick] = useState('Lundi')
    const fetchLundi = (e) => {
        
    }

    return(
        <Layout
            title = 'Environews RDC | Environews TV votre chaine thématique'
            title_meta = 'Environews RDC | Environews TV votre chaine thématique'
            description = 'Environews TV est une chaine de télévision thématique axée sur l’ENVIRONNEMENT et la Santé. Elle a été créée en Mars 2019. La seule en RDC'
            image_article='/images/favicon.png'
            baniere={pubBaniere}
            articles={breakingData}
        >
            
            <div className={css.container_notre_chaine_tele}>
                
                <h1 className={css.title_chaine}>ENVIRONEWS TV <div className={css.line_title_art}></div></h1>

                <div className={css.content_chaine_tele}>
                    
                    <Fade left>
                        <div className={css.content_first_section_redaction}>

                            <h3>DECOUVREZ L'ECOSYSTEME <div className={css.line_title_art}></div></h3>
                        
                            <p>

                                Environews TV est une chaine de télévision thématique axée sur l'environnement et la Santé. Elle a été créée en Mars 2019.
                            </p>
                            <p>
                                Environews TV émet à partir de Kinshasa en télévision numérique terrestre (TNT) et accessible dans le bouquet Blue SAT Canal 33 Média SAT Canal 77.
                            </p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={css.image_redaction}>
                            <Lottie
                                animationData = {TV_two}
                            />
                        </div>
                    </Fade>

                </div>

                <div className={css.content_chaine_tele}>
                    <Fade left>
                        <div className={css.image_redaction}>
                            <Lottie
                                animationData = {TV}
                            />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={css.content_first_section_redaction}>

                            <h3>UNE CHAINE THEMATIQUE AU COEUR DE L'ENVIRONNEMENT <div className={css.line_title_art}></div></h3>
                        
                            <p>
                                Environews TV se présente comme un canal par excellence qui met en lumière les forêts congolaises, éduque les populations et les informe sur le potentiel écologique du pays.
                            </p>
                            <p>
                                Elle est l’unique en RDC et en Afrique francophone qui accorde plus de 90% de ses programmes à l’environnement. Elle aborde les différentes thématiques notamment le changement climatique, l’aménagement du territoire, l’eau, l’énergie, les forêts, etc.
                            </p>
                        </div>
                    </Fade>
                   

                </div>

                <div className={css.content_chaine_tele}>
                    
                    <Fade right>
                        <div className={css.content_first_section_redaction}>

                            <h3>QUELQUES EMISSIONS <div className={css.line_title_art}></div></h3>
                        
                            <p>
                                Nous disponsons d'une equipe competante passionné par l'environnement.
                                Disposant d’une expertise avérée dans la conception et implémentation des campagnes médiatiques.
                            </p>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className={css.image_redaction}>
                            {/* <Lottie
                                //animationData = {TV}
                            /> */}
                        </div>
                    </Fade>

                </div>
                <div className={css.conainer_list_emission}>
                    <h2>LISTE DES EMMISIONS <div className={css.line_title_art}></div></h2>
                    
                    <div className={css.container_explication}>
                        <Fade left>
                            <div className={css.image_explication}>
                                <Image
                                    src= '/images/graphique-design.jpg'
                                    alt="Image graphique"
                                    width={480}
                                    height={350}
                                /> 
                            </div>
                        </Fade>
                        <Fade right>
                            <div className={css.content_first_section_explication}>
                            
                                <ul>
                                    <li> Invité du weekend </li>
                                    <li> Métiers Verts </li>
                                    <li> Kinshasa Yang'oyo</li>
                                    <li> ISO Autochtone </li>
                                    <li> Parlons Santé</li>
                                    <li> L'homme et la nature </li>
                                </ul>
                                <Link href='/emissions'>
                                    <a>Voir toutes les émissions</a>
                                </Link>
                            </div>
                        </Fade>

                    </div>
                    
                </div>
                <div className={css.container_annonces}>
                    <h2>LES ANNONCES <div className={css.line_title_art}></div></h2>
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
                </div>

                <div className={css.emission}>
                    
                    <h2>PROGRAMME DE DIFFUSION <div className={css.line_title_art}></div></h2>

                    <div className={css.programme_de_diffusion}>
                        
                        <div className={css.jour_de_diffusion}>
                            <div 
                                className={css.card_jour} 
                                id={click === 'Lundi' ? css.click : ''} 
                                onClick={()=>setClick('Lundi')}
                            >
                                Lundi
                            </div>
                            <div 
                                className={css.card_jour} 
                                id={click === 'Mardi' ? css.click : ''} 
                                onClick={()=>setClick('Mardi')}
                            >Mardi</div>
                            <div 
                                className={css.card_jour} 
                                id={click === 'Mercredi' ? css.click : ''} 
                                onClick={()=>setClick('Mercredi')}
                            >
                                Mercredi
                            </div>
                            <div 
                                className={css.card_jour} 
                                id={click === 'Jeudi' ? css.click : ''} 
                                onClick={()=>setClick('Jeudi')}
                            >
                                Jeudi
                            </div>
                            <div 
                                className={css.card_jour} 
                                id={click === 'Vendredi' ? css.click : ''} 
                                onClick={()=>setClick('Vendredi')}
                            >
                                Vendredi
                            </div>
                            <div 
                                className={css.card_jour} 
                                id={click === 'Samedi' ? css.click : ''} 
                                onClick={()=>setClick('Samedi')}
                            >
                                Samedi
                            </div>
                            <div 
                                className={css.card_jour} 
                                id={click === 'Dimanche' ? css.click : ''} 
                                onClick={()=>setClick('Dimanche')}
                            >
                                Dimanche
                            </div>
                        </div>
                       
                        <div className={css.contenu_de_diffusion}>
                            {click === 'Lundi' ?  <Lundi/> : ''}
                            {click === 'Mardi' ?  <Mardi/> : ''}
                            {click === 'Mercredi' ?  <Mercredi/> : ''}
                            {click === 'Jeudi' ?  <Jeudi/> : ''}
                            {click === 'Vendredi' ?  <Vendredi/> : ''}
                            {click === 'Samedi' ?  <Samedi/> : ''}
                            {click === 'Dimanche' ?  <Dimanche/> : ''}
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_URI_YOUTUBE}?part=snippet&playlistId=PL-LxX6x2SWXvaSk94Fj9xCQ4-IrT_ojkm&maxResults=6&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
    const data = await res.data;

    const pub = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/publicites`)
    const pubData = await pub.data.data

    const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles`)
    const breaking = await result.data.data

    return{
        props: {
            data: data,
            pubBaniere: pubData,
            breakingData: breaking
        }
    }
}

export default NotreChaineTele