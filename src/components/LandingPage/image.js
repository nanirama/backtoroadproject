import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Image = ({ objectFit, objectPosition, img, imgalt, ...rest }) => {
  let wrapperStyles = {};
  let imageStyles = {};

  const ImageAlt = imgalt || 'Back to Roads'

  

  if (objectFit === 'contain') {
    wrapperStyles.width = '100%';
    wrapperStyles.maxWidth = '100%';
  }

  switch (objectFit) {
    case 'contain':
      imageStyles.objectFit = 'contain';
      break;
    case 'cover':
      imageStyles.objectFit = 'cover';
      break;
    case 'fill':
      imageStyles.objectFit = 'fill';
      break;
    case 'none':
      imageStyles.objectFit = 'none';
      break;
    case 'scale-down':
      imageStyles.objectFit = 'scale-down';
      break;
    default:
      break;
  }

  switch (objectPosition) {
    case 'center':
      imageStyles.objectPosition = 'center center';
      break;
    case 'left':
      imageStyles.objectPosition = 'left center';
      break;
    case 'left top':
      imageStyles.objectPosition = 'left top';
      break;
    case 'top':
      imageStyles.objectPosition = 'center top';
      break;
    case 'right top':
      imageStyles.objectPosition = 'right top';
      break;
    case 'right':
      imageStyles.objectPosition = 'right center';
      break;
    case 'right bottom':
      imageStyles.objectPosition = 'right bottom';
      break;
    case 'bottom':
      imageStyles.objectPosition = 'center bottom';
      break;
    case 'left bottom':
      imageStyles.objectPosition = 'left bottom';
      break;
    default:
      break;
  }
  console.log('slider alts 2', ImageAlt);
  return (
    <GatsbyImage
      alt={ImageAlt}
      image={getImage(img)}      
      style={wrapperStyles}
      imgStyle={imageStyles}
      placeholderstyle={imageStyles}
      {...rest}
    />
  );
};

Image.defaultProps = {
  objectFit: 'cover',
  objectPosition: 'center',
};

Image.propTypes = {
  objectFit: PropTypes.string,
  objectPosition: PropTypes.string,
};

export default React.memo(Image);