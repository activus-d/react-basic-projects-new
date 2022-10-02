import React from 'react'
import { AiOutlineForward } from 'react-icons/ai'

export default function Job({id, title, company, dates, duties}) {
    return (
        <section className='job-info' key={id}>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <h5 className='job-date'>{dates}</h5>
            <ul>
                {
                duties && duties.map((item, index, arr) => {
                    return (
                        <li className='job-desc' key={index}>
                            <AiOutlineForward className='job-icon'/>
                            <p>{item}</p>
                        </li>
                    )
                })
            }
            </ul>
        </section>
    )
}