import React from 'react';

export default ({ src }) => {
  return (
    <div className='w-full h-full p-4'>
      <iframe src={src}
        className='w-full h-full shadow-inner'
        frameborder='0' 
        allowfullscreen='' 
        aria-hidden='false' 
        tabindex='0'>
      </iframe>
    </div>
  )
} 