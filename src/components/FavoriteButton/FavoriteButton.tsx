import {Button, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
};

const FavoriteButton = ({onPress}: Props) => {
  return <Button title="Add to favorites" onPress={onPress} />;
};

export default FavoriteButton;

const styles = StyleSheet.create({});
