import React, {useEffect} from 'react';
import {ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {StaticImages} from '../../constants';
import styles from './style';
import {StackActions} from '@react-navigation/native';
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    SplashScreen.hide();
    setTimeout(() => {
      navigation.dispatch(StackActions.replace('Home'));
    }, 500);
  }, []);

  return (
    <ImageBackground style={styles.cointainer} source={StaticImages.splash} />
  );
};

export default Splash;
