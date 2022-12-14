import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

import axios from 'axios'

// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const useFetch = (url) => {
    const [cocktails, setCocktails] = useState([])

    const fetcher = useCallback( async () => {
      // const response = await fetch(url)
      // const data = await response.json()
       try {
        const response = await axios.get(url)
        setCocktails(response.data)
      } catch (error) {
        console.log(error.response)
      }
    }, [url] )

    useEffect(() => {
      fetcher()
    }, [url, fetcher])
    return cocktails
  }


  return <AppContext.Provider 
    value={{
      useFetch
    }}
  >
      {children}
    </AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }