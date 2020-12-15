import React from 'react';

export default ({ text }) => {
  return (
    <div className='fixed bottom-0 right-0 m-2 z-50'>
      {text}
      <style jsx>{`
        div {
          font-family: 'Courier', Courier, monospace;
          font-weight: normal;
          font-size: 0.6em;
        }
      `}</style>
    </div>
  )
} 