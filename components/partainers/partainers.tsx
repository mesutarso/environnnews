import Image from 'next/image'
import Slider from 'react-slick'
import Fade from 'react-reveal/Fade'

import css from './partainers.styled.scss'

const Partainer = () => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
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
        <Fade bottom>
            <div className={css.container_partainers}>
                <h1>ILS NOUS ONT FAIT CONFIANCE <div className={css.line_title_art}></div> </h1>
                <Slider {...settings} className={css.slider_partainer}>
                    <div> 
                        <Image
                            src = '/images/partainers/wwf.gif'
                            alt = "baniere environews"
                            width = {200}
                            height = {150}
                            className = ''
                        />
                    </div>
                    <div> 
                        <Image
                            src = '/images/partainers/afd.png'
                            alt = "AFD LOGO"
                            width = {200}
                            height = {100}
                            className = ''
                        />
                    </div>
                    <div> 
                        <Image
                            src = '/images/partainers/giz.png'
                            alt = "logo giz"
                            width = {150}
                            height = {100}
                            className = ''
                        />
                    </div>
                    <div> 
                        <Image
                            src = '/images/partainers/snel.jpg'
                            alt = "logo snel"
                            width = {100}
                            height = {100}
                            className = ''
                        />
                    </div>
                    <div> 
                        <Image
                            src = '/images/partainers/hirondelle.png'
                            alt = "logo hirondelle"
                            width = {200}
                            height = {100}
                            className = ''
                        />
                    </div>
                </Slider>
            </div>
        </Fade>
    )
}

export default Partainer