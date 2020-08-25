import React from 'react';
import sortElements from '../../utils/sortElements';

export default ({ children }) => {
  const {text, images} = sortElements(children);

  return (
    <div className='grid grid-rows-6 gap-4 h-full'>
      <div className='h-full flex items-center justify-center row-span-5'>{images}</div>
      <div className='flex flex-grow justify-center row-start-6'>{text}</div>
    </div>
  )
}