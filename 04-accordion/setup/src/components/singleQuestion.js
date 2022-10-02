import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ id, title, info}) => {
    const [isAnswer, setIsAnswer] = useState(false)
    
    return (
        <section key={id} className='question'>
            <header>
                <h4>{title}</h4>
                { 
                    !isAnswer ? 
                    <button
                        onClick={() => setIsAnswer(true)}
                        className='btn'
                    >
                        <AiOutlinePlus />
                    </button> : 
                    <button
                        onClick={() => setIsAnswer(false)}
                        className='btn'
                    >
                        <AiOutlineMinus />
                    </button> 
                }
            </header>
            <p>{isAnswer && info}</p>
        </section>
    )
}
export default SingleQuestion