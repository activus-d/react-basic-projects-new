import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()
    
const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({page: '', links: []});
    const [location, setLocation] = useState({});

    const openSidebar = () => {
        return setIsSidebarOpen(true)
    };
    const closeSidebar = () => {
        return setIsSidebarOpen(false)
    };
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    };
    const closeSubmenu = () => {
        return setIsSubmenuOpen(false)
    };


    return <>
        <AppContext.Provider value={{
            isSidebarOpen,
            isSubmenuOpen,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu
        }}>
            {children}
        </AppContext.Provider>
    </>
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export {AppProvider, AppContext}
