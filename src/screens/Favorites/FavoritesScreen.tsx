import {FlatList, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {FavoriteCard} from '../../components';
import {Character} from '../../types';
import {getMultipleCharacters} from '../../api/Characters';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import {
  deleteFavoriteCharacterById,
  getFavoriteCharacterIds,
} from '../../services/FavoriteCharactersService';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState<Character[]>();

  useFocusEffect(
    React.useCallback(() => {
      getFavoriteCharacterIds().then(characterIds => {
        if (characterIds.length > 0) {
          console.log(characterIds);
          getMultipleCharacters(characterIds)
            .then(result => {
              setFavorites(result.data);
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    }, []),
  );

  const removeCard = async (cardId: number) => {
    try {
      await deleteFavoriteCharacterById(cardId);
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
    gap: 10,
  },
});
