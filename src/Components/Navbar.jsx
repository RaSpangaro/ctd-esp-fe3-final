import React from 'react'
import { Link } from 'react-router-dom'
import ContextProvider from './utils/global.context'
import { useContextGlobal } from '../Components/utils/global.context'



const Navbar = () => {

  const { dispatch , theme } = useContextGlobal(ContextProvider);

  return (
    <nav  className="nav-bar" id={theme.theme}>
      <ul className="links-navbar">
        <li><Link to="/home" className='link'>HOME</Link></li>
        <li><Link to="/contact" className='link'>CONTACT</Link></li>
        <li><Link to="/favs" className='link'>FAVS</Link></li>
      </ul>
      <button className="btn-theme" onClick={() => dispatch({ type: "theme" })}>
        Change theme
        </button>
    </nav>
  )
}

export default Navbar