import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './src/navigator';
import {NavigationContainer} from '@react-navigation/native';
import {Status} from './src/components';

const App = () => {
  return (
    <NavigationContainer>
      <Status />
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
