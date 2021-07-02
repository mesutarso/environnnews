import { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import Fade from 'react-reveal/Fade'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from 'next/router'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

import Layout from '../../components/layout'
import Input from '../../components/input/input'
import Textarea from '../../components/textarea/textarea'
import Loader from '../../components/loader/loader'
import css from './contact.style.scss'
import Lottie from '../../components/lottie/lottie'
import Adress from '../../public/images/lottie/35178-call-button.json'

import IBreaking from '../../entities/article'

interface Props{
    children?: React.ReactNode;
    breakingData: IBreaking[]
}

const Contact: NextPage<Props> = ({ breakingData }) => {

    const [isSubmitting, setisSumbitting] = useState(false);
    const router = useRouter();

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async (data) => {
        try {

            const json = JSON.stringify(data)
            await axios.post(`${process.env.NEXT_PUBLIC_BASE_URI}/messages`, json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log('res', res.data);
            })
            .catch(err => {
                console.log('error in request', err);
            });

            setisSumbitting(true)

        } catch (error) {
            console.log(error)
        }
    };

    return(
        <Layout
            title = 'Environews RDC | Contactez nous'
            title_meta = 'Environews RDC | Contactez nous'
            description = 'Voulez vous nous contacter? Quel a été votre experience sur notre site web? Aimez vous ce que nous faisons? Ecrivez sur n’importe quel sujet. Environews RDC met a votre disposition plusieurs canaux que vous pouviez utiliser pour leurs contacter.'
            image_article='/images/favicon.png'
            baniere={[]}
            articles={breakingData}
        >
            <div className={css.container_contact}>
               
                <h1 className={css.title_contact}>CONTACTEZ NOUS <div className={css.line_title_art}></div></h1>

                <div className={css.content_contact}>
                    
                    <Fade left>
                        <div className={css.content_first_section_redaction}>

                            <h3>ADRESSE PHYSIQUE <div className={css.line_title_art}></div></h3>
                        
                            <address>
                                N°265 Avenue du marché 
                                C/Gombre - Kinshasa 
                                Réferences: croisement des
                                avenues kasai et du marché,
                                non loin de l'université 
                                William Booth
                            </address>

                            <h3>EMAIL & TEL <div className={css.line_title_art}></div></h3>

                            <address>
                                Mail : <a href="mailto:infos@environews-rdc.org">infos@environews-rdc.org</a> <br/>
                                Tél : <a href="tel:+243818148485">+243 81 814 84 85</a> 
                            </address>

                            {/* <h3>RESEAUX SOCIAUX <div className={css.line_title_art}></div></h3> */}

                            <Link href="https://web.facebook.com/EnvironewsRDC">
                                <a target='blank'><FaFacebookF/></a>
                            </Link> 
                            <Link href="https://twitter.com/environews_rdc">
                                <a target='blank'><FaTwitter/></a>
                            </Link> 
                            <Link href="#">
                                <a target='blank'><FaLinkedinIn/></a>
                            </Link> 
                            <Link href="https://www.instagram.com/environewsrdc1/">
                                <a target='blank'><AiFillInstagram/></a>
                            </Link> 
                            <Link href="https://www.youtube.com/c/environnementrdc/featured">
                                <a target='blank'><FaYoutube/></a>
                            </Link>
                           
                        </div>
                    </Fade>
                    <Fade right>
                        <div className={css.image_redaction}>
                            <Lottie
                                animationData = {Adress}
                            />
                        </div>
                    </Fade>

                </div>
                
                <h1 className={css.title_contact}>ECRIVEZ NOUS <div className={css.line_title_art}></div></h1>
                <div className={css.form}>
                    <div className={css.content_form}>
                        <p>
                            Voulez vous nous contacter ?  <br/>
                            Quel a été votre experience sur notre site web ? <br/>
                            Aimez vous ce que nous faisons ? <br/>
                            Ecrivez sur n’importe quel sujet
                        </p>
                        <Fade bottom>
                            {
                                isSubmitting
                                ? <Loader/>
                                :                            
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Input 
                                        type='text'
                                        placeholder='Votre nom'
                                        nameInput = 'nom'
                                        change = {register({
                                            required: 'Le nom ne peut pas être vide',
                                        })}
                                        errorValidation = {errors.nom && errors.nom.message}
                                    /> 
                                    <Input 
                                        type='email'
                                        placeholder='Votre adresse mail'
                                        nameInput ='email'
                                        change = {register({
                                            required: "L'adresse mail ne peut pas être vide",
                                        })}
                                        errorValidation = {errors.email && errors.email.message}
                                    /> 
                                    <Textarea 
                                        placeholder='Ecrivez votre message ici'
                                        nameText = 'contenu'
                                        change = {register({
                                            required: "Le contenu du message ne peut pas être vide",
                                        })}
                                        errorValidation = {errors.contenu && errors.contenu.message}
                                    /> <br/>
                                    <input type="submit" value='Envoyer' className={css.btn_contact}/>
                                </form>
                            }
                        </Fade>
                    </div>
                        
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

export default Contact