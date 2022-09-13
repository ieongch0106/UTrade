import { Checkbox } from '@mui/material';
import React, { useEffect } from 'react'

export default function Buy() {
  const label = { inputProps: { 'aria-label': 'Checkbox' } };

  const locations = [
    { value: 'on-campus', label: 'On Campus' },
    { value: 'off-campus', label: 'Off Campus' }
  ]
  
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
          <li><Checkbox />On Campus</li>
          <li><Checkbox />Off Campus</li>
        </ul>
        <ul>
          <h3>CONDITION</h3>
          <li><Checkbox />New</li>
          <li><Checkbox />Open box</li>
          <li><Checkbox />Reconditioned</li>
          <li><Checkbox />Used</li>
          <li><Checkbox />Other</li>
        </ul>
      </div>
      <div className='section'>
        items
      </div>
    </div>
  )
}
