import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({cocktail, getDrink}) => {
  return (
    <div className="cocktail">
      <div className=''>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </div>
      <div className='cocktail-footer'>
        <h2>{cocktail.strDrink}</h2>
        <h5>{cocktail.strGlass}</h5>
        <p>{cocktail.strAlcoholic}</p>
        <Link to={`/cocktail/${cocktail.strDrink}`}>
          <button 
            className='btn-primary btn-details' 
            >
              Details
            </button>
        </Link>
      </div>
    </div>
  )
}

export default Cocktail
