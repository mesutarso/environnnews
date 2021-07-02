import { useState, useEffect } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton';

import css from './baniere.styled.scss'
import Loader from '../spinner/spinner'

const Baniere = ({ data }) => {

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

    return(
        <Slider {...settings} className={css.container_baniere}>
          { 
            data.map(({ file, _id }) =>(
              <div key={_id} className={css.image_baniere}>
                <Image
                    src = {file}
                    alt = "baniere environews"
                    // width = {985}
                    // height = {200}
                    layout="fill"
                    className = {css.img}
                />
              </div>
                )
            )
}
        </Slider>
    )
}

export default Baniere