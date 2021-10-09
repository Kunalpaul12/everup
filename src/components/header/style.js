import {Colors, Fonts} from '../../constants';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default {
  container: {
    flexDirection: 'row',
    width,
    height: 95,
    backgroundColor: Colors.header,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountText: {
    color: Colors.white,
    fontFamily: Fonts.bold,
    fontSize: 20,
    textAlign: 'center',
  },
  savedText: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: 15,
    right: 7,
  },
  coinImage: {
    width: 30,
    height: 30,
    bottom: 2,
    resizeMode: 'contain',
  },
  row: {
    flexDirection: 'row',
  },
  amountView: {
    width: width / 3,
    alignItems: 'center',
  },
  coinView: {
    flexDirection: 'row',
    width: width / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIconView: {
    width: width / 3,
    alignItems: 'center',
  },
};
