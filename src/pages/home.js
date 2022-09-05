import React from 'react';
import { Button } from '../styles/Button.style';
import SearchBar from '../components/SearchBar';

export default function Home() {

  return (
      <>
        <div className='home-search'>
            <h2>The #1 Site To Buy And Sell At UMass Amherst</h2>
            <SearchBar placeholder="search for anything..."/>
            <h4>nothing on your mind?&nbsp;&nbsp;<Button sty="link" bg="primary" color='white'>Look around</Button></h4>
        </div>
      </>
  )
}