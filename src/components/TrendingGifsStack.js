import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useTrendingGifs } from '../hooks/useTrendingGifs';
import { Button } from 'react-native-paper';
import { logOut } from '../services/accountFunctions';
import Loader from './Loader';
import Gif from './Gif';

export default function TrendingGifsStack({ setLoged, limit }) {
  const trendingGifs = useTrendingGifs({ limit });

  const onPress = () => {
    logOut();
    setLoged({loading: false, result: false});
  }

  return (
    <>
      {trendingGifs.loading ?
        <Loader />
        :
        <View style={styles.container}>
          <Button 
              mode="elevated" 
              onPress={onPress}
              style={styles.button}
          >
            Logout
          </Button>

          <View style={styles.containerGifs}>
            {
              trendingGifs.results.map(gif => {
                return <Gif key = { gif.id }
                  uri ={ gif.url }
                  width = { 150 }
                  height = { 150 }
                  optionFav = { false }
                />
              })
            }
          </View>
        </View>
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
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
  button: {
    width: 160,
    borderRadius: 2
  }
});