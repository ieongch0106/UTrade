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
                <NavLink to='/buy'>Buy</NavLink>
            </li>
            <li>
                <NavLink to='/sell'>Sell</NavLink>
            </li>
            <li>
                <NavLink to='/about'>Who We Are</NavLink>
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
