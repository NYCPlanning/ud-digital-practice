import React from 'react';

export default ({ title }) => {
  return (
    <div className='fixed top-0 left-0 m-2 z-50'>
      {title}
      <style jsx>{`
        div {
          font-weight: normal;
          font-size: 0.6em;
          color: #e0e0e0;
        }
      `}</style>
    </div>
  )
} 