import {Dimensions} from 'react-native';
import {Colors, Fonts} from '../../../../constants';

const {width} = Dimensions.get('window');

export default {
  container: {
    width: width / 1.1,
    height: 400,
    borderRadius: 10,
    backgroundColor: Colors.white,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  innerContiner: {
    width: '90%',
    alignSelf: 'center',
  },
  headerConatiner: {
    width: '95%',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    height: 60,
    alignSelf: 'center',
  },
  imageConatiner: {
    alignSelf: 'center',
  },
  arrowImage: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  headerInner: {
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  jackpotText: {
    fontSize: 18,
    fontFamily: Fonts.bold,
    color: Colors.black,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
  },
  amount: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.green,
    left: 10,
    bottom: 2,
    fontWeight: '900',
  },
  dayConatiner: {
    width: '95%',
    height: 50,
    borderRadius: 10,
    backgroundColor: Colors.background,
    alignSelf: 'center',
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 17,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  timeText: {
    fontSize: 17,
    fontFamily: Fonts.bold,
    color: Colors.darkOrange,
  },
  winningConatiner: {
    width: '95%',
    height: 70,
    alignSelf: 'center',
    marginTop: 25,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  flatlistConatiner: {
    width: '100%',
    alignItems: 'center',
  },
  faltlistNumberConatiner: {
    flexDirection: 'row',
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    marginRight: 9,
    marginTop: 8,
  },
  winImage: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
};
