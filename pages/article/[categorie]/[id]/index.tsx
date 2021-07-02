import { GetServerSideProps, NextPage } from 'next'
import Image from 'next/image'
import Fade from 'react-reveal/Fade'
import DOMPurify from 'isomorphic-dompurify';
import Link from 'next/link'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { AiFillHome } from 'react-icons/ai'
import { BsEyeFill } from 'react-icons/bs'

import Layout from '../../../../components/layout'
import Input from '../../../../components/input/input'
import Textarea from '../../../../components/textarea/textarea'
import css from './id.styled.scss'
import CardCategorie from '../../../../components/card-categories/card_categories'
import ButtonShare from '../../../../components/buton_share/buton_share'
import CardArticle from '../../../../components/card-articles/card_articles'
import Comment from '../../../../components/comment'
import { useState } from 'react';

import IBaniere from '../../../../entities/baniere'
import IArtice from '../../../../entities/article'
import { useRouter } from 'next/router';

interface Article{
    article: {
        titre: string;
        createdAt: Date;
        contenu: string;
        auteur: string;
        categorie: string;
        file: string;
        attaque: string;
        _id: string;
        comments: [];
        views: number;
        legende: string
    }
    children: React.ReactNode,
    similar: [],
    pubBaniere: IBaniere[];
    breakingData: IArtice[]
}

const DetailsArticle: NextPage<Article> = ({ 
    article: {
        titre,
        createdAt,
        contenu,
        auteur,
        categorie,
        file,
        attaque,
        _id,
        comments,
        views,
        legende
    } ,
    similar,
    pubBaniere,
    breakingData
    
}) => {

    const { register, handleSubmit, errors } = useForm();
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const createMarkup = () => { 
        return {
            __html: DOMPurify.sanitize(contenu)
        }; 
    };

    const onSubmit = async (data) => {
        //console.log("data",data)
        try {
            setLoading(true)
            const json = JSON.stringify(data)
            await axios.patch(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/comments/${_id}/create`, json, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                setLoading(false)
                router.reload()
            })
            .catch(err => {
                setLoading(false)
                console.log('error in request', err);
            });
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    
    return(
        <Layout
            title = {`Environews RDC | ${titre}`}
            description = {titre + attaque}
            og_title = {titre}
            og_description = {attaque}
            image_article= "https://res.cloudinary.com/claudemotoba/image/upload/v1621969415/mystore/favicon.png_flfk9h.jpg"
            og_url = {`https://environews-rdc.org/article/${categorie}/${_id}`}
            baniere={pubBaniere}
            articles={breakingData}
        >
            <div className={css.container_details_article}>
                <div className={css.header_details_article}>
                    <div>
                        <Link href="/">
                            <a><AiFillHome/></a>
                        </Link> 
                    </div> / <CardCategorie idCategorie={css.categorie_details} categories={categorie.toUpperCase()} />
                </div>
                <Fade bottom>
                    <h1 className={css.title_detail}>
                        {titre}

                    </h1>
                </Fade>
                <div className={css.content_date_and_vue}>
                    <p className={css.auteur}>Par : {auteur}  {` `}</p>
                    <p className={css.date_pub1}>
                        le {new Date(createdAt).toLocaleDateString() + " à " + new Date(createdAt).toLocaleTimeString()}
                    </p>
                    <p className={css.view_number}>    
                        <span>Nombre de vue-s   <BsEyeFill/> : {views} fois </span>
                    </p>
                </div>
                <ButtonShare
                    shareUrl = {`https://environews-rdc.org/article/${categorie}/${_id}`}
                    title = {titre}
                    id_share = {css.id_share_detail}
                />
                <Fade bottom>
                    
                    <h3 className={css.attaque}> {attaque} </h3>
                    
                    <div className={css.image_details_article}>
                        <img
                            src= {file === undefined ? '/images/reportage.jpg' : file}
                            alt="Image details article"
                            //layout="fill"
                            // width={980}
                            // height={500}
                        />
                    </div>
                    <p className={css.legence_image}>{legende}</p>
                </Fade>
                <div className={css.container_section_text}>
                    <div className={css.contenu_details_articles}>
                        
                        
                        <div className={css.contenu_articles}>
                            <Fade bottom>
                                <div
                                    dangerouslySetInnerHTML = {createMarkup()}
                                >
                                </div>
                            
                            </Fade>
                            
                        </div>
                    </div>
                    <div className={css.publicite_details}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2 className={css.title_home_page}>LAISSEZ UN COMMENTAIRE<div className={css.line_title_art}></div></h2>
                            <Input 
                                type='text'
                                placeholder='Votre pseudo'
                                nameInput = 'commenterPseudo'
                                change = {register({
                                    required: 'Le pseudo ne peut pas être vide',
                                })}
                                errorValidation = {errors.pseudo && errors.pseudo.message}
                            />
                            <Textarea 
                                placeholder='Ecrivez votre message ici'
                                nameText = 'message'
                                change = {register({
                                    required: "Le contenu du message ne peut pas être vide",
                                })}
                                errorValidation = {errors.message && errors.message.message}
                            /> <br/>
                            {
                                loading === true ?
                                <input type="submit" value='Enregistrement...' className={css.btn_contact} disabled/>
                                :
                                <input type="submit" value='Envoyer' className={css.btn_contact}/>
                            }
                        </form>
                        <div className={css.list_comment}>
                            <ul>
                                {
                                    comments.slice(0,2).map(({ _id, message, commenterPseudo, valid })=>{
                                        if (valid === true) {
                                            return(
                                                <Comment
                                                    key={_id}
                                                    pseudo = {commenterPseudo}
                                                    message = {message}
                                                />
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.similar_article}>
                <h1 className={css.title_home_page}>LIRE AUSSI<div className={css.line_title_art}></div></h1>
                <div className={css.content_similar_article}>
                    {
                        similar.slice(0,6).map(({ 
                            titre, 
                            file, 
                            _id, 
                            categorie 
                        })=>{
                            return(
                                <CardArticle
                                    key={_id}
                                    titre = {titre}
                                    source = {file === undefined ? '/images/reportage.jpg' : file}
                                    url = {`/article/${categorie}/${_id}`}      
                                />
                            )
                        })
                    }
                </div>
                
            </div>

        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { query } = ctx;
    const { id, categorie } = query;
    
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/${id}`)
    const data = await res.data.data;

    const similar = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/category/${categorie}`)
    const similarData = await similar.data.data;

    const pub = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/publicites`)
    const pubData = await pub.data.data

    const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles`)
    const breakingData = await result.data.data
    
    return {
        props: {
            article: data,
            similar: similarData,
            pubBaniere: pubData,
            breakingData: breakingData
        }, 
    }
}

export default DetailsArticle;