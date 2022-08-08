import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  if(localStorage.getItem('list')) {
    return JSON.parse(localStorage.getItem('list'));
  }else {
    return [];
  }
};


function App() {
  const [value, setValue] = useState();
  const [list, setList] = useState(getLocalStorage())
  const [submitText, setSubmitText] = useState('Submit');
  const [isEdit, setIsEdit] = useState(false);
  const [itemToBeEdited, setItemToBeEdited] = useState({})
  const [itemId, setItemId] = useState('')
  const [isAlert, setIsAlert] = useState(false);
  const [alert, setAlert] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(value) {
      if(!isEdit) {
        const id = new Date().getTime().toString();
        setList((prevList) => {
          return [...prevList, {'id': id, 'input': value}]
        });
        setIsAlert(true);
        setAlert(<p className='alert-success'>Item Added Successfully</p>);
        setValue('');
      };
      if(isEdit) {
        const newList = list.map(item => {
          return item.id === itemToBeEdited.id ? item = {'id': item.id, 'input': value} : item = item
        });
        setList(() => {
          return newList
        });
        setIsAlert(true);
        setAlert(<p className='alert-success'>Item Edited Successfully</p>);
        setValue('');
      }
    }

    
  }

const editItem = (id) => {
  const item = list.find(item => item.id === id)
  setValue(item.input)
  setItemToBeEdited(() => {
    return item
  })
  setIsEdit(() => {
    return true
  })
  setSubmitText(() => {
    return 'Edit'
  })
};

const deleteItem = (id) => {
  const newList= list.filter(item => item.id !== id);
  setList(() => {
    return newList
  });
  setIsAlert(true);
  setAlert(<p className='alert-danger'>Item Deleted Successfully</p>);
};

const clearAll = () => {
  setList(() => []);
   setIsAlert(true);
  setAlert(<p className='alert-danger'>All Items Deleted Successfully</p>);
}

useEffect(() => {
  const timeout = setTimeout(() => {
    setIsAlert(false)
  }, 3000);
  return () => {
    clearTimeout(timeout)
  }
});

useEffect(() => {
  localStorage.setItem('list', JSON.stringify(list))
});

  return <>
    <section className='section-center'>
      {list.length === 0 ? <p style={{textAlign: 'center'}}>NO GROCERY ITEM REGISTRED</p> : ''}
      {isAlert && <Alert alert={alert} />}
      <div className='grocery-form'>
        <h3>Grocery Bud</h3>
        <form className='form-control'>
          <label htmlFor='grocery'></label>
          <input
            name='grocery' 
            id='grocery'
            className='grocery'
            placeholder='e.g. egg'
            value={value}
            onChange={(e) => setValue(e.target.value)} 
          />
          <button 
            className='submit-btn' 
            type='submit' 
            onClick={(e) => handleSubmit(e)}
          >
            {submitText}
          </button>
        </form>
        <List
          list={list}
          editItem={editItem} 
          deleteItem={deleteItem}
        />
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button 
          style={{padding: '5px 20px', backgroundColor: 'hsl(360, 67%, 44%)', color: 'white', border: 'none'}}
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>
    </section>
  </>
}

export default App