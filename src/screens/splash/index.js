import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {StaticImages} from '../../constants';
import styles from './style';
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Home',
        }),
      );
    }, 500);
  }, []);

  return (
    <ImageBackground style={styles.cointainer} source={StaticImages.splash} />
  );
};

export default Splash;
