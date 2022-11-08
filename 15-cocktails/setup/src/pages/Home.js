import React, { useState } from 'react'

import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import Loading from '../components/Loading'

import { useGlobalContext } from '../context'

const Home = () => {
  const [cocktailName, setCocktailname] = useState('')
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName
  const { useFetch } = useGlobalContext()
  const cocktails = useFetch(url)

  const setSearchItem = (e) => {
    setCocktailname(e.target.value)
  }
  return (
    <div>
      <main className='section'>
        <SearchForm setSearchItem={setSearchItem} />
        <h1 className='section-title'>Cocktails</h1>
        {cocktails.length !== 0 ? <CocktailList cocktails={cocktails.drinks} /> : <Loading />}
      </main>
    </div>
  )
}

export default Home
