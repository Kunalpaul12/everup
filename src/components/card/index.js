import React from 'react';
import {View, ImageBackground} from 'react-native';
import styles from './style';
import {ImageDraw, _Text} from '../';

const Card = ({
  imageBackgroundLoaction,
  imageBackgroundStyle,
  imageTag,
  amount,
  imageCoin,
  coinAmount,
  place,
  playText,
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageBackgroundLoaction}
        style={imageBackgroundStyle}>
        <ImageDraw imageLoaction={imageTag} imageStyle={styles.imageTag} />
        <View style={styles.winConatiner}>
          <View style={styles.winInnerConatiner}>
            <_Text data={'WIN'} style={styles.winText} />
            <_Text data={`€${amount}`} style={styles.amountText} />
          </View>
          <View style={styles.coinConatiner}>
            <_Text
              data={coinAmount}
              style={styles.coinText}
              imageLoactionLeft={imageCoin}
              imageStyleLeft={styles.coinImage}
              imageConatinerStyle={styles.row}
              imageLoactionRight={imageCoin}
              imageStyleRight={styles.coinImage}
            />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.hightLightContainer}>
        <_Text data={place} style={styles.placeText} />
        <_Text data={playText} style={styles.gamePlayText} />
      </View>
    </View>
  );
};

export default Card;
