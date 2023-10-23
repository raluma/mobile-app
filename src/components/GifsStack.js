import React from 'react';
import { View, Image } from 'react-native';
import { useTrendingGifs } from '../hooks/useTrendingGifs';
import Gif from './Gif';

export default function GifsStack({ limit }) {
  const trendingGifs = useTrendingGifs({ limit });

  return (
    <View>
      {trendingGifs.loading === true ?
        <Image
          source={{ uri: "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47pv652litdm9zcy95wzorvw3qwd0dcxegxfzhb3yw&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}
          style={{ width: 100, height: 100 }}
        />
        :
        trendingGifs.results.map(gif => {
          <Gif
            uri={gif.url}
            width={200}
            height={200}
          />
        })
      }
    </View>
  );
}