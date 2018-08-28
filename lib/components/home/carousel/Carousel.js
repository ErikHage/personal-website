import React, {PropTypes} from 'react';

const aboutMe = require('../../../../public/images/on_a_boat.jpg');
const hobbies = require('../../../../public/images/rope_wall.jpg');
const random = require('../../../../public/images/escalated.jpg');

// <img className="img-responsive" src={require('../../../../public/images/on_a_boat.jpg')} />

// {/*<CarouselSlide file={aboutFile} isActive="true" />*/}
// {/*<CarouselSlide file={aboutFile} />*/}
// {/*<CarouselSlide file={aboutFile} />*/}

const slides = [
  {
    file: aboutMe,
    title: 'About Me',
  },
  {
    file: hobbies,
    title: 'My Hobbies',
  },
  {
    file: random,
    title: 'Well That Escalated Quickly',
  },
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slidePointer: 0,
      slides,
    };

    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
  }

  goToNextSlide() {
    this.setState((prevState) => {
      let newState = prevState.slidePointer + 1;
      if (prevState.slidePointer === prevState.slides.length-1) {
        newState = 0;
      }

      return {
        slidePointer: newState,
      };
    });
  }

  goToPreviousSlide() {
    this.setState((prevState) => {
      let newState = prevState.slidePointer - 1;
      if (prevState.slidePointer === 0) {
        newState = prevState.slides.length - 1;
      }

      return {
        slidePointer: newState,
      };
    });
  }

  render() {
    console.log('slide pointer', this.state.slidePointer);
    console.log('slides', this.state.slides);

    return (
      <div id="slideShow">
        <button onClick={this.goToPreviousSlide}>Prev</button>
        <button onClick={this.goToNextSlide}>Next</button>
        <h1>{this.state.slides[this.state.slidePointer].title}</h1>
        <div className="slide-wrapper">
          <img className="img-responsive" src={this.state.slides[this.state.slidePointer].file} />
        </div>
      </div>
    );
  }
}

export default Carousel;
