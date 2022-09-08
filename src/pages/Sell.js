import React, { useState } from 'react'
import { Input } from '../styles/Input.style'
import Select from 'react-select';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function Sell() {
  const [Other, SetOther] = useState(null);
  const categories = [
    { value: 'clothing-accessories', label: '👕 👠 👜 Clothing, Shoes & Accessories' },
    { value: 'home-garden', label: '🏡 🌼 Home & Garden' },
    { value: 'electronics', label: '📱 💻 Electronics' },
    { value: 'family', label: '🍼 🧸 Family & Kids' },
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
    { value: 'for-parts', label: 'For parts' },
    { value: 'other', label: 'Other' },
  ]
  
  const conditionHandler = (e) => {
    if (e !== null) {
      return e.value === 'other' ? 
      SetOther(<p>Describe the condition of your item below<br /><Input sty="sell"/><br /></p>) : 
      SetOther(null);
    }
  }

  const selectStyle = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: "none",
      border: state.isFocused && "2px solid var(--primary)"
    }),
  }

  const mediaHandler = () => {
    
  }

  return (
    <form className='sell'>
      <div className='text-center'>Item for Sale</div>
      <Input sty="sell" placeholder='What are you selling' />
      <br /><br />
      <Input type="text" sty="sell" placeholder='Price' />
      <br /><br />
      <Select
        options={categories}
        placeholder='Select a Category'
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
        placeholder='Condition of your item'
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
      <textarea placeholder='Describe your item (optional)'/>
      Photos of your item:
      <div className='sell-media' onClick={()=> mediaHandler}>
        <AddPhotoAlternateIcon sx={{fontSize: '60px'}}/>
        <br />
        + 10 Photos
      </div>
      <input />
    </form>
  )
}