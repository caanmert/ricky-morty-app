import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CharacterDetailsScreen,
  CharactersScreen,
  EpisodeDetailsScreen,
  EpisodesScreen,
  FavoritesScreen,
} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type RootParamList = {
  Loading: undefined;
  Episodes: undefined;
  EpisodeDetails: {episodeId: number};
  Favorites: undefined;
  Characters: undefined;
  CharacterDetails: {characterId: number};
};

const EpisodesStack = createNativeStackNavigator<RootParamList>();

const CharactersStack = createNativeStackNavigator<RootParamList>();

const Tab = createBottomTabNavigator();

const EpisodesStackNavigator = () => {
  return (
    <EpisodesStack.Navigator>
      <EpisodesStack.Screen name="Episodes" component={EpisodesScreen} />
      <EpisodesStack.Screen
        options={{headerTitle: 'Details'}}
        name="EpisodeDetails"
        component={EpisodeDetailsScreen}
      />
    </EpisodesStack.Navigator>
  );
};

const CharactersStackNavigator = () => {
  return (
    <CharactersStack.Navigator>
      <CharactersStack.Screen name="Characters" component={CharactersScreen} />
      <CharactersStack.Screen
        options={{headerTitle: 'Character Details'}}
        name="CharacterDetails"
        component={CharacterDetailsScreen}
      />
    </CharactersStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="EpisodesScreen"
        component={EpisodesStackNavigator}
        options={{title: 'Episodes'}}
      />
      <Tab.Screen
        name="CharactersScreen"
        component={CharactersStackNavigator}
        options={{title: 'Characters'}}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{headerTitle: 'Favorites', title: 'Favorites'}}
      />
    </Tab.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
