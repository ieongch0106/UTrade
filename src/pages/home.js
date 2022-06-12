import React from 'react';
import UTrade from '../images/UTrade.png';
import './home.css'
import Button from '../components/Button';

const UTradeStyle = {
  'backgroundColor': 'maroon',
  'display': 'flex',
  'justify-content': 'center',
};

export default function Home() {
  return (
    (
      <div>
        <div style={UTradeStyle}>
          <img src={UTrade} alt='UTrade' width={'20%'}/>
        </div>
        <div className='welcome_to_utrade'>
          <h1>Welcome to UTrade</h1>
        </div>
        <div className='home_text'>
          <p>
            UTrade is a web application that allows you to buy and sell items online.
            <br></br>
            You can search for items you want to buy or sell, and then you can contact the seller to make a deal.
            <br></br>
            More random things
            <br></br>
            More random things
            <br></br>
            More random things
          </p>
        </div>
        <Button>Buy Here</Button>
      </div>
    
    
    )
  )
}
