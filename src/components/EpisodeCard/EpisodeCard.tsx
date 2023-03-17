import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {EpisodeCardProps} from './EpisodeCardProps';
import {useNavigation} from '../../hooks';

const EpisodeCard = ({item}: EpisodeCardProps) => {
  const {navigate} = useNavigation();

  const onDetailsPress = () => {
    navigate('EpisodeDetails', {episodeId: item.id});
  };

  return (
    <View style={styles.container} key={item.id}>
      <Text style={styles.text}>{item.name}</Text>
      <Text>{item.air_date}</Text>
      <Text>{item.episode}</Text>
      <TouchableOpacity onPress={() => onDetailsPress()}>
        <Text>Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EpisodeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
  },
  text: {
    color: 'red',
  },
});
