import Link from 'next/link'
import Fade from 'react-reveal/Fade'

import css from './redaction.styled.scss'
import Layout from '../../components/layout'
import Lottie from '../../components/lottie/lottie'

import Team from '../../public/images/lottie/lf20_spvnlrri.json'
import Price from '../../public/images/lottie/49110-price-tag-icon.json'
import Read from '../../public/images/lottie/5942-document-loader.json'
import Partainers from '../../components/partainers/partainers'

import IBreaking from '../../entities/article'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'

interface Props{
    breakingData: IBreaking[];
}

const Redaction: NextPage<Props> = ({ breakingData }) => {
    return(
        <Layout
            title = 'Environews RDC | Rédaction des articles environnementals'
            title_meta = 'Environews RDC | Rédaction des articles environnementals'
            description = 'Outre la production et la diffusion des programmes liés à l’environnement et la santé, Environews RDC travaille aussi sur la rédaction des articles de presse.'
            baniere={[]}
            articles={breakingData}
        >
            <div className={css.container_redaction}>
                <h1 className={css.title_redaction}>REDACTION <div className={css.line_title_art}></div></h1>
                
                <div className={css.content_redaction}>
                    
                    <Fade left>
                        <div className={css.content_first_section_redaction}>

                            <h3>UNE EQUIPE COMPETANTE <div className={css.line_title_art}></div></h3>
                        
                            <p>
                                Nous disponsons d'une equipe competante passionné par l'environnement.
                                Disposant d’une expertise avérée dans la conception et implémentation des campagnes médiatiques.
                            </p>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={css.image_redaction}>
                            <Lottie
                                animationData = {Team}
                            />
                        </div>
                    </Fade>

                </div>
                <div className={css.content_redaction}>
                    
                    <Fade left>
                        <div className={css.image_redaction}>
                            <Lottie
                                animationData = {Price}
                            />
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={css.content_first_section_redaction}>

                            <h3>LA REDACTION DES VOS ARTICLES A UN PRIX COMPETITIF <div className={css.line_title_art}></div></h3>
                        
                            <p>
                                Nous disponsons d'une equipe competante passionné par l'environnement.
                                Disposant d’une expertise avérée dans la conception et implémentation des campagnes médiatiques.
                            </p>
                        </div>
                    </Fade>

                </div>
                <div className={css.content_redaction}>
                    
                    
                    <Fade left>
                        <div className={css.content_first_section_redaction}>

                            <h3>LIRE ET FAIRE LIRE NOS ARTICLES <div className={css.line_title_art}></div></h3>
                        
                            <p>
                                Nous avons la plus grande bibliotheque environnementale en République Démocratique du Congo. Avec plus de 1700 articles a notre actif, vous trouverez sur notre site web toutes les informations que vous recherchiez.
                            </p>
                            <Link href='/'>
                                <a>Voir les articles</a>
                            </Link>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={css.image_redaction}>
                            <Lottie
                                animationData = {Read}
                            />
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

export default Redaction