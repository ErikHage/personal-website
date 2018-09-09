import React, {PropTypes} from 'react';

import ImageSlide from './ImageSlide';
import Arrow from './Arrow';

const slides = [
  {
    title: 'About Me',
    imageUrl: "https://www.telegraph.co.uk/content/dam/Pets/spark/pets-at-home-2017/fluffy-white-puppy.jpg",
    route: '/about-me',
  },
  {
    title: 'Skills',
    imageUrl: "https://cdn2-www.dogtime.com/assets/uploads/2011/03/puppy-development.jpg",
    route: '/skills',
  },
  {
    title: 'Projects',
    imageUrl: "https://g77v3827gg2notadhhw9pew7-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/puppy-vomiting_canna-pet-1024x682.jpg",
    route: '/projects',
  },
  {
    title: 'Hobbies',
    imageUrl: "https://www.petmd.com/sites/default/files/all-about-cockatiels.jpg",
    route: '/hobbies',
  },
];

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };

    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
  }

  componentDidMount() {
    const intervalId = setInterval(this.goToNextSlide, 5000);

    this.setState({
      intervalId,
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  goToNextSlide() {
    const lastIndex = slides.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentIndex + 1;

    this.setState({
      currentIndex: index
    });
  }

  goToPreviousSlide() {
    const lastIndex = slides.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentIndex - 1;

    this.setState({
      currentIndex: index
    });
  }

  render() {
    const slide = slides[this.state.currentIndex];
    return (
      <div className="my-carousel">
        <Arrow
          direction="left"
          clickFunction={this.goToPreviousSlide}
          glyph="&#9664;" />

        <ImageSlide title={slide.title} imageUrl={slide.imageUrl} route={slide.route} />

        <Arrow
          direction="right"
          clickFunction={this.goToNextSlide}
          glyph="&#9654;" />
      </div>
    );
  }
}

export default Carousel;
