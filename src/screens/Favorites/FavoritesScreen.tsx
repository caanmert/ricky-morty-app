import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FavoriteCard} from '../../components';
import {Character} from '../../types';
import {useFocusEffect} from '@react-navigation/native';
import {getMultipleCharacters} from '../../api/Characters';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState<Character[]>();

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites')
      .then(res => {
        //setFavorites(res);
        console.log(res);
        getMultipleCharacters(res).then(result => {
          console.log(result);
        });
      })
      .catch(err => console.log(err));
    return () => {};
  });

  return (
    <View>
      <Text>FavoritesScreen</Text>
      {/*     <FlatList
        data={favorites}
        renderItem={props => <FavoriteCard {...props} />}
      /> */}
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
