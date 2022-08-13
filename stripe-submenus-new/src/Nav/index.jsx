import React, {useState, useContext} from 'react'
import {mainLogo} from '../data'
import { menuIcon } from "../data";
import { mainNavOptions } from '../data';

import NavHeading from './NavHeading';
import MobileNavMenus from './MobileNavMenus';
import DesktopNavMenu from './DesktopNavMenu';
import SignIn from './SignIn';

// const NavContext = React.createContext()


const Nav = (props) => {
    const [navOptions, setNavOptions] = useState(mainNavOptions);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMenuIcon, setIsMenuIcon] = useState(false)

    const showNav = (e) => {
        e.preventDefault();
        setIsNavOpen(() => {
            return true
        });
        setIsMenuIcon(() => {
            return false
        })
    };
    const closeNav = (e) => {
        e.preventDefault();
        setIsNavOpen(() => {
            return false
        });
        setIsMenuIcon(() => {
            return true
        })
    };
    const showMenu = (e) => {
        e.preventDefault();
        const menuContainer = e.target.parentNode.parentNode
        const children = Array.from(menuContainer.children)
        children[children.length - 1].style.display = 'block'
        // children[children.length - 1].style.transform = 'translateX(0%)'
        // console.log(children[children.length - 1])
    };
    const hideMenu = (e) => {
        e.preventDefault();
        const menuContainer = e.target.parentNode.parentNode
        const children = Array.from(menuContainer.children)
        // children[children.length - 1].style.transform = 'translateX(30%)'
        children[children.length - 1].style.display = 'none'
    };


    return (
        <>
            <nav className='mb-7 md:flex md:justify-between items-center overflow-hidden md:w-full'>
                <NavHeading mainLogo={mainLogo} menuIcon={menuIcon} showNav={showNav} isMenuIcon={isMenuIcon}/>
                {isNavOpen && <MobileNavMenus navOptions={navOptions} closeNav={closeNav} />} 
                <DesktopNavMenu navOptions={navOptions} showMenu={showMenu} hideMenu={hideMenu}/>
                <SignIn />
            </nav>
        </>
    )
}

export default Nav
