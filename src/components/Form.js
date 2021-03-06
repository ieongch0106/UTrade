import React, { useEffect } from 'react'
import logo from "../images/UTrade black.png"

export default function Form(props) {

  const formstyle = {
    'height': '85vh',
    'width': `${props.width}`,
    'margin': 'auto',
    'marginTop': '30px',
    'paddingTop': "2.5rem",
    'paddingLeft': `${props.paddingLeft}`,
    // 'paddingRight': `${props.paddingRightt}`,
    'textAlign': `${props.textAlign}`,
    'background': 'white',
    'boxShadow': 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
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
