import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

  return (
    <nav className='nav' style={{background: 'white'}}>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/Buy'>Buy</NavLink>
            </li>
            <li>
                <NavLink to='/Sell'>Sell</NavLink>
            </li>
            <li>
                <NavLink to='/About'>Who We Are</NavLink>
            </li>
        </ul>
        <ul>
            <li className='sign_in'>
                <NavLink to='/SignIn'>Sign In</NavLink>
            </li>
        </ul>
    </nav>
  )
}
