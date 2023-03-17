import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {EpisodeCardProps} from './EpisodeCardProps';
import {useNavigation} from '../../hooks';

const EpisodeCard = ({item}: EpisodeCardProps) => {
  const {navigate} = useNavigation();

  const onDetailsPress = () => {
    navigate('EpisodeDetails', {episodeId: item.id});
  };

  return (
    <TouchableOpacity
      style={styles.container}
      key={item.id}
      onPress={() => onDetailsPress()}>
      <Text style={styles.episodeName}>{item.name}</Text>
      <Text style={styles.text}>{item.air_date}</Text>
      <Text style={styles.text}>{item.episode}</Text>
    </TouchableOpacity>
  );
};

export default EpisodeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    gap: 5,
  },
  text: {
    fontSize: 16,
  },
  episodeName: {
    color: 'blue',
    fontSize: 18,
    fontWeight: '700',
  },
});
