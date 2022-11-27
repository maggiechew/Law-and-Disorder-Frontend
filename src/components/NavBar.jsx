import React, {useState} from 'react'
import Hamburgler from './Hamburgler'
import './NavBar.css'

const NavBar = () => {
  const [menuClosed, setMenuClosed] = useState(false);

  return (
    <nav id='navbar'>
    {menuClosed &&
      <ul className='nav-links'>
        <li>
          <a>Crime Map</a>
        </li>
        <li>
          <a>Forum (TBA)</a>
        </li>
        <li>
          <a>Additional Resources</a>
        </li>
        <li>
          <a>About Us</a>
        </li>
      </ul>}
      <Hamburgler setMenuClosed={setMenuClosed}/>
    </nav>
  )
}

export default NavBar
