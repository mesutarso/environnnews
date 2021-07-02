import { useContext, useState, useEffect } from "react";
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from './activeLink'
import Image from 'next/image'
import axios from 'axios'
import Slider from "react-slick";
import SearchIcon from '@material-ui/icons/Search';
import { useForm } from 'react-hook-form'

import css from './header.styled.scss'
import IArticle from '../../entities/article'
import BreakingComponent from "../breaking/breaking.component";

interface IHeader {
    open?: any;
    children?: any;
    articles: IArticle[]
}

const Header: React.FC<IHeader> = ({ open, children, articles }) => {

    const router = useRouter();
    const [inputbar, setInputBar] = useState(false)

    const searchBar = () => {
        setInputBar(!inputbar)
    }

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 130) {
            setNavbar(true)
        }else{
            setNavbar(false)
        }
    }

    
    if (typeof window !== "undefined") {

        window.addEventListener('scroll', changeBackground)
    }

    const handleResize = () => {
        if (window.innerWidth < 720) {
            setInputBar(true)
        } else {
            setInputBar(false)
        }
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })
   
    const settings = {
        dots: false,
        fade: true,
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

    const { register, handleSubmit, errors } = useForm();

    const slugify = str => {
        const map = {
          '-' : ' ',
          //'-' : '_',
          'a' : 'á|à|ã|â|ä|À|Á|Ã|Â|Ä',
          'e' : 'é|è|ê|ë|É|È|Ê|Ë',
          'i' : 'í|ì|î|ï|Í|Ì|Î|Ï',
          'o' : 'ó|ò|ô|õ|ö|Ó|Ò|Ô|Õ|Ö',
          'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
          'c' : 'ç|Ç',
          'n' : 'ñ|Ñ'
        };
      
        for (var pattern in map) {
          str = str.replace(new RegExp(map[pattern], 'g'), pattern);
        }
      
        return str;
    }

    const onSubmit = async (data) => {
        const char = slugify(data.search.toLowerCase())
        router.push(`/search?q=${char}`)
    };

    
    const detailActus = (titre)=>{
        console.log(titre);
         
    }

    return(
        <header className={navbar ? 'navbar active' : 'navbar'}>
            <div>
                <div className="first_section_header">
                    <Link href='/'>
                        <div className={css.logo}>
                            <Image
                                src='/images/LOGO_ENVIRONEWS_NEW_png.png'
                                alt="Logo environews"
                                width={110}
                                height={60}
                            />
                        </div>
                    </Link>
                    <nav>
                        <ul className={open}>
                            <li> 
                                <Link href='/' activeClassName="menu_active"> 
                                    <a>Accueil</a>
                                </Link> 
                            </li>
                            <li> 
                                <div className="dropdown">
                                    <span className="dropbtn">Actualités</span>
                                    <div className="dropdown-content">
                                        <a href="/article/conservation">Conservation</a>
                                        <a href="/article/sante">Santé</a>
                                        <a href="/article/foret"> Forêt</a>
                                        <a href="/article/environnement">Environnement</a>
                                        <a href="/article/climat">Climat</a>
                                        <a href="/article/biodiversite">Biodiversité</a>
                                        <a href="/article/energie">Énergie</a>
                                        <a href="/article/pollution">Pollution</a>
                                        <a href="/article/autres">Autres</a>
                                        <a href="/article/dossier">Dossier</a>
                                        <a href="/article/opportinute">Opportinute</a>
                                    </div>
                                </div>
                            </li>
                            <li> 
                                <Link href='/a-propos-de-nous' activeClassName="menu_active">
                                    <a>A propos de nous</a>
                                </Link> 
                            </li>
                            <li> 
                                <div className="dropdown">
                                    <span className="dropbtn">Nos services</span>
                                    <div className="dropdown-content">
                                        <a href="/redaction">Rédaction</a>
                                        <a href="/infographie">Infographie</a>
                                        
                                        <a href="/notre-chaine-tele"> Environews TV</a>
                                        <div className={css.dropdown_two}>
                                            <span className={css.dropbtn}>Production audiovisuelle</span>
                                            <div className={css.dropdown_content_two}>
                                                <a href="/documentaire">Documentaire</a>
                                                <a href="/emissions">Emissions</a>
                                                <a href="/motion-design">Motion design</a>
                                                <a href="/spot-publicitaire">Spot publicitaire</a>
                                                <a href="#">Gros plan</a>
                                                
                                            </div>
                                        </div>
                                        <a href="#"> Web design</a>
                                        
                                    </div>
                                </div>
                            </li>
                            <li> 
                                <Link href='/contact' activeClassName="menu_active">
                                    <a>Nous contactez</a>
                                </Link>
                            </li>
                            
                            <button aria-label="Justify" className={css.button_search} type="button" onClick={searchBar}><SearchIcon/></button>

                        </ul>
                        {children}
                    </nav>
                </div>
                { 
                    inputbar === true ?
                    <form onSubmit={handleSubmit(onSubmit)} className={css.bar_input_search}>
                        <input 
                            type="search" 
                            placeholder='Recherche...'
                            name = 'search'
                            ref = {register({})}
                        /> 
                    </form>
                    : 
                    ''
                }
                <Slider {...settings} className={css.slider_home}>
                    {
                        articles.slice(0, 6).map(({ _id, titre, categorie })=>(
                            <div key={_id}>
                                <BreakingComponent
                                    url={`/article/${categorie}/${_id}`}
                                    titre={titre}
                                />      
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <style jsx>{`
                .first_section_header{
                    display: flex;
                    height: 5rem !important;
                    font-family: 'Roboto', sans-serif;
                    width: 100%;
                    padding-right: 13.5%;
                    padding-left: 13.5%;
                }
                .navbar{
                    z-index: 2;
                    background-color:#fff;
                    position: sticky;
                    top: 0;
                    z-index: 999;
                }
                .navbar.active{
                    background: #fff;
                }

                .menu_active{
                    border-bottom: 2px solid #1A6309;
                }
                span:hover{
                    cursor: pointer;
                }

                .dropbtn {
                    background-color: transparent;
                    font-size: 16px;
                    border: none;
                }

                .dropdown {
                    position: relative;
                    display: inline-block;
                }

                .dropdown-content {
                    display: none;
                    position: absolute;
                    background-color: #f1f1f1;
                    min-width: 170px;
                    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                    z-index: 1;
                }

                .dropdown-content a {
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                }

                .dropdown-content a:hover {background-color: #ddd;}

                .dropdown:hover .dropdown-content {display: block;}


                .breaking{
                    //height: 0% !important;
                    background-color: #1A6309 !important;
                    width: 100%;
                    padding: 0.3rem 13.5% !important;
                    display: flex !important;
                }
                .content_breaking span{
                    font-weight: 600;
                }
                .a_la_une{
                    width: 8%;
                    color: #fff;
                }
                .slide{
                    width: 100%;
                    color: #fff;
                }
                .silde > span:focus{
                    border: none !important;
                    outline: none !important;
                }
                @media only screen and (min-width: 320px) and (max-width: 1024px){
                    .dropdown-content {
                        display: none;
                        position: absolute;
                        background-color: rgba(0, 0, 0, 0.959);
                        min-width: 160px;
                        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                        z-index: 1;
                    }
                    
                    .first_section_header{
                        padding-left: 5%;
                        padding-right: 5%;
                    }
                    .menu_hamburger{
                        text-align: right;
                    }
                   
                    i{
                        display: flex !important;
                    }
                    .logo{
                        margin-top: 2%;
                    }
                    nav{
                        padding-top: 1rem;
                    }
                    .breaking{
                        width: 100%;
                        padding: 0.3rem 5% !important;
                    }
                    .breaking p{
                        display: none !important;
                        color: #fff;
                        font-size: 11px;
                        margin: 0;
                    }
                    .content_breaking span{
                        font-weight: 600;
                    }
                    /* .breaking > .a_la_une{
                        width: 15% important;
                        margin: auto 0;
                    } */
                    .breaking > .slide{
                        width: 100% !important;
                        color: #fff;
                    }
                }

                // tablette
                @media only screen and (min-width: 481px) and (max-width: 1024px) {
                    .first_section_header{
                        padding-right: 7.5%;
                        padding-left: 7.5%;
                    }
                    .breaking{
                        padding: 0.3rem 7.5% !important;
                    }
                }

            `}
            </style>
        </header>
    )
}


export default Header