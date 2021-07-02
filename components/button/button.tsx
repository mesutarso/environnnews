import React from 'react'

import css from './button.style.scss'
import Link from 'next/link'

interface IaButton{
    value?: string;
    classe?: string;
    url?: string;
}

const Button: React.FC<IaButton> = ({ value, classe, url }) => {
    return(
        <Link href={url}>
            <div id={css.container_btn_general}>
                <button className={classe} id={css.button_general}>{value}</button>
            </div>
        </Link>
    )
}

export default Button