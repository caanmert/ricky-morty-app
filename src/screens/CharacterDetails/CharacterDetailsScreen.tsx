import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootParamList} from '../../navigation/Navigation';
import {Character} from '../../types';
import {getCharacterDetails} from '../../api/Characters';
import CharacterDetailsCard from '../../components/CharacterDetailsCard/CharacterDetailsCard';

type CharacterDetailsScreenRouteProp = RouteProp<
  RootParamList,
  'CharacterDetails'
>;
type CharacterDetailsScreenProps = {route: CharacterDetailsScreenRouteProp};
const CharacterDetailsScreen = ({route}: CharacterDetailsScreenProps) => {
  const [character, setCharacter] = useState<Character>();
  const {characterId} = route.params;

  useEffect(() => {
    getCharacterDetails(characterId)
      .then(result => {
        setCharacter(result.data);
        console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [characterId]);

  return (
    <SafeAreaView style={styles.container}>
      {character && <CharacterDetailsCard item={character} />}
    </SafeAreaView>
  );
};

export default CharacterDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
