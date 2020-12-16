import React from 'react';

export default ({ children, src }) => {
  console.log(src)
  return (
    <div className="w-full h-full">
      {children}
    </div>
  )
} 