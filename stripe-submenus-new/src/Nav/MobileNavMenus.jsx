import React, {useState} from 'react'
import { mainNavOptions } from '../data';
import { useGlobalContext } from '../context';


const MobileNavMenus = () => {
     const [navOptions, setNavOptions] = useState(mainNavOptions);

    // const {closeNav} = useGlobalContext()
    return (
        <div className='bg-white h-[90%] absolute flex flex-col top-5 w-[90%] px-[5%] py-3 md:hidden'>
            <h2 className='text-pText font-bold text-4xl h-12 self-end cursor-pointer' /*onClick={closeNav}*/>x</h2>
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

export default MobileNavMenus
