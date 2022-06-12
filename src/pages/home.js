import React from 'react';
import UTrade from '../images/UTrade Transparent.png';
import logo from '../images/logo.png';
import './home.css'
import { useNavigate } from "react-router-dom";

const divlogo = {
  'backgroundColor': 'black',
  'display': 'flex',
  'justify-content': 'center',
};

export default function Home(props) {
  const navigate = useNavigate();

  return (
    (
      <>
        <div style={divlogo}>
          <a href='/'>
            <img src={logo} alt='UTrade' width={'125px'} onClick={() => navigate("/")} />
          </a>  
        </div>
        <div className='container'>
          <div style={{display: 'flex' ,justifyContent: 'center'}}>
            <h1>Welcome to <img src={UTrade} alt='UTrade' width={'125px'} onClick={() => navigate("/")} /></h1>
          </div>
          <div style={{textAlign: 'center'}}>
            UTrade is a web application that allows you to buy and sell items online.
            <br />
            You can search for items you want to buy or sell, and then you can contact the seller to make a deal.
            More random things
            <br />
            More random things
            <br />
            More random things
          </div>
        </div>
        <div className='home_page'>
          <button className='buying_button'>Buy Here</button>
          {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
          <button className='selling_button'>Sell Here</button>
          {/* <p>hello world</p> */}
        </div>
        <div>
          {/* <p>hello world</p> */}
        </div>
      </>
    )
  )
}