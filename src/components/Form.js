import React, { useEffect } from 'react'
import logo from "../images/UTrade black.png"

export default function Form(props) {
  const formstyle = {
    'height': '85vh',
    'width': '30vw',
    'margin': 'auto',
    'marginTop': '30px',
    'paddingTop': '2.5rem',
    'border': '2.5px solid black',
    'textAlign': 'center',
    'background': 'white'
  };

  useEffect(() => {
    document.body.style.backgroundColor = 'maroon';
  }, []);
  
  return (
    <form style={formstyle}>
      <img src={logo} alt='UTrade' width={'150px'}></img>
      <h2>{props.name}</h2>
      {props.content}
    </form>
  )
}
