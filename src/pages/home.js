import React, { useEffect } from 'react';
import { Button } from '../styles/Button.style';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';

export default function Home() {
  useEffect(() => {
    
  })
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