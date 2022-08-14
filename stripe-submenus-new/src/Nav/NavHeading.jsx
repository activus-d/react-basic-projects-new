import React from 'react'
import { menuIcon } from "../data";
import {mainLogo} from '../data'
import { useGlobalContext } from '../context';


const NavHeading = () => {
    const {showNav, isMenuIcon, mainLogo, menuIcon} = useGlobalContext()
    return (
        <div className='flex justify-between'>
            <img src={mainLogo} />
            <button onClick={showNav} className='cursor-pointer'>
                {isMenuIcon && menuIcon}
            </button>
        </div>
    )
}

export default NavHeading