import React, { useState } from 'react';
import data from './data';
function App() {
  const [value, setValue] = useState(0);
  const [loremData, setLoremData] = useState([]);
  
  const generateResult = (e) => {
    e.preventDefault()
    if(value == 8) {
      setLoremData(data)
    } else {
      const newData = data.slice(0, value)
      setLoremData(newData)
    }
  };

  return (
    <main>
      <section>
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form className='lorem-form'>
          <label htmlFor='lorem'>Paragraph:</label>
          <input 
            name='lorem' 
            id='lorem' 
            type='number' 
            min='1' 
            max='8'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className='btn' onClick={generateResult}>Generate</button>
        </form>
      </section>
      <section className='section-center'>
        <ul>
          {loremData.map((text, index, arr) => {
            const id = index
            return(
              <li key={id} className='result'>{text}</li>
            )
          })}
        </ul>
      </section>
    </main>
  )
}

export default App;
