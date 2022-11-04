import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({cocktail}) => {
  return (
    <div className="cocktail">
      <div className=''>
        <img src={cocktail.strDrinkThumb} />
      </div>
      <div className='cocktail-footer'>
        <h2>{cocktail.strDrink}</h2>
        <h5>{cocktail.strGlass}</h5>
        <p>{cocktail.strAlcoholic}</p>
        <button className='btn-primary btn-details '>Details</button>
      </div>
    </div>
  )
}

export default Cocktail
