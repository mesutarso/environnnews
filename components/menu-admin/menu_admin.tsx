import Image from 'next/image'

import css from './menu_admin.scss'
import Link from '../header/activeLink'

const MenuAdmin = () => {
    return(
        <div className={css.menu_admin}>
            <div className={css.container_menu_admin}>
                <div className={css.image_menu_admin}>
                    {/* <Image
                        src='/images/environews.jpg'
                        alt="Logo environews"
                        width={660}
                        height={150}
                    /> */}
                </div>
                <nav>
                    <ul>
                        <h3>Menu</h3>
                        {/* <li>
                            <Link href='/admin' activeClassName={css.menu_active}>
                                <a>Tableau de bord</a>
                            </Link>
                        </li> */}
                        <li>
                            <Link href='/admin/article' activeClassName={css.menu_active}>
                                <a>Article</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/admin/publicite' activeClassName={css.menu_active}>
                                <a>Publicité</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/admin/breaking-news' activeClassName={css.menu_active}>
                                <a>Bande passante</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/admin/le-saviez-vous' activeClassName={css.menu_active}>
                                <a>Le saviez vous ?</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/admin/realisation' activeClassName={css.menu_active}>
                                <a>Réalisation</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/admin/message' activeClassName={css.menu_active}>
                                <a>Message</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/' activeClassName={css.menu_active}>
                                <a target="blank">Page d'accueil</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={css.cache_menu}></div>
        </div>
    )
}

export default MenuAdmin