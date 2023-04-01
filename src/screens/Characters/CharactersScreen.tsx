import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Character} from '../../types';
import {useSearchBar} from '../../hooks';
import {
  getAllCharactersByPage,
  getCharactersByName,
} from '../../api/Characters';
import {CharacterCard} from '../../components';

const CharactersScreen = () => {
  const [characters, setCharacters] = useState<Character[]>();
  const [filteredData, setFilteredData] = useState<Character[]>();
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string>('');

  const characterName = useSearchBar();

  useEffect(() => {
    getAllCharactersByPage(page)
      .then(res => {
        setCharacters((prevState = []) => [...prevState, ...res.data.results]);
      })
      .catch(err => {
        setError(err);
      });
    return () => {};
  }, [page]);

  useEffect(() => {
    if (characterName !== '') {
      getCharactersByName(characterName)
        .then(res => {
          setFilteredData(res.data.results);
        })
        .catch(err => {
          setError(err.message);
        });
    } else {
      setFilteredData([]);
    }
    return () => {};
  }, [characterName]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <View style={styles.container}>
      {error && <Text>{error}</Text>}

      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={
          filteredData && filteredData.length > 0 ? filteredData : characters
        }
        renderItem={props => <CharacterCard {...props} />}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
      />
    </View>
  );
};

export default CharactersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    gap: 10,
  },
});
