import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {getAll} from '../../api/Episodes';
import {SafeAreaView} from 'react-native-safe-area-context';

const EpisodesScreen = () => {
  useEffect(() => {
    getAllEpisodes();
    return () => {};
  }, []);

  const getAllEpisodes = async () => {
    try {
      const res = await getAll();
      console.log(res.data);
    } catch {
      console.log('error');
    }
  };

  return (
    <SafeAreaView>
      <Text>EpisodesScreen</Text>
      {/*  <FlatList data={} /> */}
    </SafeAreaView>
  );
};

export default EpisodesScreen;

const styles = StyleSheet.create({});
