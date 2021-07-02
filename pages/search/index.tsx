import React, { useState, useEffect } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import axios from 'axios'
import { useRouter } from 'next/router'

import Layout from '../../components/layout'
import CardArticle from '../../components/card-articles/card_articles'
import css from './search.styled.scss'

import IBaniere from '../../entities/baniere'
import IBreaking from '../../entities/article'

interface IArticle {
    article?: [];
    puBaniere: IBaniere[]
    breakingData: IBreaking[]
}

const Home: NextPage<IArticle> = ({ 
    article,
    puBaniere,
    breakingData
}) => {

    const router = useRouter()
    const { query: { q } } = router

    return(
        <Layout
            title = "Environews RDC | Recherche d'article"
            title_meta = "Environews RDC | Trouver n'importe quel article grace a la recherche"
            description = "Environews est une entreprise spécialisé dans la communication environnementale en République démocratique du Congo. Producteur des films institutionnels, documentaires, spot publicitaire, reportages..."
            baniere={puBaniere}
            articles={breakingData}
        >
            <div className={css.container_search}>
                {
                    article.length === 0 ?
                    <h1>PAS D'ARTICLE DISPONIBLE POUR {`« ${q} »`} <div className={css.line_title_art}></div></h1> :
                    <>
                    <h1>RESULTATS POUR : {`« ${q} »`} <div className={css.line_title_art}></div></h1>
                    <div className={css.three_card}>

                            {article.slice(0, 15).map(({
                                _id,
                                titre,
                                file,
                                categorie
                            })=>{
                                return(
                                    <CardArticle
                                        key = {_id}
                                        titre = {titre}
                                        url = {`/article/${categorie}/${_id}`}
                                        source = {file === undefined ? '/images/reportage.jpg' : file}
                                    />
                                )
                            })}
                    </div>
                    </>
                }
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    
    const { query : { q } } = ctx
    const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/search/${q}`)

    const pub = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/publicites`)
    const pubData = await pub.data.data

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles`)
    const breakingData = await res.data.data

    return{
        props: {
            article: result.data.data,
            puBaniere: pubData,
            breakingData: breakingData
        }
    }
}

export default Home