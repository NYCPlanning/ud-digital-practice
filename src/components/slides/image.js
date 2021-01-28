import React from 'react'
import { useSpring, a } from 'react-spring'

const falloff = (x, y) => { 
  const w = window.innerWidth;
  const h = window.innerHeight;
  const center = { x: w/2, y: h/2 };
  return {
    x: 1 - (Math.abs( center.x - x ) / center.x),
    y: 1 - (Math.abs( center.y - y ) / center.y)
  }
}
const calc = (x, y) => {
  const f = falloff(x, y);
  return [(window.innerWidth / 2 - x) * f.x, (window.innerHeight / 2 - y) * f.y, 2.5]
}
const trans = (x, y, s) => (`perspective(600px) translate(${x}px, ${y}px) scale(${s})`)

export default ({ path, alt, caption, mode, children }) => {
  const modeClass = ( mode === 'center' ) ? ' items-center ' : ' items-left '
  const [props, set] = useSpring(() => ({
        xys: [0, 0, 1.75], 
        config: { 
          mass: 10, 
          tension: 350, 
          friction: 80 
        } 
      }
    )
  )
  
  let contents = children
  console.log(React.isValidElement(children))
  console.log(React.Children.count(children))
  console.log(React.Children.toArray().length)

  if ( !React.isValidElement(children) ) {
    contents = <img
      className='w-full h-full'
      src={path} 
      alt={alt}
    />
  }

  if ( mode === 'interactive-zoom' ) {
    return (
      <div className='w-full h-full'>
        <a.div className='card absolute w-full h-full flex flex-col items-center justify-center'
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })} onMouseLeave={() => set({ xys: [0, 0, 1.75] })} 
          style={{ transform: props.xys.interpolate(trans) }}
        >
          {contents}
        </a.div>
        <style jsx global>{`

        `}</style>
      </div>
    )
  } else {
    console.log('returning default')
    return (
      <div className={`relative h-full w-full p-8 flex flex-col align-center justify-center ${modeClass}`}>
        {contents}
        <span className='text-xs'>{caption}</span>
      </div>
    )
  }
}
