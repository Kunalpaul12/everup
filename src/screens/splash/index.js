import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation, CommonActions} from '@react-navigation/native';
const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.navigate({
          name: 'Home',
          params: {
            user: 'jane',
          },
        }),
      );
    }, 200);
  }, []);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
