import React from 'react';
import { format } from 'date-fns';
import { Helmet } from 'react-helmet';
import Slide from './slide';

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
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { dateTime, currentSlide, aspectPreview } = this.state;
    const { slides, _frontmatter: frontmatter } = this.props;

    const slideMarkup = slides.map((slide, i) => 
      <Slide key={i} pageNum={i + 1} current={currentSlide} slide={slide}/>
    );
    const aspectPreviewClass = aspectPreview ? 'border-2 border-black' : ''; 

    return (
      <div id='deck-root' className='flex justify-center items-center h-full w-full xl:text-3xl lg:text-lg md:text-base sm:text-xs'>
        <Helmet>
          {frontmatter.title && <title>{frontmatter.title}</title>}
        </Helmet>
        <div id='header'>
          <small className='small fixed top-0 left-0 m-2'>{frontmatter.title}</small>
          <small className='small fixed top-0 right-0 m-2'>{dateTime}</small>
          <small className='small fixed bottom-0 right-0 m-2'>{currentSlide}/{slides.length}</small>
        </div>
        <div id='slide-frame' className='w-full h-full xl:p-32 sm:p-4 flex items-center justify-center'>
          <div className={`aspect-16-9 ${aspectPreviewClass}`}>
            <div className='aspect-content'>
              {slideMarkup}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Deck;