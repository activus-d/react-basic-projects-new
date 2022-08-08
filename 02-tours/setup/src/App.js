import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Heading from './Heading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const fetchTours = async() => {
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setIsLoading(false)
      setTours(tours)
    }
    catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])
  
  
  const removeTour = (id) => {
    const currentTourId = id
    const newTours = tours.filter(tour => tour.id !== currentTourId)
    setTours(newTours)
  }

  if(isLoading) {
    return (
      <Loading />
    )
  }

  if(tours.length === 0) {
    return (
      <main>
        <h1>NO TOURS</h1>
        <button onClick={() => fetchTours()} className='btn'>Refresh</button>
      </main>
    )
  }

  if(tours) {
    return (
      <main >
        <Tours data={tours}
         removeTour={removeTour}
      />
      </main>
    )
  }

}

  

export default App




                //   <button className='btn' 
                //   style={{display: 'inline', margin: '0'}}
                //   onClick={() => {
                //     return !isTry ? (setIsTry(true), setInfoBtnTxt('read more...')) : (setIsTry(false), setInfoBtnTxt('see less'))
                //   }}
                // >
                //   {infoBtnTxt}
                // </button>