import React, {useState, useContext} from 'react'

import NavHeading from './NavHeading';
import MobileNavMenus from './MobileNavMenus';
import DesktopNavMenu from './DesktopNavMenu';
import SignIn from './SignIn';
import { useGlobalContext } from '../context';

// const {isNavOpen,closeNav} = useNavContext()



const Nav = (props) => {
//    const bet = useGlobalContext()
    console.log(useGlobalContext())

    return (
        <>
            <nav className='mb-7 md:flex md:justify-between items-center overflow-hidden md:w-full'>
                {/* <NavHeading/> */}
                {/* {isNavOpen && <MobileNavMenus/>}  */}
                <DesktopNavMenu/>
                <SignIn />
            </nav>
        </>
    )
}

export default Nav
