import {Dimensions} from 'react-native';
import {Colors, Fonts} from '../../constants';

const {width} = Dimensions.get('window');

export default {
  containerButtonDetail: {
    flexDirection: 'row',
    width: width / 1.1,
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 15,
    fontFamily: Fonts.bold,
    color: Colors.black,
    left: 20,
  },
  rightArrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    right: 20,
  },
};
