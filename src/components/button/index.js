import React from 'react';
import {View} from 'react-native';
import styles from './style';
import {_Text, ImageDraw} from '../';

export const ButtonDetail = ({label, imageLoaction}) => {
  return (
    <View style={styles.containerButtonDetail}>
      <_Text data={label} style={styles.buttonLabel} />
      <ImageDraw imageLoaction={imageLoaction} imageStyle={styles.rightArrow} />
    </View>
  );
};
