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
      minWidth={800}
      minHeight={800}
      maxHeight={800}
      maxWidth={800}
      onChange={c => setCrop(c)}
    >
    <img src={utrade} />
  </ReactCrop>
  )
}

