import React from 'react';
import {Image} from 'react-native';
import styles from './style';

const ImageDraw = ({imageLoaction, imageStyle}) => {
  if (imageLoaction === undefined || imageLoaction === null) {
    return null;
  }
  return (
    <Image
      style={imageStyle === undefined ? styles.image : imageStyle}
      source={imageLoaction}
    />
  );
};

export default ImageDraw;
