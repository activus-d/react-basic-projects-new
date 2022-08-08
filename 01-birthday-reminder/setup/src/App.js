import React, { useState } from 'react';
import react, { useRef } from 'react'
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data)
  const personRef = useRef(null)

  const deletePerson = (person) => {
    const clickId = +(person.target.dataset.id);
    const newPeople = people.filter(person => person.id !== clickId);
    setPeople((prevPersons) => {
      return newPeople
    })
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List person={people.map(person => {
          const {id, name, age, image} = person
          return (
            <li key={id} className='person' ref={personRef}>
              <img src={image}/>
              <div>
                <h4 >{name}</h4>
                <p>{age}</p>
              </div>
              <button data-id={id} className='btn' onClick={(person) => deletePerson(person)}>delete</button>
            </li>
          )
        })}/>
        <button className='btn' onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App;
