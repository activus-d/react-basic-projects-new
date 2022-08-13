import React from 'react'

const NavHeading = ({showNav, isMenuIcon, mainLogo, menuIcon}) => {
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