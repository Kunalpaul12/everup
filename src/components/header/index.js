import React from 'react';
import {View} from 'react-native';
import {_Text} from '../';
import styles from './style';
import {StaticImages, SvgData} from '../../constants';
import {SvgDraw} from '../../components';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.amountView}>
        <_Text style={styles.amountText} data={'€11.00'} />
        <_Text style={styles.savedText} data={'Saved'} />
      </View>
      <View style={styles.coinView}>
        <_Text
          style={styles.amountText}
          data={'764.2K'}
          imageLoactionLeft={StaticImages.coinBig}
          imagePostion={'left'}
          imageStyleLeft={styles.coinImage}
          imageConatinerStyle={styles.row}
        />
      </View>
      <View style={styles.userIconView}>
        <SvgDraw svgData={SvgData.userImage} />
      </View>
    </View>
  );
};

export default Header;
