import React, { useEffect, useState } from 'react'
import { URLtoBlob } from '../methods/ImageConverter';

export default function CanvasPreview({ img, crop }) {
  const drawImage = async () => {
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
  }

  
  useEffect(() => {
    drawImage()
  }, [crop])

  return (
    <canvas width={img.width} height={img.height}/>
  )
}
