import React from 'react'
import { useGlobalContext } from './context'
import CartItems from './CartItems'


const CartContainer = () => {
    // const {clearAll} = useGlobalContext()
    // console.log(clearAll)
    return <>
        <main className='px-4'>
            <h1 className='font-bold text-2xl py-6 mt-16 text-center'>YOUR BAG</h1>
            <CartItems />
        </main>
    </>

}

export default CartContainer