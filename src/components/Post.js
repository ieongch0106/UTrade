import React, { useEffect } from 'react'

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
                Ask
                <br />
                Save Share
            </div>
        </div>
    </div>
  )
}
