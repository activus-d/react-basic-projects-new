import React from 'react'

const DesktopNavMenu = ({navOptions, showMenu, hideMenu}) => {
    return (
        <div className='hidden md:flex justify-evenly basis-3/5 z-[2]'>
            {navOptions.map(option => {
                const {id, name, url, optionSubMenus} = option;
                return (
                    <div key={id} className='md:flex md:justify-center md:items-center md:flex-col'>
                        <a href="url" className='text-white font-medium' onMouseOver={showMenu} onMouseLeave={hideMenu}><h2>{name}</h2></a>
                        <div className='flex flex-col absolute top-16 bg-white py-3 duration-1000 md:hidden md:overflow-hidden'>
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

export default DesktopNavMenu
