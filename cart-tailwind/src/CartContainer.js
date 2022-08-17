import React from 'react'
import { useGlobalContext } from './context'
import CartItems from './CartItems'


const CartContainer = () => {
    const {isItemsEmpty} = useGlobalContext()
    return <>
        <main className='px-4'>
            <h1 className='font-bold text-2xl py-6 mt-16 text-center'>YOUR BAG</h1>
            <CartItems />
            {isItemsEmpty() && <h2 className='text-[18px] font-medium text-center mb-5'>No Item In Cart</h2>}
        </main>
    </>

}

export default CartContainer