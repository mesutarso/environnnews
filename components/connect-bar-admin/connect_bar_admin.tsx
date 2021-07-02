import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import css from './connect_bar_admin.styled.scss'

interface IaBar{
    link?: React.ReactNode;
}

const ConnectBarAdmin: React.FC<IaBar> = ({ 
    link 
}) => {

    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const router = useRouter()

    useEffect(() => {

    
    }, [])

    const deconnexion = () => {

    }
     

    
    return(
        <div className={css.container_connect_bar_admin}>
            <div className={css.content_connect_bar}>
                <h3 className={css.title_connect_bar}>
                  {link}
                </h3>
                <p className={css.profil_user}>
                    {/* Connecté en tant que <strong>{prenom} {nom.toUpperCase()}</strong> */}
                    <a href='/api/logout' className={css.btn_deconnexion}>Deconnexion</a>
                </p>
            </div>
            <div className={css.cache_connect_bar}></div>
        </div>
    )
}

export default ConnectBarAdmin