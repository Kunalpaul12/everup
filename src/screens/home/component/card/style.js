import {Dimensions} from 'react-native';
import {Colors, Fonts} from '../../../../constants';

const {width} = Dimensions.get('window');

export default {
  container: {
    width: width / 1.1,
    height: 515,
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
    bottom: -3,
  },
  row: {
    flexDirection: 'row',
  },
  amount: {
    fontSize: 22,
    fontFamily: Fonts.bold,
    color: Colors.green,
    // left: 10,
    // bottom: 2,
    //fontWeight: '900',
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
  drawConatiner: {
    width: '95%',
    height: 150,
    alignSelf: 'center',
    marginTop: 25,
    alignItems: 'center',
    marginBottom: 30,
  },
  timmerConatiner: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  nextTimerText: {
    fontSize: 15,
    fontFamily: Fonts.bold,
    color: Colors.black,
    textAlign: 'center',
    opacity: 0.8,
  },
  enitriesConatiner: {
    width: '100%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTimeConatiner: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateTimeLabel: {
    fontSize: 15,
    fontFamily: Fonts.bold,
    color: Colors.darkOrange,
    top: 3,
  },
  dateTime: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
};
