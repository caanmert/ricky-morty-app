import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {EpisodeDetailsCardProps} from './EpisodeDetailsCardProps';

const EpisodeDetailsCard = ({item}: EpisodeDetailsCardProps) => {
  return (
    <View style={styles.container}>
      <Text>{item.air_date}</Text>
      <Text>{item.episode}</Text>
      <Text>Characters</Text>
      {item?.characters.map((character, index) => {
        return (
          <Image
            style={styles.characterImage}
            key={index}
            source={{uri: character as any}}
          />
        );
      })}
    </View>
  );
};

export default EpisodeDetailsCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  characterImage: {
    width: 50,
    height: 50,
  },
});
