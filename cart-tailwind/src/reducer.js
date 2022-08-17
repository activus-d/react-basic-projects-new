import React from 'react'

export const reducer = (state, action) => {
    const dataItems = action.payLoad
    if(action.type === 'FETCH_DATA') {
        return {
            ...state,
            isLoadingPage: false,
            items: dataItems
        }
    }
    if(action.type === 'REMOVE_LOADINGPAGE') {
        return (
            {
                ...state,
                isLoadingPage: false
            }
        )
    };
    if(action.type === 'FIX_NAV') {
        return (
            {
                ...state,
                isScroll: true
            }
        )
    };
    if(action.type === 'TOTAL_AMOUNT') {
        const totalAmount = ( state.items.map(item => item = item.amount)
                                    .reduce((item,c) => item + c, 0) )
        return (
            {
                ...state,
                itemsInCart: totalAmount, 
                isItemsEmpty: totalAmount === 0 ? true : false 
            }
        )
    };
    if(action.type === 'TOTAL_PRICE') {
        const total = (
            state.items.map(item => item = item.price * item.amount)
                .reduce((item,c) => item + c, 0)
            );
        return (
            {
                ...state,
                totalPrice: total.toFixed(2)
            }
        )
    };
    if(action.type === 'REMOVE_ITEM') {
        const newItems = state.items.filter(item => item.id !== action.payLoad)
        return (
            {
                ...state,
                items: newItems
            }
        )
    };
    if(action.type === 'INCREASE_AMOUNT') {
        const newItems = state.items.map(item => {
            if(item.id === action.payLoad) {
                return item = {id: item.id, title: item.title, price: item.price, img: item.img, amount: item.amount + 1}
            }else {
                return item = item
            }
        });
        return (
            {
                ...state,
                items: newItems
            }
        )
    };
    if(action.type === 'DECREASE_AMOUNT') {
        const newItems = state.items.map(item => {
            if(item.id === action.payLoad) {
                return item = {id: item.id, title: item.title, price: item.price, img: item.img, amount: item.amount !== 0 ? item.amount - 1 : 0}
            }else {
                return item = item
            }
        })
        return (
            {
                ...state,
                items: newItems
            }
        )
    };
    if(action.type === 'CLEAR_ALL') {
        return (
            {
                ...state,
                isItemsEmpty: true,
                items: []
            }
        )
    };
    if(action.type === 'ITEMS_EMPTY') {
        if(!state.items) {
            return (
                    {
                    ...state,
                    isItemsEmpty: true
                }
            )
        }else {
            return (
                {
                    ...state,
                    isItesmEmpty: false
                }
            )
        }
    };
    
}
