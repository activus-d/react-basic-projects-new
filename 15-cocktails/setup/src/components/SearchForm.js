import React, { useState } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = ({setSearchItem, cocktailName}) => {

  return (
    <div className="form-control">
      <form className='search-form'>
        <label htmlFor='search'>
          Search Your Favorite Cocktail
        </label>
        <input 
          type='text'
          name="search"
          value={cocktailName}
          onChange={setSearchItem}
          className="search"
        />
      </form>
    </div>
  )
}

export default SearchForm
