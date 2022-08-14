import React, { useContext, useState } from 'react'

const NavContext = React.createContext();

const NavProvider = ({children}) => {
    const [isMenuIcon, setIsMenuIcon] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);


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

    

    return (
        <NavContext.Provider 
            value={{
                showNav, 
                isMenuIcon,
                closeNav,
                // showMenu,
                // hideMenu,
                isNavOpen
            }}
        >
            {children}
        </NavContext.Provider>
    )
};


export const useGlobalContext = () => {
    return useContext(NavContext);
}

export { NavContext, NavProvider };