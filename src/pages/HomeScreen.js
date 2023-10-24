import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GifsStack from '../components/GifsStack';

export default function HomeScreen() {
    return (
      <View style={styles.container}>
        <GifsStack limit={2} />
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

