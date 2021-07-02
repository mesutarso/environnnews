import Link from 'next/link'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import axios from 'axios'

import css from './footer.style.scss'

const Footer = () => {

    const inputEl = useRef(null);
    const [message, setMessage] = useState('');
  
    const subscribe = async (e) => {
        e.preventDefault();
    
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URI}/mailchimp`, {
            body: JSON.stringify({
            email: inputEl.current.value
            }),
            headers: {
            'Content-Type': 'application/json'
            },
            method: 'POST'
        });
  
        const { error } = await res.json();
    
        if (error) {
            setMessage(error);
            return;
        }
  
        inputEl.current.value = '';
        setMessage('Succès! 🎉 Vous êtes maintenant abonné à la newsletter.');
    };

    return(
        <footer>
            <div className={css.first_section}>
                <div className={css.equipe_de_redaction}>
                    <h3>Réseaux sociaux <div className={css.line_title_art}></div></h3>
                    <div className={css.container_image_footer}>
                        <p>
                            Suivez-nous sur Twitter, Facebook, Instagram, Linkedin et Youtube pour rester au courant de toute nos informations.
                        </p>
                    </div>
                    <div className={css.reseau_sociaux}>
                        <ul>
                            <li>
                                <Link href='https://web.facebook.com/EnvironewsRDC'>
                                    <a target='blank'> <FaFacebookF/></a>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://twitter.com/environews_rdc'>
                                    <a target='blank'> <FaTwitter/></a>
                                </Link>
                            </li>
                            <li>
                                <Link href='#'>  
                                    <a target='blank'> <FaLinkedinIn/></a>
                                </Link>
                            </li> 
                            <li>
                                <Link href='https://www.instagram.com/environewsrdc1/'>
                                    <a target='blank'> <AiFillInstagram/></a>
                                </Link> 
                            </li>
                            <li>
                                <Link href='https://www.youtube.com/c/environnementrdc/featured'>
                                    <a target='blank'> <FaYoutube/></a>
                                </Link>
                            </li>
                        </ul>   
                    </div>
                    
                </div>
                <div className={css.menu}>
                    <h3>Liens Rapide <div className={css.line_title_art}></div></h3>
                    <ul>
                        <li>  
                            <Link href='/'>
                                <a>Accueil</a>
                            </Link> 
                        </li>
                        <li>
                            <Link href='/a-propos-de-nous'>  
                                <a>A propos de nous</a>
                            </Link>

                        </li>
                        <li>
                            <Link href='/redaction'>  
                                <a>Redaction</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/infographie'>  
                                <a>Infographie</a>
                            </Link> 
                        </li>
                        <li>
                            <Link href='/emissions'>
                                <a>Emissions</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/notre-chaine-tele'>
                                <a>Environews TV</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                
                <div className={css.container_adresse}>
                    <h3>Adresse <div className={css.line_title_art}></div></h3>
                    <address className={css.address}>
                        <p>
                            265, Av du marché <br/>
                            Gombe - Kinshasa <br/>
                        </p>
                        
                        Tel : <a href="tel:+243818148485">+243 81 814 84 85</a> <br/>
                        Mail : <a href="mailto:infos@environews-rdc.org">infos@environews-rdc.org</a>
                    </address>
                    <br/>
                    
                </div>
                <div className={css.container_newsletter}>
                    <h3>Newsletter <div className={css.line_title_art}></div></h3>
                    <p>
                        
                        {
                            message ? message
                            : 
                            `Inscrivez-vous à notre newsletter pour vous tenir au courant de nos activités.`
                        }
                    </p>
                    <form onSubmit={subscribe}  className={css.form_newsletter}>
                        
                        <input 
                            type="email" 
                            placeholder='Adresse mail'
                            name = 'email'
                            ref={inputEl}
                            className={css.bar_input_newsletter}
                            required
                        />
                        <input type="submit" value="S'abonner" className={css.btn_newsletter}/>
                        
                    </form>
                    
                </div>
                
            </div>
            <div className={css.copyring}>
                Copyring © Environews-rdc 2020 <br/>
                Site crée par  <a href='mailto:claudemotoba933@gmail.com'>M.A.C</a>
            </div>
            
        </footer>
    )
}

export default Footer