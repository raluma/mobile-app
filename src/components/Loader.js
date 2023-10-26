import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Loader() {

  return (
    <View style={styles.container}>
        <Image
        source={{ uri: "https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47pv652litdm9zcy95wzorvw3qwd0dcxegxfzhb3yw&ep=v1_gifs_search&rid=giphy.gif&ct=g" }}
        style={{ width: 100, height: 100 }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});