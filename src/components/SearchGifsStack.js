import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useGifsFrom } from '../hooks/useGifsFrom';
import Loader from './Loader';
import Gif from './Gif';

export default function SearchGifsFrom({ query, limit }) {
  const searchGifs = useGifsFrom({ query, limit });

  return (
    <>
      {searchGifs.loading ?
        <Loader />
        :
        <View style={styles.container}>
            {
              searchGifs.results.map(gif => {
                return <Gif key = { gif.id }
                  uri = { gif.url }
                  width = { 150 }
                  height = { 150 }
                  optionFav = { true }
                />
              })
            }
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
});