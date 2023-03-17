import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {EpisodeDetailsCardProps} from './EpisodeDetailsCardProps';

const EpisodeDetailsCard = ({item}: EpisodeDetailsCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.episodeName}>{item.name}</Text>
      <Text style={styles.text}>{item.air_date}</Text>
      <Text style={styles.text}>{item.episode}</Text>
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
  },
  episodeName: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  },
  characterImage: {
    width: 50,
    height: 50,
  },
});
