import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export const CenteredActivityIndicator = () => {
  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

export default CenteredActivityIndicator;
