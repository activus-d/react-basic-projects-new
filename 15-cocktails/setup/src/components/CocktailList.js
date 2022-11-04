import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = ({cocktails}) => {
  console.log(cocktails)
  return (
    <div className="cocktails-center">
      {cocktails.map(cocktail => {
        return (
          <Cocktail cocktail={cocktail}/>
        )
      })}
    </div>
  )
}

export default CocktailList
