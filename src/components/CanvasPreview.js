import React, { useRef, useState } from 'react'

export default function CanvasPreview({ src, crop }) {
  const Ref = useRef();
//   const [image, SetImage] = useState(null);
//   const scaleX = src.naturalwidth / src.width;
//   const scaleY = src.naturalheight / src.height;
//   canvas.width = crop.width;
//   canvas.height = crop.height;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('context not found');
  }

  ctx.drawImage(
    src,
    0,
    0,
  );

  return (
    <div>
      <div>hi</div>
      <canvas width={200} height={200}></canvas>
    </div>
  )
}
