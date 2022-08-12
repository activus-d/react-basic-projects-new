import logo from './logo.svg';
import './App.css';
import Body from './Body';
import Nav from './Nav';

function App() {
  return (
    <div className='py-3 px-7 bg-mainBg bg-175% bg-no-repeat bg-[#f1f5f8] h-screen w-screen overflow-hidden md:px-16 md:bg-100%'>
      <Nav />
      {/* <MenuIcon /> */}
      <Body />
    </div>
  )
}

export default App;
