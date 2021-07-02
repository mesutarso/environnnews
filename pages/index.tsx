import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import Layout from '../components/layout'
import css from './home.styled.scss'
import Head from 'next/head'

import Actualite from '../components/actualite/actualite'
import ContainerThreedCard from '../components/container-threed-card/container_threed_card'
import CardYoutube from '../components/card-youtube/card_youtube'

import IBaniere from '../entities/baniere'
import IBreaking from '../entities/breaking'

interface IArticle {
    actualites?: [];
    climats?: [];
    forets?: [];
    biodiversites?: [];
    santes?: [];
    autres?: [];
    conservations?: [];
    environnement?: [];
    lesaviezvous?: [];
    opportinute?: []
    _id?: string,
    pubYoutube?: [];
    pubBaniere: IBaniere[];
}

const Home: NextPage<IArticle> = ({ 
    actualites, 
    climats, 
    forets, 
    biodiversites,
    santes,
    autres,
    conservations, 
    lesaviezvous,
    opportinute,
    environnement,
    pubYoutube,
    pubBaniere,
}) => {
    const tab = [conservations, santes, forets, environnement, biodiversites, climats, autres]

    return(
        <Layout
            title = "Environews RDC | Premier site d'information Environementale en RDC"
            title_meta = "Environews RDC | Premier site d'information Environementale en RDC"
            description = "Environews RDC est une entreprise spécialisé dans la communication environnementale en RDC. Producteur des films institutionnels, documentaires, spot publicitaire, reportages..."
            image_article='/images/favicon.png'
            baniere= {pubBaniere}
            articles={actualites}
        >
            <Head>
                <meta name="google-site-verification" content="5ypluWmc2aL9VccStcyi1aMsfHFIyP16MK7IjC7w9gg" />
            </Head>
            
            <Actualite 
                items = {pubYoutube}
                actualites = {actualites}
                data = {actualites}
                leSaviezVous = {lesaviezvous}
                opportinute = {opportinute}
            />
            <div className={css.container_home}>
                {tab.map((item, index)=>{
                    
                    return(
                        <ContainerThreedCard
                            key = {index}
                            conservations = {item}
                        />
                    )
                })}            
            </div>
            <div className={css.container_pub_mobile}>
                {pubYoutube.map(({
                        id,
                        snippet : {
                            title,
                            resourceId: {
                                videoId
                            }
                        }
                    })=>{
                        return(
                            <CardYoutube
                                key = {id}
                                source = {`https://www.youtube.com/embed/${videoId}`}
                                description = {title} 
                            />
                        )
                })}
            </div>
            
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps<IArticle> = async (ctx) => {
    // ..
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles`)
    const articleData = await res.data.data;

    const climat = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/category/climat`)
    const climatData = await climat.data.data;

    const foret = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/category/foret`)
    const foretData = await foret.data.data;
        
    const biodiversite = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/category/biodiversite`)
    const biodiversiteData = await biodiversite.data.data;

    const sante = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/category/sante`)
    const santeData = await sante.data.data;

    const autres = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/category/autres`)
    const autresData = await autres.data.data;

    const conservation = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/category/conservation`)
    const conservationData = await conservation.data.data;

    const opportinute = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/category/opportinute`)
    const opportinuteData = await opportinute.data.data;

    const environnement = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/category/environnement`)
    const environnementData = await environnement.data.data;

    const leSaviezVous = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/conseils`)
    const lesaviezvousData = await leSaviezVous.data.data;

    const pub = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/publicites`)
    const pubData = await pub.data.data

    const { data: { items } } = await axios.get(`${process.env.NEXT_PUBLIC_URI_YOUTUBE}?part=snippet&playlistId=PL-LxX6x2SWXuEh95zThXODEH54t9dXr8j&maxResults=4&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)

    // const dispatch = useDispatch()
    // dispatch(get('article'))

    // const list = useSelector(state => state.listArticle)
    // console.log('list ',list);
    
    return {
        props: {
            actualites: articleData,
            climats: climatData,
            forets: foretData,
            biodiversites: biodiversiteData,
            santes: santeData,
            autres: autresData,
            conservations: conservationData,
            lesaviezvous: lesaviezvousData,
            opportinute: opportinuteData,
            environnement: environnementData,
            pubYoutube: items,
            pubBaniere: pubData,
        }, 
    }
}

export default Home