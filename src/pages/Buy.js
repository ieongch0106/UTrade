import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Post from '../components/Post';
import SearchBar from '../components/SearchBar';
import logo from '../images/UTrade Transparent.png';

export default function Buy() {
  const navigate = useNavigate();
  const [scrollUp, setScrollUp] = useState(null);
  const searchRef = useRef();
  
  const items = [
    {id: 1, image: 'image1', name: 'item1', price: '$100', location: 'On Campus'},
    {id: 2, image: 'image2', name: 'item2', price: '$250', location: 'Sunderland, MA'},
    {id: 3, image: 'image3', name: 'item3', price: '$8000', location: 'Amherst, MA'},
    {id: 4, image: 'image4', name: 'item4', price: '$10,000', location: 'South Deerfield, MA'},
    {id: 5, image: 'image5', name: 'item5', price: '$420', location: 'Springfield, MA'},
    {id: 6, image: 'image6', name: 'item6', price: '$69', location: 'Boston, MA'},
    {id: 7, image: 'image7', name: 'item7', price: '$25', location: 'Cambridge, MA'},
    {id: 8, image: 'image8', name: 'item8', price: '$111', location: 'Mountain View, CA'},
    {id: 9, image: 'image9', name: 'item9', price: '$23', location: 'Kirkland, WA'},
    {id: 10, image: 'image10', name: 'item10', price: '$80', location: 'Seattle, WA'},
    {id: 11, image: 'image11', name: 'item11', price: '$555', location: 'Bellevue, WA'},
    {id: 12, image: 'image12', name: 'item12', price: '$90', location: 'Austin, TX'},
    {id: 13, image: 'image13', name: 'item13', price: '$600', location: 'Honolulu, HI'},
    {id: 14, image: 'image14', name: 'item14', price: '$480', location: 'Methuen, MA'},
  ]

  useEffect(() => {
    const threshold = 20;
    let lastScrollY = window.pageYOffset;
    let ticking = false;
  
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (scrollY === 0) {
        searchRef.current.style.backgroundColor = 'transparent';
      } else {
        searchRef.current.style.backgroundColor = 'var(--black)';
      }

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollUp(scrollY < lastScrollY ? true : false);
      scrollUp ? searchRef.current.className = 'search-bar slide-down':
                 searchRef.current.className = 'search-bar slide-up'
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };
    
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", onScroll);
  
    return () => window.removeEventListener("scroll", onScroll);  
  }, [scrollUp]);

  useEffect(() => {
    // fetch items from database
  }, []);
  
  const postHandler = (item) => {
    navigate(`/post/${item.id}`, {
    })
  }

  return (
    <>
      <div className='search-bar' ref={searchRef}><SearchBar width="26%"/></div>
      <div className='logo'>
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </div>
      <div className='container'>
        <div className='sidebar'>
          <ul>
            <h5>CATEGORIES</h5>
            <li>Clothing, Shoes & Accessories (2)</li>
            <li>Home & Garden</li>
            <li>Electronics</li>
            <li>Service & Volunteering</li>
            <li>Family & Kids</li>
            <li>Sports & Outdoors</li>
            <li>Hobbies</li>
            <li>Housing & Rental</li>
            <li>Vehicles</li>
            <li>Miscellaneous</li>
          </ul>
          <ul>
            <h5>PRICE</h5>
            <li><input type="range" /></li>
          </ul>
          <ul>
            <h5>LOCATION</h5>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label={<Typography className='label'>On Campus</Typography>} />
              <FormControlLabel
                control={<Checkbox />}
                label={<Typography className='label'>Off Campus</Typography>} />
            </FormGroup>
          </ul>
          <ul>
            <h5>CONDITION</h5>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label={<Typography className='label'>New</Typography>} />
              <FormControlLabel
                control={<Checkbox />}
                label={<Typography className='label'>Open</Typography>} />
              <FormControlLabel
                control={<Checkbox />}
                label={<Typography className='label'>Reconditioned</Typography>} />
              <FormControlLabel
                control={<Checkbox />}
                label={<Typography className='label'>Used</Typography>} />
              <FormControlLabel
                control={<Checkbox />}
                label={<Typography className='label'>Other</Typography>} />
            </FormGroup>
          </ul>
        </div>
        <div className='section'>
          {items.map((item, index) => {
            return (
              <div key={index} onClick={() => postHandler(item)}>
                <div className='post-title'>
                  <img src='' alt={item.name}/>
                  <h6>{item.name}</h6>
                </div>
                <div>{item.price}</div>
                <div>{item.location}</div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
