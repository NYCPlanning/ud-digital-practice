import React from 'react'

export default ({ scale, children }) => {
  // const modeClass = ( mode === 'center' ) ? ' items-center ' : ' items-left '
    const modeClass = 'items-center'

    return (
      <div className={`slide-table relative h-full w-full p-8 flex flex-col align-center justify-center ${modeClass}`}>
        {children}
      </div>
    )
}
