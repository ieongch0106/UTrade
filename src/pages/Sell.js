import React, { useState } from 'react'
import { Input } from '../styles/Input.style'
import Select from 'react-select';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useRef } from 'react';

export default function Sell() {
  const [ Other, SetOther ] = useState(null);
  const [ OtherL, SetOtherL ] = useState(null);
  const [ Photos, SetPhotos ] = useState(10);
  const inputRef = useRef();
  const locations = [
    { value: 'on-campus', label: 'On Campus' },
    { value: 'off-campus', label: 'Off Campus' }
  ]

  const categories = [
    { value: 'clothing-shoes-accessories', label: '👕 👠 👜 Clothing, Shoes & Accessories' },
    { value: 'home-garden', label: '🏡 🌼 Home & Garden' },
    { value: 'electronics', label: '📱 💻 Electronics' },
    { value: 'service-volunteering', label: '🙋 🛎️ Service & Volunteering' },
    { value: 'family-kids', label: '🍼 🧸 Family & Kids' },
    { value: 'sports-outdoors', label: '🏀 🏈 Sports & Outdoors' },
    { value: 'hobbies', label: '🎮 🎬 Hobbies' },
    { value: 'housing', label: '🏠 🔑 Housing & Rental' },
    { value: 'vehicles', label: '🚗 🚲 Vehicles' },
    { value: 'misc', label: '🌀 Miscellaneous' },
  ]

  const conditions = [
    { value: 'new', label: 'New' },
    { value: 'open-box', label: 'Open box' },
    { value: 'reconditioned', label: 'Reconditioned' },
    { value: 'used', label: 'Used' },
    { value: 'other', label: 'Other' },
  ]
  
  const conditionHandler = (e) => {
    if (e !== null) {
      return e.value === 'other' ? 
      SetOther(<p>Describe the condition of your item below<br /><Input sty="sell"/><br /></p>) : 
      SetOther(null);
    }
  }
  const locationHandler = (e) => {
    if (e !== null) {
      return e.value === 'off-campus' ? 
      SetOtherL(<p>
        <div className='location-thingy'>
          <div className='city-drop'>
          City<Input sty="sell"/>
          </div>
          <div className='city-drop'>
            State<Input sty="sell"/>
          </div>
          {/* <div className='city-drop'>
            Zip Code<Input sty="sell"/><br />
          </div> */}
        </div>
        </p>) : 
      SetOtherL(null);
    }
  }
  
  const selectStyle = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: "none",
      border: state.isFocused && "2px solid var(--primary)"
    }),
  }

  const mediaHandler = (e) => {
    for (const file of (e.target.files)) {

    }
  }

  return (
    <form className='sell'>
      <h2 className='text-center p-3'>Item For Sale</h2>
      <Input sty="sell" placeholder='🎁 What are you selling?' />
      <br /><br />
      <Input type="text" sty="sell" placeholder='💲 Price' />
      <br /><br />
      <Select
        options={locations}
        placeholder='📍 Location'
        isSearchable
        isClearable
        onChange={(e) => locationHandler(e)}
        styles={selectStyle}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: 'rgba(128, 0, 0, 0.2)',
            primary: 'rgba(128, 0, 0, 0.8)'
          }
        })}
      />
      {OtherL}
      <br />
      <Select
        options={categories}
        placeholder='🔠 Select a Category'
        isSearchable
        isClearable
        styles={selectStyle}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: 'rgba(128, 0, 0, 0.2)',
            primary: 'rgba(128, 0, 0, 0.8)'
          }
        })}
      />
      <br />
      <Select
        options={conditions}
        placeholder="🔎 Item's Condition"
        isSearchable
        isClearable
        onChange={(e) => conditionHandler(e)}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary25: 'rgba(128, 0, 0, 0.2)',
            primary: 'rgba(128, 0, 0, 0.8)'
          }
        })}
      />
      {Other}
      <br />
      <textarea placeholder='💬 Describe your item (optional)'/>
      <p><br />🖼️ Photos of your item (optional)<br /><br /></p>
      <div className='media-list'>
        <div>
          a
        </div>
        <div>
          b
        </div>
        <div>
          c
        </div>
        <div>
          d
        </div>
        <div>
          f
        </div>
      </div>
      {/* <div className='media-list'>
        <div onClick={()=> inputRef.current.click()}>
          <AddPhotoAlternateIcon sx={{fontSize: '60px'}}/>
          <br />
          + {Photos} Photos
          <input type='file' ref={inputRef} accept="image/*" multiple onChange={(e) => mediaHandler(e)}  hidden/>
        </div>
      </div> */}
    </form>
  )
}