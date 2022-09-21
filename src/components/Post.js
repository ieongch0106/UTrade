import React, { useEffect } from 'react'
import { Button } from '../styles/Button.style';

export default function Post({ id }) {
    
  useEffect(() => {
    // axios get id
  }) 
  return (
    <div className='container'>
        <div className='post'>
            <div className='post-info'>
                <div className='post-image'>
                    <img src='' alt='img'/>
                </div>
                <div className='post-detail'>
                    item description
                </div>
            </div>
            <div className='seller-info'>
                seller info
                <br />
                product name:
                <br />
                price
                <br />
                condition:
                <br />
                phone
                <br />
                <Button color="white">Save</Button> 
                Share
            </div>
        </div>
    </div>
  )
}
