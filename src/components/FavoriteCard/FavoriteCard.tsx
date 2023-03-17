import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Character} from '../../types';

type Props = {
  item: Character;
};

const FavoriteCard = ({item}: Props) => {
  return (
    <View>
      <Text>FavoriteCard</Text>
    </View>
  );
};

export default FavoriteCard;

const styles = StyleSheet.create({});
