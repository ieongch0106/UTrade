import React from 'react';
import UTrade from '../images/UTrade.png';

const UTradeStyle = {
  'backgroundColor': 'maroon',
  'display': 'flex',
  'justify-content': 'center',
};

export default function Home() {
  return (
    <div style={UTradeStyle}>
      <img src={UTrade} alt='UTrade' width={'20%'}/>
    </div>
  )
}
