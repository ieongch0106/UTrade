import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material';
import React, { useEffect } from 'react'

export default function Buy() {

  const items = [
    {image: 'image1', name: 'item1', price: '$100', location: 'On Campus'},
    {image: 'image2', name: 'item2', price: '$250', location: 'Sunderland, MA'},
    {image: 'image3', name: 'item3', price: '$8000', location: 'Amherst, MA'},
    {image: 'image4', name: 'item4', price: '$10,000', location: 'South Deerfield, MA'},
    {image: 'image5', name: 'item5', price: '$420', location: 'Springfield, MA'},
    {image: 'image6', name: 'item6', price: '$69', location: 'Boston, MA'},
    {image: 'image7', name: 'item7', price: '$25', location: 'Cambridge, MA'},
    {image: 'image8', name: 'item8', price: '$111', location: 'Mountain View, CA'},
    {image: 'image9', name: 'item9', price: '$23', location: 'Kirkland, WA'},
    {image: 'image10', name: 'item10', price: '$80', location: 'Seattle, WA'},
    {image: 'image11', name: 'item11', price: '$555', location: 'Bellevue, WA'},
    {image: 'image12', name: 'item12', price: '$90', location: 'Austin, TX'},
    {image: 'image13', name: 'item13', price: '$600', location: 'Honolulu, HI'},
    {image: 'image14', name: 'item14', price: '$480', location: 'Methuen, MA'},
  ]
  
  const postHandler = () => {
    
  }
  
  useEffect(() => {
    // fetch items from database
  }, []);

  return (
    <div className='container'>
      <div className='sidebar'>
        <ul>
          <h3>CATEGORIES</h3>
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
          <h3>PRICE</h3>
          <li><input type="range" /></li>
        </ul>
        <ul>
          <h3>LOCATION</h3>
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
          <h3>CONDITION</h3>
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
            <div key={index} onClick={() => postHandler()}>
              <img src='' alt={item.name}/>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div>{item.location}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
