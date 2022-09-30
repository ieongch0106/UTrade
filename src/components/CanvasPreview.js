import React, { useEffect, useState } from 'react'

export default function CanvasPreview({ img, crop }) {
  const [ image, setImage ] = useState(null);

  const drawImage = () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      throw new Error('context not found');
    }

    const scaleX = img.naturalWidth / img.width;
    const scaleY = img.naturalHeight / img.height;
    ctx.imageSmoothingQuality = 'high';
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      img,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      img.width,
      img.height
    );

    const base64Image = canvas.toDataURL("image/jpeg", 1);
    return base64Image
  }

  
  useEffect(() => {
      const fetchPhoto = async () => {
        try {
          await fetch(drawImage())
          .then(res => res.blob())
          .then(blob => setImage(URL.createObjectURL(blob)))
        } catch (err) {
          console.log(err);
        }
      }
      fetchPhoto();
    }, [crop])

  return (
    <canvas width={img.width} height={img.height}/>
  )
}
