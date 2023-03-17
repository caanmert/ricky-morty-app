import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getAllEpisodesByPage, getEpisodesByName} from '../../api/Episodes';
import Episode from '../../types/Episode';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';
import {useSearchBar} from '../../hooks';

const EpisodesScreen = () => {
  const [episodes, setEpisodes] = useState<Episode[]>();
  const [filteredData, setFilteredData] = useState<Episode[]>();
  const [page, setPage] = useState<number>(1);
  const [error, setError] = useState<string>();

  const episodeName = useSearchBar();

  useEffect(() => {
    getAllEpisodesByPage(page)
      .then(res => {
        setEpisodes((prevState = []) => [...prevState, ...res.data.results]);
      })
      .catch(err => {
        console.log(err);
        setError(err);
      });

    return () => {};
  }, [page]);

  useEffect(() => {
    if (episodeName !== '') {
      getEpisodesByName(episodeName)
        .then(res => {
          setFilteredData(res.data.results);
        })
        .catch(err => {
          setError(err.message);
        });
    } else {
      setFilteredData([]);
    }

    return () => {};
  }, [episodeName]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <View style={styles.container}>
      {error && <Text>{error}</Text>}
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={filteredData && filteredData.length > 0 ? filteredData : episodes}
        renderItem={props => <EpisodeCard {...props} />}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
      />
    </View>
  );
};

export default EpisodesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    marginTop: 200,
    gap: 10,
  },
});
