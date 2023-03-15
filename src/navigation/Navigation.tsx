import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  EpisodeDetailsScreen,
  EpisodesScreen,
  FavoritesScreen,
} from '../screens';
import {NavigationContainer} from '@react-navigation/native';

export type RootParamList = {
  Loading: undefined;
  Episodes: undefined;
  EpisodeDetails: {episodeId: string};
  Favorites: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Episodes" component={EpisodesScreen} />
      <Stack.Screen name="EpisodeDetails" component={EpisodeDetailsScreen} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
