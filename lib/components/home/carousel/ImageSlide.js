import React, {PropTypes} from 'react';

const ImageSlide = (props) => {
  const styles = {
    backgroundImage: `url('${props.url}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  console.log('url for slide:', props.url);

  return (
    <div className="image-slide" style={styles}>
    </div>
  );
};

export default ImageSlide;
