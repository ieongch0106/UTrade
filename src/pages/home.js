import React from 'react';
import UTrade from '../images/UTrade Transparent.png';
import logo from '../images/UTrade.png';
import background from '../images/background.png';
import './home.css'
import { useNavigate } from "react-router-dom";

const divlogo = {
  'backgroundColor': 'maroon',
  'display': 'flex',
  'justify-content': 'center',
};

export default function Home() {
  const navigate = useNavigate();

  return (
      <>
        <div className='home-container' style={{backgroundImage : `url(${background})`}}>
          <div style={divlogo}>
              <img src={logo} alt='UTrade' width={'125px'} onClick={() => navigate("/")} />
          </div>
          <div>
            <div style={{display: 'flex' ,justifyContent: 'center'}}>
              <h1>Welcome to <img src={UTrade} alt='UTrade' width={'125px'} onClick={() => navigate("/")} /></h1>
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
            <button>Buy Here</button>
            <button>Sell Here</button>
          </div>
          </div>
        </div>
      </>
  )
}