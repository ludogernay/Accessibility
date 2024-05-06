import React from 'react'

export default function Product() {
  return (
    <div className='w-3/5 mx-auto pt-5'>
      <video controls>
        <source src='/EldenRing.mp4' type='video/mp4'/>
        <source src='/EldenRing.webm' type='video/webm'/>
        <track src='/EldenRing-en.vtt' kind='subtitles' srcLang='en' label='English' default/>
        <track src='/EldenRing-fr.vtt' kind='subtitles' srcLang='fr' label='Français'/>
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
