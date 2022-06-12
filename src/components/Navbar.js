import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='nav'>
        <ul>
            <li>
                <a href='/'>Home</a>
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
        <ul>
            <li className='sign_in'>
                <a href='/SignIn'>Sign In</a>
            </li>
        </ul>
    </nav>
  )
}
