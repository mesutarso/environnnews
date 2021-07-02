import { useState, useEffect } from "react";
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

import css from './burger.styled.scss'
import Menu from '../header'

const Burger = ({ articles }) => {

    const [open, setOpen] = useState(false)

    return(
        <>
            <Menu open={open === true ? css.container_nav : css.container_nav_ul}
                articles={articles}
            >
                <div onClick={()=>setOpen(!open)} className={css.container_burger}>
                    {open === true ? <ClearIcon className={css.clear_icon} /> : <MenuIcon className={css.hamburger}/>}
                </div>
            </Menu>
        </>
    )
}



export default Burger