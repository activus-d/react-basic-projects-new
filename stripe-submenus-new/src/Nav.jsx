import React, {useState} from 'react'
import {mainLogo} from './data'
import { menuIcon } from "./data";
import { mainNavOptions } from './data';

const Nav = (props) => {
    const [navOptions, setNavOptions] = useState(mainNavOptions);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMenuIcon, setIsMenuIcon] = useState(false)

    const showNav = () => {
        setIsNavOpen(() => {
            return true
        });
        setIsMenuIcon(() => {
            return false
        })
    };
    const closeNav = () => {
        setIsNavOpen(() => {
            return false
        });
        setIsMenuIcon(() => {
            return true
        })
    };
    const showMenu = (e) => {
        const menuContainer = e.target.parentNode.parentNode
        const children = Array.from(menuContainer.children)
        children[children.length - 1].style.visibility = 'visible'
        children[children.length - 1].style.transform = 'translateX(0%)'
        // console.log(children[children.length - 1])
    };
    const hideMenu = (e) => {
        const menuContainer = e.target.parentNode.parentNode
        const children = Array.from(menuContainer.children)
        children[children.length - 1].style.visibility = 'invisible'
        children[children.length - 1].style.transform = 'translateX(70%)'
        
        // setTimeout(() => {
        //     children[children.length - 1].style.visibility = 'hidden'
        // }, 100)
        // setTimeout(() => {
        //     children[children.length - 1].style.visibility = 'visible'
        // }, 700)
        // console.log(children[children.length - 1])
    };


    return (
        <nav className='mb-7 md:flex md:justify-between items-center overflow-hidden'>
            <NavHeading showNav={showNav} isMenuIcon={isMenuIcon}/>
            {isNavOpen && <MobileNavMenus navOptions={navOptions} closeNav={closeNav} />} 
            <DesktopNavMenu navOptions={navOptions} showMenu={showMenu} hideMenu={hideMenu}/>
            <SignIn />
        </nav>
    )
}

const NavHeading = ({showNav, isMenuIcon}) => {
    return (
        <div className='flex justify-between'>
            <img src={mainLogo} />
            <button onClick={showNav} className='cursor-pointer'>
                {isMenuIcon && menuIcon}
            </button>
        </div>
    )
}

const MobileNavMenus = ({navOptions, closeNav}) => {
    return (
        <div className='bg-white h-[90%] absolute flex flex-col top-5 w-[90%] px-[5%] py-3 md:hidden'>
            <h2 className='text-pText font-bold text-4xl h-12 self-end cursor-pointer' onClick={closeNav}>x</h2>
            {navOptions.map(option => {
                const {id, name, url, optionSubMenus} = option;
                return (
                    <div key={id}>
                        <a href="url" className='block mb-3 text-h1 font-medium'>{name}</a>
                        <div className='grid grid-cols-2 gap-1 mb-8'>
                            {
                                optionSubMenus.map(submenu => {
                                    const {id, menuName, icon} = submenu
                                    return (
                                        <a key={id} className='flex items-center'>
                                            {icon}
                                            <p className='text-[#3e5366] ml-2'>{menuName}</p>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                )  
            })}
        </div>
    )
}

const DesktopNavMenu = ({navOptions, showMenu, hideMenu}) => {
    return (
        <div className='hidden md:flex justify-evenly basis-3/5 z-[2]'>
            {navOptions.map(option => {
                const {id, name, url, optionSubMenus} = option;
                return (
                    <div key={id} className='md:flex md:justify-center md:items-center md:flex-col'>
                        <a href="url" className='text-white font-medium' onMouseOver={showMenu} onMouseLeave={hideMenu}><h2>{name}</h2></a>
                        <div className='flex flex-col absolute top-16 bg-white py-3 duration-1000 translate-x-[50%] md:invisible'>
                            <h3 className='px-7 mb-5 text-[#3e5366]'>{name}</h3>
                            <div className='flex'>
                                {
                                    optionSubMenus.map(submenu => {
                                        const {id, menuName, icon} = submenu
                                        return (
                                            <a key={id} className='flex items-center mx-7'>
                                                {icon}
                                                <p className='text-[#3e5366] ml-2'>{menuName}</p>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )  
            })}
        </div>
    )
}

const SignIn = () => {
    return (
        <button className=' hidden md:inline-block bg-black w-24 h-8 rounded text-white z-[2]'>
            Sign in
        </button>
    )
}

export default Nav
