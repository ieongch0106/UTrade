import React, { useState } from 'react'
import { Input } from '../styles/Input.style'
import Select from 'react-select';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import CanvasPreview from '../components/CanvasPreview';

export default function Sell() {
  const Photo = useRef();
  const inputRef = useRef();
  const [Other, SetOther] = useState(null);
  const [src, setPhoto] = useState(null);
  const [crop, setCrop] = useState({
    unit: '%',
  })
  const [completedCrop, setCompletedCrop] = useState(null);

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

  const selectStyle = {
    control: (provided, state) => ({
      ...provided,
      boxShadow: "none",
      border: state.isFocused && "2px solid var(--primary)"
    }),
  }

  const mediaHandler = (e) => {
    for (const file of (e.target.files)) {
      setPhoto(URL.createObjectURL(file));
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
        options={categories}
        placeholder='📍 Location'
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
      <p><br />🖼️ Photo of your item (optional)<br /><br /></p>
      <div>
        <div>
          {src ?
            <ReactCrop
              crop={crop}
              minWidth={200}
              minHeight={200}
              maxWidth={200}
              maxHeight={200}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
            >
              <img src={src} alt="item" ref={Photo}/>
            </ReactCrop> :
            <AddPhotoAlternateIcon onClick={() => inputRef.current.click()} />
          }
          <input 
            type="file"
            accept='image/*'
            ref={inputRef}
            onChange={(e) => mediaHandler(e)}
            hidden
          />
        </div>
        <div>
          {completedCrop && 
            <CanvasPreview
              img={Photo.current}
              crop={completedCrop}
            />
          }
        </div>
      </div>
    </form>
  )
}