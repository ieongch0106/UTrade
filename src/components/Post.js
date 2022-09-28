import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from '../styles/Button.style';

export default function Post({ id }) {
  const [Post, setPost] = useState({});  

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:3002/posts/get', id);
      setPost(res.data[0]);
    } catch (err) {
        console.log(err);
        setPost({});
    }
  }
  
  useEffect(() => {
    fetchPosts();
  }, []);
  
  console.log(Post);
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
