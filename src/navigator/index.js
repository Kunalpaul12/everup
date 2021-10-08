import React from 'react';
import {Splash, Home} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        gestureEnabled: false,
      })}>
      <Stack.Screen name="Splash" component={Splash} headerShown={false} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Navigator;
