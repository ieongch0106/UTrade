import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { AuthContext } from '../context/AuthProvider';
import Modal from './modal';
import { useState } from 'react';
import Login from './modal/Login';
import Register from './modal/Register';
import FaceIcon from '@mui/icons-material/Face';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar({userloggedIn}) {
  const [ IsOpen, setIsOpen ] = useState(false);
  const [ DropdownOpen, setDropdownOpen ] = useState(false); 
  const [ Content, SetContent ] = useState(<></>);
  let {Auth} = useContext(AuthContext);

  const ModalHandler = (e) => {
    setIsOpen(true);
    e.target.id === "login_button" ? SetContent(<Login />) : SetContent(<Register />);
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
                    <span className="fw-bold pointer" onClick={(e) => ModalHandler(e)} id="login_button">Login</span>
                    <span onClick={(e) => ModalHandler(e)} id="join_button" hidden>Sign up</span>
                    <Modal open={IsOpen} onClose={() => setIsOpen(false)}>{Content}</Modal>
                </li>
            </ul>
        ) : (
            <>
                <ul>
                    <div onClick={() => setDropdownOpen(!DropdownOpen)}>
                        <AccountCircleIcon sx={{fontSize: 'x-large'}}/>
                        {Auth.user}
                        <ArrowDropDownIcon sx={{marginLeft: '-5px'}}/>
                    </div>
                    <ul className={DropdownOpen ? "dropdown-content-open" : "hidden"}>
                        <li><FaceIcon sx={{color: 'var(--primary)'}}/>Account</li>
                        <li><BookmarkIcon sx={{color: 'var(--primary)'}} />Your Watchlist</li>
                        <li onClick={() => {userloggedIn = false; localStorage.clear(); window.location.reload()}}><LogoutIcon sx={{color: 'var(--primary)'}} />Log out</li>
                    </ul>
                </ul>
            </>
            )
        }
    </nav>
  )
}
