import React from 'react';

export default ({ src, mode }) => {

  if ( mode === 'full' ) return (
    <div className='fixed top-0 left-0 w-screen h-screen'>
      <iframe src={src}
        className='w-full h-full'
        frameborder='0' 
        allowfullscreen='' 
        aria-hidden='false' 
        tabindex='0'>
      </iframe>
    </div>
  )
  else return (
    <div className='w-full h-full p-4'>
      <iframe src={src}
        className='w-full h-full'
        frameborder='0' 
        allowfullscreen='' 
        aria-hidden='false' 
        tabindex='0'>
      </iframe>
    </div>
  )
} 