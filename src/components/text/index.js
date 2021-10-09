import React from 'react';
import {Text, View} from 'react-native';
import {ImageDraw} from '../';

const _Text = ({
  style,
  data,
  imageLoactionLeft,
  imageStyleLeft,
  imageLoactionRight,
  imageStyleRight,
  imageConatinerStyle,
  children,
}) => {
  const Draw = (_data) => {
    return (
      <View style={imageConatinerStyle}>
        {imageLoactionLeft && (
          <ImageDraw
            imageLoaction={imageLoactionLeft}
            imageStyle={imageStyleLeft}
          />
        )}
        <Text style={style}>{_data}</Text>
        {imageLoactionRight && (
          <ImageDraw
            imageLoaction={imageLoactionRight}
            imageStyle={imageStyleRight}
          />
        )}
        {children}
      </View>
    );
  };
  if (data === undefined || data === null) {
    return Draw('--');
  }
  return Draw(data);
};

export default _Text;
