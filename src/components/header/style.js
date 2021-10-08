import {Colors, Fonts} from '../../constants';
import {Platform, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  container: {
    flexDirection: 'row',
    width,
    height: 100,
    backgroundColor: Colors.header,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  amountText: {color: Colors.white, fontFamily: Fonts.bold, fontSize: 20},
  savedText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 15,
  },
  coinImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
};
