import React from 'react';

export default ({ time }) => {
  return (
    <div className='fixed fixed top-0 right-0 m-2 z-50'>
      {time}
      <style jsx>{`
        div {
          font-family: 'Courier', Courier, monospace;
          font-weight: normal;
          font-size: 0.6em;
          color: #e0e0e0;
        }
      `}</style>
    </div>
  )
} 