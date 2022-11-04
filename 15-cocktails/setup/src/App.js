import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import CocktailList from './components/CocktailList'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

import { useGlobalContext } from './context'
function App() {
  const [cocktailName, setCocktailname] = useState('')
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName
  const { useFetch } = useGlobalContext()
  const cocktails = useFetch(url)

  const setSearchItem = (e) => {
    setCocktailname(e.target.value)
  }

  if(cocktails) console.log(cocktails)
  return (
    <main className='section'>
      <SearchForm setSearchItem={setSearchItem} />
      <h1 className='section-title'>Cocktails</h1>
      {cocktails.length !== 0 && <CocktailList cocktails={cocktails.drinks} />}
    </main>
  )
  
  
}

export default App
