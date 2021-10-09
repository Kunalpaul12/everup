import React from 'react';
import {View, StatusBar, StyleSheet, Platform} from 'react-native';
import {Colors} from '../../constants';

const Status = () => {
  return (
    <View style={styles.StatusBar}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.header} />
    </View>
  );
};

const styles = StyleSheet.create({
  StatusBar: {
    height: Platform.OS === 'ios' ? 45 : 0,
    backgroundColor: Colors.header,
  },
});

export default Status;
