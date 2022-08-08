import React from 'react';
import react, { useEffect, useState } from 'react';
import Tour from './Tour';

const url = 'https://course-api.com/react-tours-project'

const Tours = ({data, removeTour, infoButton}) => {
  // const [data, setData] = useState([]);
  // const [infoBtnTxt, setInfoBtnTxt] = useState('read more...')
  // const [isTry, setIsTry] = useState(true)

  return (
    <ul className='tour-info' style={{display: 'flex', flexDirection: 'column'}}>
      {data.map(tour => {
        const {id, image, info, name, price} = tour
        return <Tour 
                key={id} 
                image={image}
                name={name} 
                price={price}
                info={info} 
                infoButton={infoButton} 
                deleteButton={
        <button className='delete-btn'
          onClick={() => removeTour(id)}
        >
          NOT INTERESTED
        </button>
      }
        />
      })}
    </ul>
  );
};

export default Tours;
