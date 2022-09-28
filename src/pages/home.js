import React, { useEffect, useState } from 'react';
import { Button } from '../styles/Button.style';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [Posts, setPosts] = useState([]);  

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:3002/posts/get?limit=3');
      setPosts(res.data);
    } catch (err) {
      console.log(err);
      setPosts([]);
    }
  }
  
  useEffect(() => {
    fetchPosts(); 
  }, [])
  console.log(Posts)

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
      </>
  )
}