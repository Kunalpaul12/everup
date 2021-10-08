import {Dimensions} from 'react-native';
import {Colors, Fonts} from '../../constants';

const {width} = Dimensions.get('window');

export default {
  container: {
    width: width / 1.1,
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: Colors.white,
  },
  winConatiner: {
    flexDirection: 'row',
    width: '100%',
    height: 30,
    borderRadius: 20,
    backgroundColor: Colors.white,
    top: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  winInnerConatiner: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  coinConatiner: {
    flexDirection: 'row',
    paddingRight: 10,
  },
  winText: {
    fontSize: 15,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  amountText: {
    fontSize: 15,
    fontFamily: Fonts.bold,
    color: Colors.green,
    left: 5,
  },
  coinImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  imageTag: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  row: {
    flexDirection: 'row',
  },
  coinText: {
    fontSize: 17,
    fontFamily: Fonts.regular,
    color: Colors.orange,
  },
  hightLightContainer: {
    position: 'absolute',
    alignSelf: 'center',
    backgroundColor: Colors.darkOrange,
    bottom: 0,
    width: 170,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeText: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.white,
  },
  gamePlayText: {
    fontSize: 15,
    fontFamily: Fonts.regular,
    color: Colors.white,
  },
};
