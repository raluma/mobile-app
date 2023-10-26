import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTrendingGifs } from '../hooks/useTrendingGifs';
import Loader from './Loader';
import Gif from './Gif';

export default function TrendingGifsStack({ limit }) {
  const trendingGifs = useTrendingGifs({ limit });

  return (
    <>
      {trendingGifs.loading ?
        <Loader />
        :
        <View style={styles.container}>
          {
            trendingGifs.results.map(gif => {
              return <Gif key={gif.id}
                uri={ gif.url }
                width= { 150 }
                height= { 150 }
                optionFav={ false }
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