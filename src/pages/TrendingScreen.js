import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { logOut } from '../services/accountFunctions';
import Loader from '../components/Loader';
import TrendingGifsStack from '../components/TrendingGifsStack';
import Login from "../components/Login";

export default function TrendingScreen({ loged, setLoged }) {

  const onPress = () => {
    logOut();
    setLoged({loading: false, result: false});
  }

  return (
    <>
      { loged.loading ? 
          <Loader />
        : loged.result ?
          <View style={styles.container}>

            <Button 
              mode="elevated" 
              onPress={onPress}
              style={styles.button}
            >
                Logout
            </Button>

            <TrendingGifsStack limit={6} />
          </View>
        : 
          <Login setLoged={setLoged} /> 
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
    gap: 30
  },
  button: {
    width: 160,
    borderRadius: 2
  }
});
