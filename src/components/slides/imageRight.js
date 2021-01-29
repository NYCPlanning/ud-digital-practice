import React from 'react';
import sortElements from '../../utils/sortElements';

export default ({ children }) => {
  const {text, images} = sortElements(children);

  return (
    <div className='grid grid-cols-2 gap-8 h-full'>
      <div className='flex flex-grow justify-center flex-col'>{text}</div>
      <div className='h-full flex items-center justify-center col-start-2'>{images}</div>
    </div>
  )
}