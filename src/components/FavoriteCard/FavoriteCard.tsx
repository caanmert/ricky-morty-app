import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Character} from '../../types';

type Props = {
  item: Character;
  onRemove: () => void;
};

const FavoriteCard = ({item, onRemove}: Props) => {
  const onPress = () => {
    console.log('FavoriteCard');
  };

  return (
    <TouchableOpacity style={styles.container} key={item.id} onPress={onPress}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.text}>{item.name}</Text>
        <Button title="Remove" onPress={onRemove} />
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteCard;

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
