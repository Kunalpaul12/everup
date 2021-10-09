import {Colors, Fonts} from '../../constants';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default {
  coantiner: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  imageBackgound: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  line: {
    borderColor: Colors.black,
    borderWidth: 0.5,
    opacity: 0.1,
    width: width / 1.1,
    alignSelf: 'center',
  },
  headLineConatiner: {
    width: width / 1.1,
    alignSelf: 'center',
    marginTop: 20,
  },
  headlineText: {
    fontSize: 20,
    fontFamily: Fonts.bold,
    color: Colors.black,
  },
  buttonConatiner: {
    marginTop: 30,
  },
  scrollView: {
    paddingBottom: 30,
  },
};
