import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CharacterDetailsCardProps} from './CharacterDetailsCardProps';

const CharacterDetailsCard = ({item}: CharacterDetailsCardProps) => {
  const addToFavorites = () => {
    console.log('Added to Favorites!' + item.id);
  };
  return (
    <View style={styles.container} key={item.id}>
      <Image source={{uri: item.image}} style={styles.image} />

      <View style={styles.details}>
        <View style={styles.row}>
          <Text style={styles.text}>Name: {item.name}</Text>
          <Text style={styles.text}>Status: {item.status}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>Species: {item.species}</Text>
          <Text style={styles.text}>Type: {item.type}</Text>
        </View>
        <Text style={styles.text}>Gender: {item.gender}</Text>
        <Text style={styles.text}>Name: {item.origin.name}</Text>

        <Text style={styles.text}>URL: {item.origin.url}</Text>
        <Text style={styles.text}>Earth: {item.location.name}</Text>
      </View>
      <Button title="Add to Favorites" onPress={addToFavorites} />
    </View>
  );
};

export default CharacterDetailsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 20,
    gap: 50,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
