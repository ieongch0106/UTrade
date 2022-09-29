import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button } from '../styles/Button.style';

export default function Post() {
  const [Post, setPost] = useState({});  
  const param = useParams();
  const id = param.id;

  const fetchPost = async () => {
    try {
      const res = await axios.get(`http://localhost:3002/post/get?id=${id}`);
      setPost(res.data);
    } catch (err) {
        console.log(err);
        setPost({});
    }
  }
  
  useEffect(() => {
    fetchPost();
  }, []);
  
  return (
    <div className=''>
        <div className='post'>
            <div className='post-info'>
                <div className='post-image'>
                    <img src='' alt='img'/>
                </div>
                <div className='post-detail'>
                    <h4>Description</h4>
                    {Post.description}
                </div>
            </div>
            <div className='seller-info'>
                <h4>{Post.name}</h4>
                <h2>${Post.price}</h2>
                condition: {Post.condition}
                <br /><br />
                <div className='d-flex justify-content-between'>
                  <Button color="white" style={{width: '150px'}}>Save</Button>
                  <Button color="white" style={{width: '150px'}}>Share</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
