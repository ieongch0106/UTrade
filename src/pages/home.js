import React, { useEffect, useState } from 'react';
import { Button } from '../styles/Button.style';
import SearchBar from '../components/SearchBar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

export default function Home() {
  const [ Loading, setLoading ] = useState(true);
  const [Posts, setPosts] = useState([]);  

  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:3001/posts/get?limit=true');
      setPosts(res.data);
    } catch (err) {
      console.log(err);
      setPosts([]);
    }
  }
  
  const postHandler = (post) => {
    navigate(`/post/${post.id}`)
  }

  const renderPosts = 
    <div className='home-container'>
      <div className='posts-container'>
        {Posts.map((post, index) => {
          return (
            <div key={index} onClick={() => postHandler(post)}>
              <div className='post-title'>
                <img src='' alt={post.name}/>
                <h6>{post.item}</h6>
              </div>
              <div>${post.price}</div>
              <div>{post.location}</div>
            </div>
          )
      })}
      </div>;
    </div>

  useEffect(() => {
    fetchPosts();
    setLoading(false);
  }, [])

  return (
      <>
        {Loading ?
          <div className='top-50 start-50 position-absolute'>
            <CircularProgress sx={{color: "var(--primary)"}} size={60}/>
          </div> : 
          <>
            <div className='home-search'>
                <h3>The #1 Site To Buy And Sell At UMass Amherst</h3>
                <SearchBar placeholder="search for anything..."/>
                <h6>nothing on your mind?&nbsp;&nbsp;
                <Link to="/buy">
                  <Button sty="link" color="white">Look around</Button>
                </Link>
                </h6>
            </div>
            {renderPosts}
          </>
        }
      </>
  )
}