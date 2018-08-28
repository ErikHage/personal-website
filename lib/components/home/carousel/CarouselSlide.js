import React, {PropTypes} from 'react';

class CarouselSlide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="img-responsive" src={this.props.file} />
      </div>
    );
  }
}

CarouselSlide.propTypes = {
  file: PropTypes.string.isRequired,
  isActive: PropTypes.bool.optional,
};

export default CarouselSlide;
