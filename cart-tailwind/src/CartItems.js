import React from 'react';
import { useGlobalContext } from './context';


const CartItems = () => {
    const {items, removeItem, increaseAmount, decreaseAmount} = useGlobalContext();
    // console.log(items)
    return <>
        {items.map((item) => {
            const {id, title, price, img, amount} = item
            return (
                <div key={id} className='flex items-center mb-3 justify-between'>
                    <div className='h-16 flex items-center'>
                        <img 
                            src={img} 
                            alt={title} 
                            className='h-full'
                        />
                        <div className='flex flex-col'>
                            <h4 className='text-left'>
                                {title}
                            </h4>
                            <span 
                                className='block text-left text-[#617d98]'>
                                {`$${price}`}
                            </span>
                            <button className='text-[#2680c0] text-left justify-self-start' 
                                onClick={() => removeItem(id)}
                            >
                                remove
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <button className='' 
                            onClick={() => increaseAmount(id)}
                        >
                            <svg xmlns='http://www.w3.org/2000/svg' 
                                viewBox='0 0 20 20' 
                                className='w-10'
                            >
                                <path 
                                    d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' 
                                    fill='#2680c0' 
                                />
                            </svg>
                            <p>{amount}</p>
                        </button>
                        <button className='w-10' onClick={() => decreaseAmount(id)}>
                            <svg xmlns='http://www.w3.org/2000/svg' 
                                viewBox='0 0 20 20'
                            >
                                <path 
                                    d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' 
                                    fill='#2680c0' 
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            )
        })}
    </>
}

export default CartItems