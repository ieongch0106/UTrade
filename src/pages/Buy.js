import { Checkbox, CircularProgress, FormControlLabel, FormGroup, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CanvasPreview from '../components/CanvasPreview';
import SearchBar from '../components/SearchBar';
import logo from '../images/1.png';
import Unavailable from '../images/Unavailable.jpg';
import { URLtoBlob } from '../methods/ImageConverter';

export default function Buy() {
  const [ Loading, setLoading ] = useState(true);
  const [ scrollUp, setScrollUp ] = useState(null);
  const [ fetched, setFetched ] = useState(false);
  const [ posts, setPosts ] = useState([]);

  const navigate = useNavigate();
  const searchRef = useRef();
  const logoRef = useRef();
  
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
      if (scrollUp) {
        searchRef.current.className = 'search-bar slide-down';
        logoRef.current.className = 'logo logo-to-black';
      } else {
        searchRef.current.className = 'search-bar slide-up'
        logoRef.current.className = 'logo logo-to-maroon';
      }
                 
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

  const fetchPosts = async () => {
    try {
      const res = await axios.get('http://localhost:3001/posts/get');
      setPosts(res.data);
    } catch (err) {
      console.log(err)
    }
  }

  const imageHandler = () => {
    posts.forEach(async (post) => {
      const image = document.createElement("img");
      if (post.photo !== undefined) {
        const blob = await URLtoBlob(post.photo);
        image.src = blob;
        image.alt = post.name || '';
        post.image = image;
      }
    })
  }
  
  const postHandler = (post) => {
    navigate(`/post/${post.id}`)
  }

  const renderPosts = posts.map((post, index) =>  {
      return (
        <div key={index} onClick={() => postHandler(post)}>
        <div className='post-title'>
          {post.image ? 
          <CanvasPreview
            img={post.image}
            crop={post.thumbnail}
          /> : 
            <img src={Unavailable} alt={post.name || ''} />
          }
          <h6>{post.name}</h6>
        </div>
        <div>${post.price}</div>
        <div>{post.location}</div>
        </div>
      )
  });

  if (posts.length !== 0 && !fetched) {
    setFetched(true);
    imageHandler();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    // fetch items from database
    fetchPosts();
  }, []);

  return (
    <>
      {Loading ?
          <div className='top-50 start-50 position-absolute'>
            <CircularProgress sx={{color: "var(--primary)"}} size={60}/>
          </div> : (
      <>
        <div className='search-bar' ref={searchRef}><SearchBar width="26%"/></div>
        <div className='logo' ref={logoRef}>
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>
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
          <div className='posts-container'>
            {!Loading && renderPosts}
          </div>
        </div>
      </>
      )
    }
    </>
  )
}
