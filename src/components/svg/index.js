import React from 'react';
import {SvgXml} from 'react-native-svg';

const SvgDraw = ({svgData}) => {
  if (svgData === undefined || svgData === null) {
    return null;
  }
  return <SvgXml xml={svgData} />;
};

export default SvgDraw;
