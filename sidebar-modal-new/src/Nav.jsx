import React from 'react'
import {useState, useRef, useEffect} from 'react'

import { options, socials } from './data'
import pageLogo from './pageLogo.svg'
import { menuIcon } from './data'

const Nav = () => {
    const navRef = useRef(null);
    const [isShowMenu, setIsShowMenu] = useState(true);
    // console.log(navOptions)
    const showNav = () => {
        const nav = navRef.current
        nav.style.width = '100%'
    }
    const closeNav = () => {
        const nav = navRef.current
        nav.style.width = '0%'
    }

    useEffect(() => {
        
    })

    return (
        <>
        {isShowMenu && <MenuIcon showNav={showNav} />}
        <nav className='w-0 h-screen flex flex-col justify-between py-3 tablet:w-480 fixed overflow-hidden z-10 duration-300 bg-white' ref={navRef} >
            <PageLogoAndClose closeNav={closeNav} />
            <NavOptions />
            <Socials />
                   
        </nav>
        </>
    )
}

const MenuIcon = ({showNav}) => {
    return <i className='absolute top-7 left-7 z-10' onClick={showNav} >
                {menuIcon}
            </i>
}

const PageLogoAndClose = ({closeNav}) => {
    return <div className='flex justify-between mb-6 px-5'>
                <img src={pageLogo} className='h-12' />
                <button className='text-3xl font-bold text-iconCloseColor' onClick={closeNav} >
                    X
                </button>
            </div>
}

const NavOptions = () => {
    console.log(options)
    return (
        <>
        {options.map(option => {
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
    return (
        <div className='flex h-14 items-center justify-center'>
            <div className='flex w-2/6'>
                {socials.map(social => {
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
