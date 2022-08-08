import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

const List = ({list, editItem, deleteItem}) => {
  return (
    <ul className='grocery-container'>
      {list.map(item => {
        const{id, input} = item
        return (
          <li key={id} className='grocery-item'>
              <p>{input}</p>
            <div>
              <button 
                onClick={() => editItem(id)} 
                className='edit-btn'
              >
                <FaEdit />
              </button>
              <button 
                onClick={() => deleteItem(id)} 
                className='delete-btn'
              >
                <FaTrash />
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default List
