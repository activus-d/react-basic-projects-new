import react, {useState} from 'react'
import React from 'react'

const Tour = (prop) => {
  const [infoBtnTxt, setInfoBtnTxt] = useState('read more...')
  const [isReadMore, setIsReadMore] = useState(false)
  const {image, info, name, price, infoButton, deleteButton} = prop

  return (
      <li className='single-tour'  style={{paddingBottom: '1.5rem'}}>
        <img src={image}></img>
        <div style={{display: 'flex', justifyContent: 'space-between', padding: '1rem'}}>
          <h4>{name}</h4>
          <span className='tour-price'>{price}</span>
        </div>
        <p style={{padding: '0 1rem'}}>
          {isReadMore ? info : info.substring(0, 200)}
          <button onClick={() => {
            return !isReadMore ? (setIsReadMore(true), setInfoBtnTxt('see less...')) : (setIsReadMore(false), setInfoBtnTxt('read more...'))
          }}>{infoBtnTxt}</button>
        </p>
        {deleteButton}
      </li>
  );
};

export default Tour;
