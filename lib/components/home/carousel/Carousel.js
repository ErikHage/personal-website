import React, {PropTypes} from 'react';

import ImageSlide from './ImageSlide';
import Arrow from './Arrow';

const imgUrls = [
  "https://cmeimg-a.akamaihd.net/640/clsd/getty/c64f76dc20c246ca88ee180fe4b4b781",
  "https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900",
  "https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328",
  "https://i.pinimg.com/736x/07/c3/45/07c345d0eca11d0bc97c894751ba1b46.jpg",
  "https://ehealthforum.com/health/images/avatars/11699147425707699031013.jpeg"
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

  goToNextSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentIndex + 1;

    this.setState({
      currentIndex: index
    });
  }

  goToPreviousSlide() {
    const lastIndex = imgUrls.length - 1;
    const { currentIndex } = this.state;
    const shouldResetIndex = currentIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentIndex - 1;

    this.setState({
      currentIndex: index
    });
  }

  render() {
    return (
      <div className="my-carousel">
        <Arrow
          direction="left"
          clickFunction={this.goToPreviousSlide}
          glyph="&#9664;" />

        <ImageSlide url={imgUrls[this.state.currentIndex]} />

        <Arrow
          direction="right"
          clickFunction={this.goToNextSlide}
          glyph="&#9654;" />
      </div>
    );
  }
}

export default Carousel;
