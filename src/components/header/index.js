import React from 'react';
import {View} from 'react-native';
import {_Text} from '../';
import styles from './style';
import {StaticImages, SvgData} from '../../constants';
import {SvgDraw} from '../../components';

const Header = ({amount, coinAmount}) => {
  return (
    <View style={styles.container}>
      <View style={styles.amountView}>
        <_Text style={styles.amountText} data={`${amount}`} />
        <_Text style={styles.savedText} data={'Saved'} />
      </View>
      <View style={styles.coinView}>
        <_Text
          style={styles.amountText}
          data={`${coinAmount}`}
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
