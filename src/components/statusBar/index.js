import React from 'react';
import {View, StatusBar, StyleSheet, Platform, Dimensions} from 'react-native';
import {Colors} from '../../constants';

const {height} = Dimensions.get('window');

const Status = () => {
  return (
    <View style={styles.StatusBar}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.header} />
    </View>
  );
};

const styles = StyleSheet.create({
  StatusBar: {
    height: Platform.OS === 'ios' ? height / 18 : 0,
    backgroundColor: Colors.header,
  },
});

export default Status;
