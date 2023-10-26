import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useTrendingGifs } from '../hooks/useTrendingGifs';
import Gif from './Gif';

export default function GifsStack({ limit }) {
  const trendingGifs = useTrendingGifs({ limit });

  return (
    <>
      {trendingGifs.loading ?
        <View style={styles.containerLoader}>
          <Image
            source={{ uri: "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47pv652litdm9zcy95wzorvw3qwd0dcxegxfzhb3yw&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}
            style={{ width: 100, height: 100 }}
          />
        </View>
        :
        <View style={styles.containerGifs}>
          {
            trendingGifs.results.map(gif => {
              return <Gif key={gif.id}
                uri={ gif.url }
                width= { 150 }
                height= { 150 }
              />
            })
          }
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  containerLoader: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerGifs: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
});