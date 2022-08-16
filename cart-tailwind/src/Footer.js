import React from 'react'
import { useGlobalContext } from './context'

const Footer = () => {
    const {totalPrice, clearAll} = useGlobalContext()
    return <>
        <footer className='p-3 flex flex-col mb-5 border-t-2 border-[#617d98]'>
            <div className='flex justify-between mb-5'>
                <h3 className='text-[20px] font-bold'>
                    Total
                </h3>
                <h3 className='text-[20px] font-bold'>
                    {`$${totalPrice}`}
                </h3>
            </div>
            <button 
                onClick={() => clearAll()} 
                className='text-red-500 font-bold border-2 border-red-500 p-2 rounded-lg self-center'
            >
                CLEAR CART
            </button>
        </footer>
    </>
}

export default Footer