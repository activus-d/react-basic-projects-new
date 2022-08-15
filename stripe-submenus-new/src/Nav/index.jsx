import React, {useState, useContext} from 'react'

import NavHeading from './NavHeading';
import MobileNavMenus from './MobileNavMenus';
import DesktopNavMenu from './DesktopNavMenu';
import SignIn from './SignIn';
import { NavProvider } from '../context';
import { useGlobalContext } from '../context';



const Nav = (props) => {
   const {isNavOpen,closeNav} = useGlobalContext()
   console.log(isNavOpen)

    return (
        <>
            <NavProvider>
                <nav className='mb-7 md:flex md:justify-between items-center overflow-hidden md:w-full'>
                    {/* <NavHeading/> */}
                    {<MobileNavMenus/>} 
                    <DesktopNavMenu/>
                    <SignIn />
                </nav>
            </NavProvider>
        </>
    )
}

export default Nav
