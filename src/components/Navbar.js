import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='nav'>
        <ul>
            <li>
                <a href='/Home'>Home</a>
            </li>
            <li>
                <a href='/Buy'>Buy</a>
            </li>
            <li>
                <a href='/Sell'>Sell</a>
            </li>
            <li>
                <a href='/About'>Who We Are</a>
            </li>
        </ul>
    </nav>
  )
}
