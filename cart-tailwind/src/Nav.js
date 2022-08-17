import React from 'react'
import { useGlobalContext } from './context'

const NavBar = () => {
    const {itemsInCart, isScroll} = useGlobalContext()
    return <nav className={`flex justify-between bg-[#2680c0] h-16 align items-center px-7 ${isScroll ? 'fixed w-screen top-0' : 'absolute top-0 w-screen'}`} >
        <h2 className='text-white font-bold text-2xl'>
            UseReducer
        </h2>
        <div className='relative flex w-14 h-16 items-center justify-center '>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' className='w-9'>
                <path 
                    d='M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z' 
                    fill='white'                 
            />
            </svg>
            <div className=' flex justify-center items-center rounded-[12px] bg-[#85c6f4] absolute w-7 h-7 top-[0] left-7'>
                <p className='text-white font-bold'>{itemsInCart()}</p>
            </div>
        </div>
    </nav>
}

export default NavBar