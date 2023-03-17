import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootParamList} from '../../navigation/Navigation';
import {getEpisodeDetails} from '../../api/Episodes';
import Episode from '../../types/Episode';
import {EpisodeDetailsCard} from '../../components';

type EpisodeDetailsScreenRouteProp = RouteProp<RootParamList, 'EpisodeDetails'>;
type EpisodeDetailsScreenProps = {route: EpisodeDetailsScreenRouteProp};

const EpisodeDetailsScreen = ({route}: EpisodeDetailsScreenProps) => {
  const [episode, setEpisode] = useState<Episode>();
  const {episodeId} = route.params;
  console.log(episodeId);

  useEffect(() => {
    getEpisodeDetails(episodeId)
      .then(result => {
        setEpisode(result.data);
        console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [episodeId]);

  return (
    <SafeAreaView style={styles.container}>
      {episode && <EpisodeDetailsCard item={episode} />}
      {/*     <Text>Characters</Text>
      {episode?.characters.map((character, index) => {
        return (
          <Image
            style={styles.characterImage}
            key={index}
            source={{uri: character as any}}
          />
        );
      })} */}
    </SafeAreaView>
  );
};

export default EpisodeDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  characterImage: {
    width: 50,
    height: 50,
  },
});
