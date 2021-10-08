import React from 'react';
import {View} from 'react-native';
import {_Text} from '../';
import styles from './style';
import {StaticImages} from '../../constants';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <_Text style={styles.amountText} data={'11.00'} />
        <_Text style={styles.savedText} data={'Saved'} />
      </View>
      <View>
        <_Text
          style={styles.amountText}
          data={'11.00'}
          imageLoaction={StaticImages.coinBig}
          imagePostion={'left'}
          imageStyle={styles.coinImage}
        />
        <_Text style={styles.savedText} data={'Saved'} />
      </View>
      <View>
        <_Text style={styles.amountText} data={'11.00'} />
        <_Text style={styles.savedText} data={'Saved'} />
      </View>
    </View>
  );
};

export default Header;
