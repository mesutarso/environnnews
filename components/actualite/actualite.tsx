import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'
import axios from 'axios'
import Image from 'next/image'

import css from './actualite.styled.scss'
import CardDiffusion from '../card-home-diffusion/card_home_diffusion'
import CardActualite from '../card-actualite/card_actualite'
import NosEmissions from '../nos-emissions/nos_emissions'
import CardYoutube from '../card-youtube/card_youtube'
import CardArticle from '../card-articles/card_articles'

interface Props {
    actualites?: [];
    items?: [];
    data?:[];
    leSaviezVous?: [];
    opportinute?: []
}

const Actualite: React.FC<Props> = ({ 
    actualites, 
    items, 
    data, 
    leSaviezVous,
    opportinute
}) => {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 9000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
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
    
    const router = useRouter()
    
    return(
        <div className={css.actus}>
                <Fade left>
                <div className={css.first_actus}>
                    <Slider {...settings} className={css.container_actualite_home} >
                        {
                            actualites.slice(0, 6).map(({
                                _id,
                                file,
                                titre,
                                auteur,
                                categorie
                            }) => {
                                return(
                                    <div key={_id}>
                                        <CardActualite
                                            auteur = {auteur}
                                            source = {file === undefined ? '/images/reportage.jpg' : file}
                                            titre = {titre}
                                            url = {`/article/${categorie}/${_id}`}
                                        />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    <NosEmissions
                        items = {actualites}
                    />
                </div>
                </Fade>
                <Fade right>
                <div className={css.second_section_actus}>
                    {items.map(({
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
                                source = {`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`}
                                description = {title} 
                            />
                        )
                    })}
                    {
                        leSaviezVous.slice(0,1).map(({ file, _id, titre })=>{
                            return(
                                <div className={css.card_le_Saviez_vous} key={_id}>
                                    <Image
                                        src= {file === undefined ? '/images/reportage.jpg' : file}
                                        alt="Image article"
                                        width={310}
                                        height={190}
                                    /> 
                                    <h3 className={css.label_lesaviez_vous}> {titre} </h3>
                        
                                </div>
                            )
                        })
                    }
                    
                    
                    <CardDiffusion
                        data = {opportinute}
                    />
                    <br/>
                    <br/>
                    
                </div>
                </Fade>
            </div>
    )
}

export default Actualite