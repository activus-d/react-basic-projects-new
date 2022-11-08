import React from 'react'
import Cocktail from './Cocktail'

const CocktailList = ({cocktails}) => {
  return (
    <div className="cocktails-center">
      {cocktails.map(cocktail => {
        return (
          <div key={cocktail.strDrink}>
            <Cocktail cocktail={cocktail} />
          </div>
        )
      })}
    </div>
  )
}

export default CocktailList
