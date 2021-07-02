import Image from 'next/image'
import Fade from 'react-reveal/Fade'

import css from './graphique_design.styled.scss'
import Layout from '../../components/layout'

import IBreaking from '../../entities/article'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'

interface Props{
    breakingData: IBreaking[]
}

const Infographie: NextPage<Props> = ({ breakingData }) => {
    
    return(
        <Layout
            title = 'Environews RDC | Création des Infographies'
            title_meta = 'Environews RDC | Création des Infographies'
            description = 'Environews RDC travaille sur la création de vos graphique. Vous avez un projet ? .Contactez nous pour en discuter.'
            baniere={[]}
            articles={breakingData}
        >
            <div className={css.container_graphique}>
                <h1 className={css.title_graphique}>INFOGRAPHIE <div className={css.line_title_art}></div></h1>
                
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
                                <li>Étude de votre projet </li>
                                <li>Rédaction du Cahier des Charges</li>
                                <li>Retouche Photo</li>
                                <li>Création de graphique sur-mesure </li>
                                <li>Intégration des ameliorations </li>
                                <li>Livraison du produit </li>
                            </ul>
                        </div>
                    </Fade>

                </div>
                <div className={css.description_service}>
                    <h3>DESCRIPTION DU SERVICE <div className={css.line_title_art}></div></h3>
                    <p>
                        L'infographie est le domaine de la création d'images numériques assistée par ordinateur. <br/> Cette activité est liée aux arts graphiques. 
                    </p>

                </div>
                <div className={css.realisation_graphique}>
                    <h2>REALISATIONS <div className={css.line_title_art}></div> </h2>
                    <Fade bottom>
                        <div className={css.realisation_infographie}>
                            <div>
                                <Image
                                    src= '/images/infographie/Cap_black.jpg'
                                    alt="Image graphique"
                                    width={300}
                                    height={320}
                                />
                            </div>
                            <div>
                                <Image
                                    src= '/images/infographie/Blank-tshirt.jpg'
                                    alt="Image graphique"
                                    width={300}
                                    height={320}
                                />
                            </div>
                            <div>
                                <Image
                                    src= '/images/infographie/Cap.jpg'
                                    alt="Image graphique"
                                    width={300}
                                    height={320}
                                />
                            </div>
                            
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div>
                            <div>
                                <Image
                                    src= '/images/infographie/Banderole-INPESS.jpg'
                                    alt="Image graphique"
                                    width = {985}
                                    height = {250}
                                />
                            </div>
                        </div>
                    </Fade>
                    <div className={css.realisation_infographie_two}>
                        <Fade left>
                            <div>
                                <Image
                                    src= '/images/infographie/Flyer_vert.jpg'
                                    alt="Image graphique"
                                    width={350}
                                    height={420}
                                />
                            </div>
                        </Fade>
                        <Fade right>
                            <div>
                                <Image
                                    src= '/images/infographie/Poster.jpg'
                                    alt="Image graphique"
                                    width={350}
                                    height={420}
                                />
                            </div>
                        </Fade>
                        
                    </div>
                    <Fade bottom>
                        <div className={css.realisation_three}>
                            <div>
                                <Image
                                    src= '/images/infographie/Banderole.jpg'
                                    alt="Image graphique"
                                    width = {985}
                                    height = {250}
                                />
                            </div>
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

export default Infographie