import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../styles/Button.style'

export default function Navbar() {

  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/buy'>Buy</NavLink>
            </li>
            <li>
                <NavLink to='/sell'>Sell</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink to='/login'>Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}
