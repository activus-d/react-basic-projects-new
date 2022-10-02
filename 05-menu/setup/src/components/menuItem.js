import React from 'react'

export default function MenuItem({id, img, title, price, desc}) {
    return (
        <section className='menu-item' key={id}>
            <img 
                src={img}
                className="photo"
            />
            <div className='item-info'>
                <header>
                    <h4>{title}</h4>
                    <span>{price}</span>
                </header>
                <p className='item-text'>{desc}</p>
            </div>
        </section>
    )
}