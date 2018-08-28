import React from 'react';

import Carousel from './carousel/Carousel';

class HomePage extends React.Component {
  render() {
    return (
      <div className="page-wrapper" >
        <div className="jumbotron">
          <h1>Erik B. Hage</h1>
          <p>Software Engineer, Entrepreneur</p>
        </div>
        <Carousel />
      </div>
    );
  }
}

export default HomePage;
