import React from 'react';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet';
import { globalHistory } from '@reach/router';
import Slide from './slide';
import SwipeControls from './swipeControls';
import Counter from './counter';

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

  getLocation = () => {
    const { hash } = globalHistory.location;
    return hash;
  }

  handleClick = (e) => {
    //this.advance(1);
  }

  handleSwipe = (e) => {
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

    window.location.hash = nextSlide;
  }

  componentDidMount() {
    // check for slide number and set
    const hash = this.getLocation().replace('#', '');
    this.setState({
      currentSlide: parseInt(hash)
    })

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

    // const config = {
    //   trackTouch: true
    // }

    const slideMarkup = slides.map((slide, i) => 
      <Slide key={i} pageNum={i + 1} current={currentSlide} slide={slide}/>
    );
    const aspectPreviewClass = aspectPreview ? 'border-2 border-black' : ''; 

    return (
      <div id='deck-root' className={`h-full w-full xl:text-3xl lg:text-lg md:text-base sm:text-xs`}>
        <Helmet>
          {frontmatter.title && <title>{frontmatter.title}</title>}
        </Helmet>
        {/* <div className='gradient-bg'/> */}
        <div id='header'>
          <small className='small fixed top-0 left-0 m-2 text-white'>{frontmatter.title}</small>
          <small className='small fixed top-0 right-0 m-2 text-white'>{dateTime}</small>
          <Counter text={`${currentSlide}/${slides.length}`} />
          <div className="fixed bottom-0 left-0 m-4 z-50">
            <a href="https://www1.nyc.gov/site/planning/index.page" title="DCP">
              <img className="w-16" src="https://raw.githubusercontent.com/NYCPlanning/dcp-logo/master/dcp_logo.svg" alt="DCP"/>
            </a>
          </div>
        </div>
        <div id='slide-frame' className='w-full h-full flex items-center justify-center'>
          <div className={`aspect-16-9 ${aspectPreviewClass}`}>
            <div className='aspect-content p-8'>
              {slideMarkup}
            </div>
          </div>
        </div>
        <SwipeControls advance={this.advance}/>
        <style global jsx>{`
          #deck-root {
            position: fixed;
            top: 0;
            left: 0;
            font-size: 1.5em;
          }

          p, ul, ol {
            color: var(--contrast-blue-darkest);
            list-style-type: disc;
            margin-bottom: 1.15rem;
            max-width: 30em;
          }

          p + ul {
            margin-bottom: 2em;
          }
          
          h1, h2, h3, h4, h5 {
            color: var(--contrast-blue-darkest);
            margin: 2.75rem 0 1.05rem;
            font-weight: normal;
            line-height: 1.15;
          }

          h2, h3, h4, h5 {
            font-weight: bold;
          }

          .aspect-16-9 {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%;
          }
          
          .aspect-content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }

          .gatsby-resp-image-wrapper {
            margin: 0;
            padding: 0;
          }
          
          .gatsby-resp-image-link {
            display: block;
            height: auto;
            width: auto;
            background: none;
          }
          
          .gatsby-resp-image-background-image {
            min-width: 600px;
            object-fit: contain;
            box-shadow: none;
            backround: none;
          }
                    
          canvas:focus {
            outline: none;
          }
        `}</style>
      </div>
    )
  }
}

export default Deck;

// .gatsby-resp-image-wrapper, .gatsby-resp-image-link {
//   height: 100%;
//   width: 100%;
//   background: none;
// }

// .gatsby-resp-image-image, .gatsby-resp-image-background-image {
//   object-fit: contain;
//   box-shadow: none;
//   backround: none;
// }