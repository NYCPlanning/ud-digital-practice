import React from 'react';
import { Swipeable } from 'react-swipeable';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet';
import Slide from './slide';
import SwipeControls from './swipeControls';

const dateFormatted = () => format(new Date(), 'MM/dd/yyyy hh:mm');

class Deck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: dateFormatted(),
      currentSlide: 1,
      aspectPreview: false,
    };
  }

  handleClick = (e) => {
    //this.advance(1);
  }

  handleSwipe = (e) => {
    console.log(e)
    switch(e.dir) {
      case 'Left':
      case 'Up':
        this.advance(-1);
        break;
      default:
        break;
    }
  }

  handleKeyDown = (e) => {
    // for future handling of cmd + ..., nest switches in if/else blocks 
    // with shiftKey/altKey etc as conditions 
    switch(e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        this.advance(1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        this.advance(-1);
        break;
      case 'a':
        this.setState({
          aspectPreview: !this.state.aspectPreview
        })
        break;
      default:
        break;
    }
  }

  advance = (increment) => {
    const { slides } = this.props;
    const prevSlide = this.state.currentSlide;
    let nextSlide = prevSlide + increment;

    if (nextSlide === slides.length + 1) {
      nextSlide = 1;
    } else if (nextSlide === 0) {
      nextSlide = slides.length;
    }

    this.setState({
      currentSlide: nextSlide
    })
  }

  componentDidMount() {
    // auto-advance current time
    setInterval(() => {
      this.setState({
        dateTime : dateFormatted()
      })
    }, 60000)

    // register event listeners
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('click', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('click', this.handleClick);
  }

  render() {
    const { dateTime, currentSlide, aspectPreview } = this.state;
    const { slides, _frontmatter: frontmatter } = this.props;

    const config = {
      trackTouch: true
    }

    const slideMarkup = slides.map((slide, i) => 
      <Slide key={i} pageNum={i + 1} current={currentSlide} slide={slide}/>
    );
    const aspectPreviewClass = aspectPreview ? 'border-2 border-black' : ''; 

    return (
      <div id='deck-root' className='flex justify-center items-center h-full w-full xl:text-3xl lg:text-lg md:text-base sm:text-xs'>
        <Helmet>
          {frontmatter.title && <title>{frontmatter.title}</title>}
        </Helmet>
        <div className='gradient-bg'/>
        <div id='header'>
          <small className='small fixed top-0 left-0 m-2 text-white'>{frontmatter.title}</small>
          <small className='small fixed top-0 right-0 m-2 text-white'>{dateTime}</small>
          <small className='small fixed bottom-0 right-0 m-2'>{currentSlide}/{slides.length}</small>
          <div className="fixed bottom-0 left-0 m-4">
            <a href="https://www1.nyc.gov/site/planning/index.page" title="DCP">
              <img className="w-16" src="https://raw.githubusercontent.com/NYCPlanning/dcp-logo/master/dcp_logo.svg" alt="DCP"/>
            </a>
          </div>
        </div>
        <div id='slide-frame' className='w-full h-full xl:p-32 sm:p-4 flex items-center justify-center'>
          <div className={`aspect-16-9 ${aspectPreviewClass}`}>
            <div className='aspect-content'>
              {slideMarkup}
            </div>
          </div>
        </div>
        <SwipeControls advance={this.advance}/>
      </div>
    )
  }
}

export default Deck;