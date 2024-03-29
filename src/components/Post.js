import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Button } from '../styles/Button.style';

export default function Post() {
  const [ Loading, setLoading ] = useState(true);
  const [Post, setPost] = useState({});  
  const param = useParams();
  const id = param.id;

  const fetchPost = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/post/get?id=${id}`);
      setPost(res.data);
    } catch (err) {
        console.log(err);
        setPost({});
    }
  }

  function timeSince(date) {
      var seconds = Math.floor((new Date() - date) / 1000);
    
      var interval = seconds / 31536000;
    
      if (interval > 1) {
        return Math.floor(interval) + " years";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + " months";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + " days";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) + " hours";
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) + " minutes";
      }
      return Math.floor(seconds) + " seconds";
  }

  useEffect(() => {
    fetchPost();
    setLoading(false);
  }, []);
  
  return (
    <>
      {Loading ?
      <div className='top-50 start-50 position-absolute'>
        <CircularProgress sx={{color: "var(--primary)"}} size={60}/>
      </div> : 
      <>
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
                <h5>Posted about  {timeSince(new Date(Post.date))} ago {Post.location}</h5>
                condition: {Post.condition}
                <br /><br />
                <div className='d-flex justify-content-between'>
                  <Button color="white" style={{width: '150px'}}>Save</Button>
                  <Button color="white" style={{width: '150px'}}>Share</Button>
                </div>
            </div>
        </div>
      </>
      }
    </>
  )
}
