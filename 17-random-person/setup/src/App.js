import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

function App() {
  const [people, setPeople] = useState([]);
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')

  const fetchData = async () => {
    try {
      const res = await axios(url)
      const data = res.data.results[0]
      const {
        name: { first, last }
      } = data
      const {email, phone} =  data
      const {
        dob: { age },
      } =  data
      const {
        picture: { large },
      } =  data
      const {
        street: {number, name},
      } =  data.location
      const {
        login: {password}
      } = data

      const newPerson = {
        name: first + ' ' + last,
        email,
        phone,
        age,
        picture: large,
        street: number + ' ,' + name,
        password
      }
      setPeople(newPerson)
      console.log(people)
    } catch (error) {
      console.log(error)
    }
  };

  const fetcher = useEffect(() => {
    fetchData()
  }, []);
  
  if(people.length < 1) {
    return <h1>Loading...</h1>
  }

  const showDetails = (e) => {
    setStart(e.currentTarget.dataset.title)
    setEnd(e.currentTarget.dataset.content)
    console.log(e.currentTarget.dataset)
  }

  return<>
    <main>
      <div className='block bcg-black'></div>
      <div className='block section-center container'>
        <img 
          src= {(people && people.picture) || defaultImage}
        />
        <p className='user-title'>{start}</p>
        <p className='user-value'>{end}</p>
        <div className='values-list'>
          <FaUser 
            data-title='My name is'
            data-content={people.name}
            className='icon'
            onMouseOver={showDetails}/>
          <FaEnvelopeOpen 
            data-title='My email is'
            data-content={people.email}
            className='icon'
            onMouseOver={showDetails}/>
          <FaCalendarTimes
            data-title='My age is'
            data-content={people.age} 
            className='icon'
            onMouseOver={showDetails}/>
          <FaMap
            data-title='My street is'
            data-content={people.street} 
            className='icon'
            onMouseOver={showDetails}/>
          <FaPhone 
            data-title='My phone number is'
            data-content={people.phone}
            className='icon'
            onMouseOver={showDetails}/>
          <FaLock 
            data-title='My password is'
            data-content={people.password}
            className='icon'
            onMouseOver={showDetails}/>
        </div>
        <button
          className='btn'
          onClick={fetchData}
        >
          Random
        </button>
      </div>
    </main>
  </>
}

export default App
