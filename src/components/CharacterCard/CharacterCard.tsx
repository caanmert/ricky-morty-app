import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '../../hooks';
import {CharacterCardProps} from './CharacterCardProps';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CharacterCard = ({item}: CharacterCardProps) => {
  const {navigate} = useNavigation();

  const onPress = () => {
    navigate('CharacterDetails', {characterId: item.id});
  };

  const saveFavorites = async () => {
    try {
      const favorites = await AsyncStorage.getItem('favorites');
      const data = JSON.parse(favorites) || [];
      data.push(item.id);
      await AsyncStorage.setItem('favorites', JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <TouchableOpacity style={styles.container} key={item.id} onPress={onPress}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.text}>{item.name}</Text>
        <Button title="Add to Favorites" onPress={saveFavorites} />
      </View>
    </TouchableOpacity>
  );
};

export default CharacterCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 80,
    gap: 20,
  },
  image: {
    width: 60,
    height: '100%',
  },
  details: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    width: '50%',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
