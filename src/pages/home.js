import React, { useEffect, useState } from 'react';
import { Button } from '../styles/Button.style';
import SearchBar from '../components/SearchBar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [Posts, setPosts] = useState([]);  

  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:3002/posts/get?limit=true');
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

  useEffect(() => {
    fetchPosts(); 
  }, [])

  return (
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
  )
}