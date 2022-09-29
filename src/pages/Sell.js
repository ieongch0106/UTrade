import React, { useState } from 'react'
import { Input } from '../styles/Input.style'
import Select from 'react-select';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import CanvasPreview from '../components/CanvasPreview';
import { Button } from '../styles/Button.style';
import Modal from '../components/modal';
import axios from 'axios';

export default function Sell() {
  const Photo = useRef();
  const thumbnail = useRef();
  const inputRef = useRef();
  const [Other, SetOther] = useState(null);
  const [OtherL, SetOtherL] = useState(null);
  const [image, setImage] = useState();
  const [src, setPhoto] = useState(null);
  const [crop, setCrop] = useState({
    unit: 'px',
    width: 250,
    height: 250
  })
  const [completedCrop, setCompletedCrop] = useState(null);
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

  const reader = (file) => {
    var reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    }
    reader.readAsDataURL(file);
  }

  const mediaHandler = (e) => {
    for (const file of (e.target.files)) {
      reader(file);
      setPhoto(URL.createObjectURL(file));
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    const { name, price, location, category, condition, description } = e.target;
    console.log(image)
    console.log(completedCrop)
    const data = { 
      username: JSON.parse(sessionStorage.getItem('token')).username,
      name: name.value,
      price: price.value,
      location: location.value,
      category: 123,
      condition: 123,
      description: 123,
      photo: image,
      thumbnail: completedCrop
    }

    // try {
    //   const res = await axios.post('http://localhost:3002/post/create', data);
    //   console.log(res.data);
    // } catch (err) {
    //   console.log(err);
    // }
  }

  return (
    <form className='sell mt-4 mb-4' onSubmit={onSubmit}>
      <h2 className='text-center pb-5'>Item For Sale</h2>
      <Input name='name' sty="sell" placeholder='🎁 What are you selling?' required/>
      <br /><br />
      <Input name='price' type="text" sty="sell" placeholder='💲 Price' required/>
      <br /><br />
      <Select
        name='location'
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
        name='category'
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
        name='condition'
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
      <textarea name="description" placeholder='💬 Describe your item'/>
      <p><br />🖼️ Photo of your item <br /><br /></p>
      <div name='thumb' className='media-list'>
        <div>
          {src ?
            <ReactCrop
              crop={crop}
              aspect={1 / 1}
              onChange={(c) => setCrop(c)}
              onComplete={(c) => setCompletedCrop(c)}
            >
              <img src={src} alt="item" ref={Photo}/>
            </ReactCrop> :
            <div className='media-upload' onClick={() => inputRef.current.click()}>
              <AddPhotoAlternateIcon />
              Add Thumbnail
            </div>
          }
          {completedCrop && 
            <div ref={thumbnail}>
              <CanvasPreview
                img={Photo.current}
                crop={completedCrop}
                />
              <br />
            </div>
          }
        </div>
        <div className='d-flex gap-3 justify-content-center mt-4'>
          {src && <Button sty="link" bg="transparent" color="primary">Choose another image</Button>}
          <Button color="white" >Continue</Button><br />
          <input 
            type="file"
            accept='image/*'
            ref={inputRef}
            onChange={(e) => mediaHandler(e)}
            hidden
          />
          {/* <Modal open={IsOpen} onClose={() => setIsOpen(false)}>{Content}</Modal> */}
        </div>
      </div>
    </form>
  )
}