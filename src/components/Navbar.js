import React from 'react'
import { NavLink } from 'react-router-dom'

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
            <li style={{display: 'flex', paddingRight: '20px'}}>
                <NavLink to='/login'>Sign In</NavLink>
            </li>
        </ul>
    </nav>
  )
}
