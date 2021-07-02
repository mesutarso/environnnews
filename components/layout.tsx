import React from 'react'
import Burger from './burger/burger'
import Footer from './footer'
import Seo from './seo'
import Baniere from './baniere/baniere'
import Partainers from './partainers/partainers'

import IBaniere from '../entities/baniere'
import IArticle from '../entities/article'

interface Props {
    children?: React.ReactNode;
    desc?: string;
    thumb?: string;
    title?: any;
    description?: string;
    title_meta?: string;
    og_title?: string;
    image_article?: string;
    og_url?: string;
    og_description?: string;
    og_secure_url?: string;
    baniere?: IBaniere[]
    articles: IArticle[]
}

const Layout: React.FC<Props> = ({
    children,
    title,
    description,
    title_meta,
    og_title,
    image_article,
    og_url,
    og_description,
    og_secure_url,
    baniere,
    articles
  }) => {
    return(
        <>
            <Seo
                title = {title}
                description = {description}
                title_meta = {title_meta}
                og_title = {og_title}
                image_article = {image_article}
                og_url = {og_url}
                og_description={og_description}
                og_secure_url={og_secure_url}
            />
            <Burger
                articles={articles}
            />
            <Baniere
                data={baniere}
            />
            <div>
                {children}
            </div>
            <Partainers/>
            <Footer/>
        </>
    )
}

export default Layout