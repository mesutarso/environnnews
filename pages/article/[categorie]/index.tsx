import { useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'

import Layout from '../../../components/layout'
import CardArticle from '../../../components/card-articles/card_articles'
import css from './categorie.styled.scss'
import CardFirstArticle from '../../../components/card-first-article/card_first_article'
import Pagination from '../../../components/pagination/pagination'
import { AiFillHome } from 'react-icons/ai'

import IBaniere from '../../../entities/baniere'
import IBreaking from '../../../entities/article'

interface IArticle{
    articles: IArticle[],
    _id?: string,
    file?: string,
    titre?: string,
    categorie?: string,
    children: React.ReactNode,
    pubBaniere: IBaniere[];
    breakingData: IBreaking[]
}

const Categorie: NextPage<IArticle> = ({
    articles, 
    pubBaniere,
    breakingData
}) => {

    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const { query } = router;
    const { categorie } = query

    let maj = categorie

    if (typeof maj === 'string') {
        maj = maj.toUpperCase();
    }
    

    return(
        <Layout
            title = {`Environews RDC | Article - ${categorie}`}
            description = "Environews RDC travaille principalement dans la rédaction d'articles ayant trait a l'environnement en RDC"
            title_meta = 'Environews RDC | Article Environnemental'
            baniere={pubBaniere}
            articles={breakingData}
        >
            <div className={css.container_biodiversite}>
                <div className={css.header_biodiversite}>
                    <Link href="/">
                        <a><AiFillHome/></a>
                    </Link> / {categorie}
                </div>
                <h1>{maj}<div className={css.line_title_art}></div></h1>
                <div>
                    {articles.slice(0,1).map(({
                        titre,
                        categorie,
                        file,
                        _id
                    }) => {
                        return(
                            <CardFirstArticle
                                key = {_id}
                                titre = {titre}
                                source = {file === undefined ? '/images/reportage.jpg' : file}
                            />
                        )
                    })}
                </div>
                <div className={css.three_card_actualite}>
                    {articles.slice(0,18).map(({
                        _id,
                        file,
                        titre,
                        categorie,
                    }) => {
                        return(
                            <CardArticle
                                key = {_id}
                                source = {file === undefined ? '/images/reportage.jpg' : file}
                                url = {`/article/${categorie}/${_id}`}
                                titre = {titre}
                            />
                        )
                    })}
                </div>

                {/* <Pagination
                    articlesPerPage = ''
                    totalArticles = ''
                /> */}
            </div>
        </Layout>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    
    const { query } = ctx;
    const { categorie } = query;

    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles/category/${categorie}`);
    const data = res.data.data;    

    const pub = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/publicites`)
    const pubData = await pub.data.data

    const result = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URI}/articles`)
    const breakingData = await result.data.data

    return {
        props: {
            articles: data,
            pubBaniere: pubData,
            breakingData: breakingData
        }, 
    }
}

export default Categorie