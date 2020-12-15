import React from 'react'

export const Slide = ({ pageNum, current, slide, ...props }) => {
  const visibility = pageNum === current ? '' : 'hidden';

  return (
    <div className={`h-full w-full ${visibility} flex flex-col justify-center`}>
      {slide}
    </div>
  )
}

export default Slide