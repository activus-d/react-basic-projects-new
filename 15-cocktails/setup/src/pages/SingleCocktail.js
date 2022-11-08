import React from 'react'
import Loading from '../components/Loading'
import { useParams } from 'react-router-dom'
// const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

import { useGlobalContext } from '../context'


const SingleCocktail = () => {
  const { useFetch } = useGlobalContext()

  const { strDrink } = useParams()
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + strDrink
  const cocktail = useFetch(url)

  if(cocktail.length === 0) {
    return <Loading />
  }

  if (cocktail) {
    return (
      <section className='section cocktail-section'>
        <a className='btn btn-primary' href='/'>BACK HOME</a>
        <h2 className='section-title'>{cocktail.drinks[0].strDrink}</h2>
        <div className='drink'>
          <img src={cocktail.drinks[0].strDrinkThumb} alt={cocktail.strDrink} />
          <div className='drink-info'>
            <p>
              <span className='drink-data'>Name:</span>
              <span>{cocktail.drinks[0].strDrink}</span>
            </p>
            <p>
              <span className='drink-data'>Category:</span>
              <span>{cocktail.drinks[0].strCategory}</span>
            </p>
            <p>
              <span className='drink-data'>Info:</span>
              <span>{cocktail.drinks[0].strAlcoholic}</span>
            </p>
            <p>
              <span className='drink-data'>Glass:</span>
              <span>{cocktail.drinks[0].strGlass}</span>
            </p>
            <p>
              <span className='drink-data'>Instructions:</span>
              <span>{cocktail.drinks[0].strInstructions}</span>
            </p>
            <p>
              <span className='drink-data'>Ingredients:</span>
              <span>{`${cocktail.drinks[0].strIngredient1}${cocktail.drinks[0].strIngredient2 ? ', ' + cocktail.drinks[0].strIngredient2 : ''}${cocktail.drinks[0].strIngredient3 ? ', ' + cocktail.drinks[0].strIngredient1 : ''}`}</span>
            </p>
          </div>
        </div>
      </section>
    )
  }
}

export default SingleCocktail
