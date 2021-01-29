import React from "react";
import { useSwipeable } from "react-swipeable";

const SwipeControls = ({ advance }) => {
  const handleSwipe = (e) => {
    switch(e.dir) {
      case 'Left':
      case 'Up':
        advance(-1);
        break;
      case 'Right':
      case 'Down':
      default:
        advance(1);
        break;
    }
  }
  
  const handlers = useSwipeable({ 
    onTap: (e) => handleSwipe(e),
    onSwiped: (e) => handleSwipe(e),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div id='swipecontrols' className='xl:invisible lg:invisible fixed bottom-0 right-0 w-20 h-12' {...handlers} >
      <style jsx>{`
        #swipecontrols {
          border-left: 2px solid #e0e0e0;
          border-top: 2px solid #e0e0e0;
          border-radius: 2em 0em 0em 0em;
        }
      `}</style>
    </div>

  );
};

export default SwipeControls;
