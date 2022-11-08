import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main className='error-page section'>
      <div className='error-container'>
        <h2>Oops! It's A Dead End</h2>
        <Link to='/'>
          <button className='btn-primary'>
            BACK HOME
          </button>
        </Link>
      </div>
    </main>
  )
}

export default Error
