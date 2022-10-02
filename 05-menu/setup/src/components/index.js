import React, { useState } from 'react';
import menu from '../data';
import MenuItem from './menuItem';

const Categories = () => {
  const [items, setItems] = useState(menu)

  const handleFilter = (e) => {
    const category = e.currentTarget.textContent.toLowerCase()
    if(category === 'all') {
      setItems(menu)
    }else {
      const newItems = menu.filter(item => item.category === category)
      setItems(newItems)
    }
  }

  return (
    <div>
      <header>
        <div className='title'>
          <h1>Our Menu</h1>
          <hr 
            className='underline'
          />
        </div>
        <div className='btn-container'>
          <button
            className='filter-btn'
            onClick={handleFilter}
          >
            All
          </button>
          <button
            className='filter-btn'
            onClick={handleFilter}
          >
            Breakfast
          </button>
          <button
            className='filter-btn'
            onClick={handleFilter}
          >
            Lunch
          </button>
          <button
            className='filter-btn'
            onClick={handleFilter}
          >
            Shakes
          </button>
        </div>
      </header>
      <main className='section-center'>
        {items.map(item => {
          const {id, title, category, price, img, desc} = item
          return (
            <MenuItem 
              id={id}
              title={title}
              price={price}
              img={img}
              desc={desc}
            />
          )
        })}
      </main>
    </div>
  )
};

export default Categories;
