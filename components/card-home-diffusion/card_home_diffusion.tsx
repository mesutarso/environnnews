import { useState, useEffect } from 'react'
import axios from 'axios'

import css from './card_home_diffusion.styled.scss'
import CardArchiveArticle from '../card-content-archive-article/card_archive_article'

interface ICardHome{
    titre?: string,
    heure?: string;
    data?: []
}

const CardHomeDiffusion: React.FC<ICardHome> = ({ data }) => {

    return(
        <div className={css.diffusion}> 
            <CardArchiveArticle
                data = {data}
            />

        </div>
        
    )
}

export default CardHomeDiffusion