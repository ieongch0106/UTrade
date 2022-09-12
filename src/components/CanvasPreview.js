import React, { useEffect } from 'react'

export default function CanvasPreview({ img, crop }) {
    useEffect(() => {
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
          crop.width,
          crop.height
        );
      }
      drawImage();
    }, [crop])

  return (
      <canvas 
        width={crop.width}
        height={crop.height}
      />
  )
}
