import React, { useState, useEffect } from 'react'

import { questions } from '../data'
import SingleQuestion from './singleQuestion';

const Questions = () => {
    
    
    return (
        <main>
            <section className='container'>
                <h3>Questions And Answers About Login </h3>
                <section>
                    {questions.map(question => {
                        const { id, title, info } = question
                        return (
                            <SingleQuestion 
                                id={id}
                                title={title}
                                info={info}
                            />
                        )
                    })}
                </section>
            </section>
        </main>
    )
};

export default Questions