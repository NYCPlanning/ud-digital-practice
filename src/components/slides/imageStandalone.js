import React from 'react'

const ImageStandalone = ({ src, alt, caption }) => {
  // const modeClass = ( mode === 'center' ) ? ' items-center ' : ' items-left '
    const modeClass = 'items-center'

    return (
      <div className={`relative h-full w-full p-8 flex flex-col align-center justify-center ${modeClass}`}>
        <img src={src} alt={alt}/>
        <span className='text-xs'>{caption}</span>
      </div>
    )
}

export { ImageStandalone }
