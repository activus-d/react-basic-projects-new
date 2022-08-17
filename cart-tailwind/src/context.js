import React, {useState, useContext, useEffect, useReducer} from 'react'
import App from './App';
import data from './data';

import {reducer} from './reducer'

const AppContext = React.createContext();
const url = 'https://course-api.com/react-useReducer-cart-project'


const defaultState = {
    items: [],
    itemsInCart: 0,
    totalPrice: 0,
    isLoadingPage: true,
    isScroll: false,
    isItemsEmpty: false
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultState)
    // const [items, setItems] = useState(data);
    // const [itemsInCart, setItemsIncart] = useState(0);
    // const [totalPrice, setTotalPrice] = useState(0);
    // const [isLoadingPage, setIsLoadingpage] = useState(true)
    // const [isScroll, setIsScroll] = useState(false)

    const fetchData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        dispatch({type: 'FETCH_DATA', payLoad: data})
        // throw new Error(Error)
    };

    useEffect(() => {
        fetchData()
    }, [])

    const removeLoadingpage = () => {
        dispatch({type: 'REMOVE_LOADINGPAGE'})
    };

    const fixNav = (e) => {
        dispatch({type: 'FIX_NAV'})
    };

    const isScroll = () => {
        return state.isScroll
    };
    const isLoadingPage = () => {
        return state.isLoadingPage
    };

    useEffect(() => {
        dispatch({type: 'TOTAL_AMOUNT'})
    }, [state.items]);
    const itemsInCart = () => {
        return state.itemsInCart
    };

    useEffect(() => {
        dispatch({type: 'TOTAL_PRICE'})
    }, [state.items]);
    const totalPrice = () => {
        return state.totalPrice
    };

    const removeItem = (id) => {
        dispatch({type: 'REMOVE_ITEM', payLoad: id})
    };

    const increaseAmount = (id) => {
        dispatch({type: 'INCREASE_AMOUNT', payLoad: id})
    };

    const decreaseAmount = (id) => {
        dispatch({type: 'DECREASE_AMOUNT', payLoad: id})
    };

    const clearAll = () => {
        dispatch({type: 'CLEAR_ALL'})
    };

    useEffect(() => {
        dispatch({type: 'ITEMS_EMPTY'})
    }, [state.items]);
    const isItemsEmpty = () => {
        return state.isItemsEmpty
    };

    const items = () => {
        return state.items
    };
    

    // const removeLoadingpage = (e) => {
    //     if(items) {
    //         console.log(e)
    //         return setIsLoadingpage(false)
    //     }
    // };

    // const fixNav = (e) => {
    //     setIsScroll(true)
    // };

    // useEffect(() => {
    //     const totalAmount = (
    //         items.map(item => item = item.amount)
    //             .reduce((item,c) => item + c, 0)
    //         );
    //     setItemsIncart(totalAmount)
    // });
    // useEffect(() => {
    //     const total = (
    //         items.map(item => item = item.price * item.amount)
    //             .reduce((item,c) => item + c, 0)
    //         );
    //     setTotalPrice(total)
    // });

    // const removeItem = (id) => {
    //     const newItems = items.filter(item => item.id !== id)
    //     return setItems(newItems)
    // };
    // const increaseAmount = (id) => {
    //     // e.preventDefault()
    //     const newItems = items.map(item => {
    //         if(item.id === id) {
    //             return item = {id: item.id, title: item.title, price: item.price, img: item.img, amount: item.amount + 1}
    //         }else {
    //             return item = item
    //         }
    //     })
    //     return setItems(newItems)
    // };
    // const decreaseAmount = (id) => {
    //     // e.preventDefault()
    //     const newItems = items.map(item => {
    //         if(item.id === id) {
    //             return item = {id: item.id, title: item.title, price: item.price, img: item.img, amount: item.amount !== 0 ? item.amount - 1 : 0}
    //         }else {
    //             return item = item
    //         }
    //     })
    //     return setItems(newItems)
    // };
    // const clearAll = () => {
    //     return setItems([])
    // };

    return(
        <AppContext.Provider value={{
            isLoadingPage,
            removeLoadingpage,
            fixNav,
            isScroll,
            items,
            // isRemoveItem,
            clearAll,
            removeItem,
            increaseAmount,
            decreaseAmount,
            itemsInCart,
            totalPrice,
            isItemsEmpty
        }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export {AppContext, AppProvider}