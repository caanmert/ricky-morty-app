import {FlatList, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FavoriteCard} from '../../components';
import {Character} from '../../types';
import {getMultipleCharacters} from '../../api/Characters';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState<Character[]>();

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem('favorites')
        .then(res => {
          const favoriteIds = res?.toString();
          //setFavorites(res);
          console.log(res);
          getMultipleCharacters(favoriteIds).then(result => {
            console.log(result.data);
            setFavorites(result.data);
          });
        })
        .catch(err => console.log(err));
    }, []),
  );

  const removeCard = async (cardId: number) => {
    try {
      const favoriteIds = await AsyncStorage.getItem('favorites');
      const data = JSON.parse(favoriteIds) || [];
      const favoriteItems = data.filter((e: number) => e !== cardId);
      await AsyncStorage.setItem('favorites', JSON.stringify(favoriteItems));
      setFavorites(favorites?.filter(favorite => favorite.id !== cardId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView>
      <Text>FavoritesScreen</Text>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={favorites}
        renderItem={props => (
          <FavoriteCard {...props} onRemove={() => removeCard(props.item.id)} />
        )}
      />
    </SafeAreaView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  contentContainerStyle: {
    marginTop: 10,
    gap: 10,
  },
});
