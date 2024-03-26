import React from 'react'

export default function Product() {
  return (
    <div className='h-3/4 w-1/2 border-red-600 border-2'>
      <video controls className='h-full w-full'>
        <source src='../../public/EldenRing.mp4' type='video/mp4'/>
        <source src='../../public/EldenRing.webm' type='video/webm'/>
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
