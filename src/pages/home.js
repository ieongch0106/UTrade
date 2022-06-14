import React from 'react';
import UTrade from '../images/UTrade Transparent.png';
import logo from '../images/UTrade.png';
import { Button } from '../components/Components'
import './home.css'
import { Link } from "react-router-dom";

const divlogo = {
  'backgroundColor': 'maroon',
  'display': 'flex',
  'justifyContent': 'center',
};

export default function Home() {

  return (
      <>
        <div className='home-container'>
          <div style={divlogo}>
              <Link to='/'><img src={logo} alt='UTrade' width={'125px'} /></Link>
          </div>
          <div>
            <div style={{display: 'flex' ,justifyContent: 'center'}}>
              <h1>Welcome to <Link to='/'><img src={UTrade} alt='UTrade' width={'125px'} /></Link></h1>
            </div>
            <div style={{textAlign: 'center'}}>
              <span style={{backgroundColor: 'black', color: 'white'}}>
              UTrade is a web application that allows you to buy and sell items online.
              <br />
              You can search for items you want to buy or sell, and then you can contact the seller to make a deal.
              More random things
              <br />
              More random things
              <br />
              More random things
              </span>
            </div>
          <div className='home-page'>
            <Link to="/buy">
              <Button size='lg' value='Buy Here'></Button>
            </Link>
            <Link to="/sell">
              <Button size='lg' value='Sell Here'></Button>
            </Link>
          </div>
          </div>
        </div>
      </>
  )
}