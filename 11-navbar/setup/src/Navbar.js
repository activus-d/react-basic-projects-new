import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
import iconMenu from './iconMenu.svg'

const Navbar = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const linksRef = useRef(null);
  const mobileIconRef = useRef(null);

  const handleNavOptions = (e) => {
    // e.preventDefault();
    !isMobileScreen ? setIsMobileScreen(() => {return true}) : setIsMobileScreen(() => {return false})
  };

  useEffect(() => {
    const linksContainer = linksRef.current;
    const mobileIcon = mobileIconRef.current;
    if(isMobileScreen) {
      linksContainer.style.height = 'auto';
      linksContainer.style.transition = '0.5s';
      mobileIcon.style.transform = 'rotate(90deg)';
    }else {
      linksContainer.style.height = '0';
      mobileIcon.style.transform = 'rotate(0deg)'
    }
  })

  return <nav className='nav-center'>
    <img src={logo} />
    <img src={iconMenu} className='nav-toggle' ref={mobileIconRef} onClick={handleNavOptions}/>
    <ul className='links-container links' ref={linksRef}>
      {links.map(link => {
        const {id, url, text} = link
        return <li key={id}><a href={url}>{text}</a></li>
      })}
    </ul>
    <ul className='social-icons'>
      {social.map(element => {
        const {id, url, icon} = element
        return <li key={id}><a href={url}>{icon}</a></li>
      })}
    </ul>
  </nav>
}

export default Navbar
