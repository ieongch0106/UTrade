import React, { useEffect, useState } from 'react'

export default function CanvasPreview({ img, crop }) {
    const [image, SetImage] = useState(null);
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
    <div>
      <div>hi</div>
      <canvas height={crop.height} width={crop.width}></canvas>
    </div>
  )
}
