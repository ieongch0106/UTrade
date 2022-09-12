import React, {useState} from 'react'
import { Link } from "react-router-dom";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import utrade from '../images/UTrade black.png'

export default function Buy() {
  const [crop, setCrop] = useState({
    unit: '%',
    width: 50,
    height: 50,
    x: 25,
    y: 25
  })

  return (
    <ReactCrop
      crop={crop}
      minWidth={50}
      minHeight={50}
      maxHeight={50}
      maxWidth={50}
      onChange={c => setCrop(c)}
    >
    <img src={utrade} />
  </ReactCrop>
  )
}

