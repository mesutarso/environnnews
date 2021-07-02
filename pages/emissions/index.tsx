import Link from 'next/link'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import Fade from 'react-reveal/Fade'
import Image from 'next/image'

import css from './emissions.styled.scss'
import Layout from '../../components/layout'
import Lottie from '../../components/lottie/lottie'

import Team from '../../public/images/lottie/lf20_spvnlrri.json'
import Price from '../../public/images/lottie/49110-price-tag-icon.json'
import Read from '../../public/images/lottie/5942-document-loader.json'
import CardYoutube from '../../components/card-youtube/card_youtube'

import IBaniere from '../../entities/baniere'
import IBreaking from '../../entities/article'

interface Props{
    children?: React.ReactNode,
    inviteDuWeekend?: {
        items: []
    };
    metiersVerts?: any;
    isAutochtone?: any;
    hommeNature?: any;
    pubBaniere: IBaniere[]
    breakingData: IBreaking[]
    
}

const Emissions: NextPage<Props> = ({ 
    inviteDuWeekend: { items } ,
    metiersVerts,
    isAutochtone,
    hommeNature,
    pubBaniere,
    breakingData
}) => {
    return(
        <Layout
            title = 'Environews RDC | Emission environnementale sur Environews TV'
            title_meta = 'Environews RDC | Emission environnementale sur Environews TV'
            description = "Régardez les émissions environnementale sur Environews TV, votre chaine thématique favoris. Invité du weekend, Métiers verts, l'homme et la nature, Kinshasa yango'oyo..."
            image_article='/images/favicon.png'
            baniere={pubBaniere}
            articles={breakingData}
        >
            <div className={css.container_redaction}>
                <h1 className={css.title_redaction}>EMISSIONS <div className={css.line_title_art}></div></h1>
                
                <div>
                    <div className={css.content_redaction}>
                        
                        <Fade left>
                            <div className={css.content_first_section_redaction}>

                                <h3>INVITE DU WEEKEND <div className={css.line_title_art}></div></h3>
                            
                                <p>
                                    C’est un programme de 45 minutes qui décrypte l’actualité environnementale, et propose des solutions idoines. Diffusé chaque samedi et dimanche, le programme reçoit des experts, et hommes politiques évoluant dans le domaine de l’environnement.
                                </p>
                                <p>
                                    Tél : +243818148485
                                </p>
                                <Link href='https://www.youtube.com/playlist?list=PL-LxX6x2SWXsX_6Fm5ytDRsRa4GXpWkct'>
                                    <a target='blank'>Plus des vidéos ici</a>
                                </Link>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className={css.image_redaction}>
                                {/* <Image
                                    src= '/images/logo/IA 2.jpg'
                                    alt = "logo Iso Autochtone"
                                    width = {700}
                                    height = {500}
                                /> */}
                            </div>
                        </Fade>

                    </div>
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
                <div>
                    <div className={css.content_redaction}>
                        
                        <Fade left>
                            <div className={css.image_redaction}>
                                {/* <Image
                                    src= '/images/logo/IA 2.jpg'
                                    alt = "logo Iso Autochtone"
                                    width = {700}
                                    height = {500}
                                /> */}
                            </div>
                        </Fade>
                        <Fade right>
                            <div className={css.content_first_section_redaction}>

                                <h3>METIERS VERTS <div className={css.line_title_art}></div></h3>
                            
                                <p>
                                    Métiers verts est une émissions produit par Environews TV qui a pour objectif principal Assurer la promotion de l'entrepreunariat vert Congolais.
                                </p>
                                <p>
                                    Quelques métiers verts : Assainissement et traitement des dechets, production et distribution de l'énergie et de l'eau, Protection de la nature...
                                </p>
                                <p>
                                    Tél : +243818148485
                                </p>
                                <Link href='https://www.youtube.com/playlist?list=PL-LxX6x2SWXtnYx3UFNXto1yhJR5CkjSC'>
                                    <a target='blank'>Plus des vidéos ici</a>
                                </Link>
                            </div>
                        </Fade>

                    </div>
                    <div className={css.content_emission}>
                            {
                                metiersVerts.items.map((
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

                <div>
                    <div className={css.content_redaction}>
    
                        <Fade left>
                            <div className={css.content_first_section_redaction}>

                                <h3>ISO AUTOCHTONES <div className={css.line_title_art}></div></h3>
                            
                                <p>
                                    C’est un programme d’une heure, consacré à la promotion de la culture des peuples autochtones pygmées de la république démocratique du Congo. 

                                </p>
                                <p>
                                    Elvie Maliya, recoit les pygmées vivant à Kinshasa pour des entretiens ciblés, et réflexions sur le mode de vie de ce peuple longtemps marginalisé. 
                                </p>
                                <p>
                                    Tél : +243818148485
                                </p>
                                <Link href='/'>
                                    <a target='blank'>Plus des vidéos ici</a>
                                </Link>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className={css.image_redaction}>
                                <Image
                                    src= '/images/logo/IA 2.jpg'
                                    alt = "logo Iso Autochtone"
                                    width = {700}
                                    height = {500}
                                />
                            </div>
                        </Fade>

                    </div>
                    <div className={css.content_emission}>
                            {
                                isAutochtone.items.map((
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
                <div>
                    <div className={css.content_redaction}>
                        
                        <Fade left>
                            <div className={css.image_redaction}>
                                {/* <Image
                                    src= '/images/logo/IA 2.jpg'
                                    alt = "logo Iso Autochtone"
                                    width = {700}
                                    height = {500}
                                /> */}
                            </div>
                        </Fade>
                        <Fade right>
                            <div className={css.content_first_section_redaction}>

                                <h3>L'HOMME ET LA NATURE <div className={css.line_title_art}></div></h3>
                            
                                <p>
                                    L'homme et la nature est une émissions produit par Environews TV qui a pour objectif principal de sensibiliser l'etre humain sur la protection de la nature et a la lutte contre l'insalubrité.
                                </p>
                                <p>
                                    Tél : +243818148485
                                </p>
                                <Link href='/'>
                                    <a target='blank'>Plus des vidéos ici</a>
                                </Link>
                            </div>
                        </Fade>

                    </div>
                    <div className={css.content_emission}>
                            {
                                hommeNature.items.map((
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

            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {

    const res = await axios.get(`${process.env.NEXT_PUBLIC_URI_YOUTUBE}?part=snippet&order=date&playlistId=PL-LxX6x2SWXsX_6Fm5ytDRsRa4GXpWkct&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
    const inviteDuWeekend = await res.data;

    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_URI_YOUTUBE}?part=snippet&playlistId=PL-LxX6x2SWXtnYx3UFNXto1yhJR5CkjSC&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
    const metiersVerts = await data;

    const isAutochtone = await axios.get(`${process.env.NEXT_PUBLIC_URI_YOUTUBE}?part=snippet&playlistId=PL-LxX6x2SWXujkQMRpWq7cazEs2CKVwGn&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
    const isAutochtoneData = await isAutochtone.data;

    const hommeNature = await axios.get(`${process.env.NEXT_PUBLIC_URI_YOUTUBE}?part=snippet&playlistId=PL-LxX6x2SWXtONDBqffP7lts6lVnBYXV9&maxResults=3&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
    const hommeNatureData = await hommeNature.data;

    const pub = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/publicites`)
    const pubData = await pub.data.data

    const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles`)
    const breakingData = await result.data.data

    return{
        props: {
            inviteDuWeekend: inviteDuWeekend,
            metiersVerts: metiersVerts,
            isAutochtone: isAutochtoneData,
            hommeNature: hommeNatureData,
            pubBaniere: pubData,
            breakingData: breakingData
        }
    }
}

export default Emissions