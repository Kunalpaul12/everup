import React from 'react';
import {Text, View, Image} from 'react-native';

const _Text = ({style, data, imageLoaction, imagePostion, imageStyle}) => {
  const Draw = (_data) => {
    const DrawImage = () => {
      return <Image style={imageStyle} source={imageLoaction} />;
    };
    return (
      <View>
        {imageLoaction && imagePostion === 'left' && DrawImage()}
        <Text style={style}>{_data} </Text>
        {imageLoaction && imagePostion === 'right' && DrawImage()}
      </View>
    );
  };
  if (data === undefined || data === null) {
    return Draw('--');
  }
  return Draw(data);
};

export default _Text;
