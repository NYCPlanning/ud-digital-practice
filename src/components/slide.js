import React from 'react'
// import Context from '../context'
// import useDeck from '../hooks/use-deck'
// import useSwipe from '../hooks/use-swipe'
// import { modes } from '../constants'

export const Slide = ({ pageNum, current, slide, ...props }) => {
  // const outer = useDeck()
  // const swipeProps = useSwipe()
  // const context = {
  //   ...outer,
  //   index,
  //   preview,
  // }

  const visibility = pageNum === current ? '' : 'hidden';

  return (
    <div className={`h-full w-full ${visibility}`}>
      {slide}
    </div>
  )
}

export default Slide