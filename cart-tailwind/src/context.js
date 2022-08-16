import React, {useState, useContext, useEffect} from 'react'
import App from './App';
import data from './data';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    
    const [items, setItems] = useState(data);
    const [itemsInCart, setItemsIncart] = useState(0);
    const [isRemoveItem, setIsRemoveItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isLoadingPage, setIsLoadingpage] = useState(true)
    const [isScroll, setIsScroll] = useState(false)

    const removeLoadingpage = (e) => {
        if(items) {
            console.log(e)
            return setIsLoadingpage(false)
        }
    };

    const fixNav = (e) => {
        setIsScroll(true)
    };

    useEffect(() => {
        const totalAmount = (
            items.map(item => item = item.amount)
                .reduce((item,c) => item + c, 0)
            );
        setItemsIncart(totalAmount)
    });
    useEffect(() => {
        const total = (
            items.map(item => item = item.price * item.amount)
                .reduce((item,c) => item + c, 0)
            );
        setTotalPrice(total)
    });

    const removeItem = (id) => {
        const newItems = items.filter(item => item.id !== id)
        return setItems(newItems)
    };
    const increaseAmount = (id) => {
        // e.preventDefault()
        const newItems = items.map(item => {
            if(item.id === id) {
                return item = {id: item.id, title: item.title, price: item.price, img: item.img, amount: item.amount + 1}
            }else {
                return item = item
            }
        })
        return setItems(newItems)
    };
    const decreaseAmount = (id) => {
        // e.preventDefault()
        const newItems = items.map(item => {
            if(item.id === id) {
                return item = {id: item.id, title: item.title, price: item.price, img: item.img, amount: item.amount !== 0 ? item.amount - 1 : 0}
            }else {
                return item = item
            }
        })
        return setItems(newItems)
    };
    const clearAll = () => {
        return setItems([])
    };

    return(
        <AppContext.Provider value={{
            isLoadingPage,
            removeLoadingpage,
            fixNav,
            isScroll,
            items,
            isRemoveItem,
            clearAll,
            removeItem,
            increaseAmount,
            decreaseAmount,
            itemsInCart,
            totalPrice
        }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export {AppContext, AppProvider}