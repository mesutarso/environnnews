import Fade from 'react-reveal/Fade';
import { GetServerSideProps, NextPage } from 'next';
import Slider from 'react-slick'
import axios from 'axios'

import css from './apropos.style.scss'
import Layout from '../../components/layout'
import CardEquipe from '../../components/card-equipe/card_equipe'
import Lottie from '../../components/lottie/lottie'
import listEquipe from '../../components/data-equipe/data'

import Create from '../../public/images/lottie/48428-working.json'
import Mission from '../../public/images/lottie/40334-work.json'
import Call from '../../public/images/lottie/35178-call-button.json'
import Work from '../../public/images/lottie/48055-working-online.json'

import IBreaking from '../../entities/article'

interface Props{
    children?: Element[];
    breakingData: IBreaking[]
}

const AboutUs: NextPage<Props> = ({
    children,
    breakingData
}) => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    };

    return(
        <Layout
            title = 'Environews RDC | A propos de nous'
            title_meta = 'Environews RDC | A propos de nous'
            description = 'Créée en 2013, ENVIRONEWS RDC est avant tout un organe de presse thématique environnemental. Disposant d’une expertise avérée dans la conception et implémentation des campagnes médiatiques. Elle dispose en son sein d’une unité spécialisée dans la conception, création, et production des supports spécialisés, innovants et efficaces de communication d’une manière générale.'
            image_article='/images/favicon.png'
            baniere= {[]}
            articles={breakingData}
        >
            
            <div className={css.container_apropos}>
                
                    <h1>QUI SOMMES NOUS ? <div className={css.line_title_art}></div></h1>
                    <div className={css.content_section_apropos}>
                        <Fade left>
                            <div className={css.description_apropos}>
                                <h3>CREATION<div className={css.line_title_art}></div></h3>
                                <p>
                                    Créée en 2013, ENVIRONEWS RDC est avant tout un organe de presse thématique. Disposant d’une expertise avérée dans la conception et implémentation des campagnes médiatiques.  
                                </p>
                                <p>
                                    Elle dispose en son sein d’une unité spécialisée dans la conception, création, et production des supports spécialisés, innovants et efficaces de communication d’une manière générale.
                                </p>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className={css.json_apropos}>
                                <Lottie 
                                    animationData = {Create}
                                />
                            </div>
                        </Fade>
                    </div>
                    <div className={css.content_section_apropos}>
                        <Fade left>
                            <div className={css.json_apropos}>
                                <Lottie 
                                    animationData = {Mission}
                                />
                            </div>
                        </Fade>
                        <Fade right>
                            <div className={css.description_apropos}>
                                <h3>NOTRE MISSION<div className={css.line_title_art}></div></h3>
                                <p>
                                    ENVIRONEWS RDC a pour missions entre autres, la sensibilisation des masses (la population congolaise) à la prise de conscience sur les questions environnementales.  
                                </p>
                                <p>
                                    Communiquer pour le changement de comportement vis-à-vis de l’environnement, Informer sur les thématiques variées et complexes liées à l’Environnement avec en toile de fond la préservation de l’environnement.
                                </p>
                                <p>
                                    Accompagner les décideurs dans la mise en place des politiques environnementales et l’implémentation des campagnes de sensibilisation axées sur le changement de paradigme et de comportement etc.
                                </p>
                            </div>
                        </Fade>
                        
                    </div>
                    <div className={css.content_section_apropos}>
                    
                        <Fade left>
                            <div className={css.description_apropos}>
                                <h3>L'EQUIPE ENVIRONEWS<div className={css.line_title_art}></div></h3>
                                <p>
                                    Notre entreprise dispose d'une équipe des jeunes compétant prêt à vous produire un travail de qualité.
                                </p>
                                <p>
                                Journaliste, monteur, infographe, cameraman sont les differents profils que nous avons.
                                </p>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className={css.json_apropos}>
                                <Lottie 
                                    animationData = {Work}
                                />
                            </div>
                        </Fade>
                    </div>
               
                <Slider  {...settings} className={css.content_team}>
                    {listEquipe.map(({ source, nom, petite_description, mindset_equipe })=>{
                        return(
                            <div key={nom} className={css.first_div}> 
                                <CardEquipe
                                    source = {source}
                                    nom_equipe = {nom}
                                    petite_description = {petite_description}
                                    mindset_equipe = {mindset_equipe}
                                    url_facebook = '#'
                                    url_gmail = '#'
                                    url_instagram = '#'
                                />
                            </div>
                        )
                    })}
                    
                </Slider>
                <div className={css.content_section_apropos}>
                        <Fade left>
                            <div className={css.json_apropos}>
                                <Lottie 
                                    animationData = {Call}
                                />
                            </div>
                        </Fade>
                        <Fade right>
                            <div className={css.description_apropos}>
                                <h3>CONTACTEZ NOUS<div className={css.line_title_art}></div></h3>
                                <p>
                                    Voulez vous nous contacter ?  <br/>
                                    Quel a été votre experience sur notre site web ? <br/>
                                    Aimez vous ce que nous faisons ? <br/>
                                    Ecrivez sur n’importe quel sujet
                                </p>
                                <p>
                                    Tél : +243 81 814 84 85
                                </p>
                                <p>
                                    Mail : infos@environews-rdc.org
                                </p>
                                <p>
                                    Facebook : Environews RDC
                                </p>
                            </div>
                        </Fade>
                        
                </div>
                
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles`)
    const breakingData = await result.data.data

    return {
        props: {
            breakingData: breakingData
        }
    }
}

export default AboutUs