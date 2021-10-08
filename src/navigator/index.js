import React from 'react';
import {Splash, Home} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={({route, navigation}) => ({
        gestureEnabled: false,
      })}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Navigator;
