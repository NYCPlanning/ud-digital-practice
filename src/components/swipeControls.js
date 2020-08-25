import React from "react";
import { useSwipeable } from "react-swipeable";

const SwipeControls = ({ advance }) => {
  const handleSwipe = (e) => {
    switch(e.dir) {
      case 'Right':
      case 'Down':
        advance(1);
        break;
      case 'Left':
      case 'Up':
        advance(-1);
        break;
      default:
        break;
    }
  }
  
  const handlers = useSwipeable({ 
    onSwiped: (e) => handleSwipe(e),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className='xl:invisible lg:invisible fixed w-48 h-8 border-solid border-2 border-b-0 border-black bottom-0' id='swipecontrols' {...handlers}/>
  );
};

export default SwipeControls;
