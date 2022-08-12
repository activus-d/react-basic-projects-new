import React, {useState, useRef, useEffect, useContext} from 'react'

import { options, socialIcons } from './data'
import pageLogo from './pageLogo.svg'
import { menuIcon } from './data'

const NavContext = React.createContext()
// console.log(navIcons, socials)

const Nav = () => {
    const [sIcons, setSocials] = useState(socialIcons);
    const [navIcons, setNIcons] = useState(options)
    const navRef = useRef(null);
    const [isShowMenu, setIsShowMenu] = useState(true);

    const showNav = () => {
        const nav = navRef.current
        nav.style.width = '100%'
    }
    const closeNav = () => {
        const nav = navRef.current
        nav.style.width = '0%'
    }

    return (
        <NavContext.Provider value={{showNav, closeNav, navIcons, sIcons}}>
        {isShowMenu && <MenuIcon />}
        <nav className='w-0 h-screen flex flex-col justify-between py-3 tablet:w-480 fixed overflow-hidden z-10 duration-300 bg-white' ref={navRef} >
            <PageLogoAndClose />
            <NavOptions />
            <Socials />
                   
        </nav>
        </NavContext.Provider>
    )
}

const MenuIcon = () => {
    const navP = useContext(NavContext)
    console.log(navP)
    return <i className='absolute top-7 left-7 z-10' onClick={navP.showNav} >
                {menuIcon}
            </i>
}

const PageLogoAndClose = () => {
    const navP = useContext(NavContext)
    return <div className='flex justify-between mb-6 px-5'>
                <img src={pageLogo} className='h-12' />
                <button className='text-3xl font-bold text-iconCloseColor' onClick={navP.closeNav} >
                    X
                </button>
            </div>
}

const NavOptions = () => {
    const navP = useContext(NavContext)
    return (
        <>
        {navP.navIcons.map(option => {
            const {id, url, text, icon} = option;
                return (
                    <div id={url} key={id} className='flex items-center h-14 px-5 hover:bg-bg'>
                        {icon}
                        <h4 className='ml-5 text-xl text-navtextColor'>{text}</h4>
                    </div>
                )
        })}
        </>
    )
}

const Socials = () => {
    const navP = useContext(NavContext)
    return (
        <div className='flex h-14 items-center justify-center'>
            <div className='flex w-2/6'>
                {navP.sIcons.map(social => {
                    const {id, url, icon,} = social;
                    return (
                        <i key={id} id={url} className='px-2' >{icon}</i>
                    )
                })}
            </div>
        </div>
    )
}

export default Nav
