import React from 'react'

export default function Button(props) {
    const sizes = [
        {
            fontSize: 'medium',
            height: '2rem',
            width: '10rem',
        },
        {
            fontSize: 'large',
            height: '3rem',
            width: '20rem',
        },
        {
            fontSize: 'x-large',
            height: '5rem',
            width: '20rem',
        }
    ]
    const style = (size) => {
        switch(size) {
            case 'sm':
                return sizes[0];
            case 'md':
                return sizes[1];
            case 'lg':
                return sizes[2];
            default:
                return sizes[1];
        }
    }        
  return (
    <button style={style(props.size)}>{props.value}</button>
  )
}