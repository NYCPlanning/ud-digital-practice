import React from 'react'

export default ({ caption, children, mode }) => {
  const modeClass = ( mode === 'center' ) ? ' items-center ' : ' items-left '

  return (
    <div className={`relative h-full w-full p-8 flex flex-col align-center justify-center ${modeClass}`}>
      {children}
      <span className='text-xs'>{caption}</span>
    </div>
  )
}
