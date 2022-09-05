import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AuthContext } from '../context/AuthProvider';
import Modal from './modal';
import { useState } from 'react';
import Login from './modal/Login';

export default function Navbar({userloggedIn}) {
  const [ IsOpen, setIsOpen ] = useState(false);
  const [ DropdownOpen, setDropdownOpen ] = useState(false); 
  const {Auth} = useContext(AuthContext);
  const ModalHandler = () => {
    setIsOpen(true);
  }

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
        {!userloggedIn ? (
            <ul>
                <li>
                    <span className="fw-bold pointer" onClick={ModalHandler}>Login</span>
                    <Modal open={IsOpen} onClose={() => setIsOpen(false)}><Login /></Modal>
                </li>
            </ul>
        ) : (
            <>
                <ul>
                    <div onClick={() => setDropdownOpen(!DropdownOpen)}>
                        <AccountCircleIcon sx={{fontSize: 'x-large'}}/>
                        lool
                        {Auth.user}
                        <ArrowDropDownIcon sx={{marginLeft: '-5px'}}/>
                    </div>
                    <ul>
                        <li>Account</li>
                        <li>Favorites</li>
                        <li>Logout</li>
                    </ul>
                </ul>
            </>
            )
        }
    </nav>
  )
}
