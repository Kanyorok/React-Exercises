import React from 'react'
import { NavLink } from 'react-router-dom';
import "../App.css";

const Menu = () => {
  return (
    <ul className='menubar'>
        <li>
            <NavLink to="/">Map&Filter</NavLink>
        </li>
        <li>
            <NavLink to="/states">States</NavLink>
        </li>

    </ul>
  )
}

export default Menu