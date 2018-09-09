import React, {PropTypes} from 'react';

import { Link } from 'react-router';

const ImageSlide = (props) => {
  const styles = {
    backgroundImage: `url('${props.imageUrl}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <Link to={props.route}>
      <div className="image-slide" style={styles}>
        <h2 className="slide-title">{props.title}</h2>
      </div>
    </Link>
  );
};

ImageSlide.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  route: PropTypes.string.optional,
};

export default ImageSlide;
