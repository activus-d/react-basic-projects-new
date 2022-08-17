import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import CartContainer from './CartContainer';
import NavBar from './Nav';
import Footer from './Footer';
import LoadingPage from './LoadingPage';
import {useGlobalContext} from './context'

function App() {
  const {isLoadingPage, removeLoadingpage, fixNav} = useGlobalContext()
  // console.log(removeLoadingpage, isLoadingPage)
  useEffect(() => {
    window.addEventListener('load', removeLoadingpage)
    return () => {
      window.removeEventListener('load', removeLoadingpage)
    }
  }, [removeLoadingpage]);

  useEffect(() => {
    window.addEventListener('scroll', fixNav)
    return () => {
      window.removeEventListener('scroll', fixNav)
    }
  })

  if(isLoadingPage()) {
    return <LoadingPage />
  }
  if(!isLoadingPage()) {
    return (
    <div className=''>
      <NavBar />
      <CartContainer />
      <Footer />
    </div>
  )
}

  
}

export default App;
