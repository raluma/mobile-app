import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { logIn } from '../services/accountFunctions'

export default function Login({ setLoged }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidden, setHidden] = useState(true);
  const [error, setError] = useState(false);

  const onPress = () => {
    logIn(username, password).then(result => {
      setLoged({loading: false, result: result});
      setError(!result);
    });
  }
  const onEye = () => {
    setHidden(!hidden);
  }

  return (
    <View style={styles.container}>
      { error === true ? 
        <Button 
          mode="elevated" 
          style={styles.errorButton}
        >
          La contraseña o usuario son incorrectos 
        </Button>
        :
        <></>
      }
  
      <TextInput
        label="Username"
        value={username}
        onChangeText={username => setUsername(username)}
        style={styles.textInput}
      />

      <TextInput
        label="Password"
        secureTextEntry = {hidden}
        right={<TextInput.Icon icon="eye" onPress={onEye} />}
        value={password}
        onChangeText={password => setPassword(password)}
        style={styles.textInput}
      />

      <Button 
        mode="elevated" 
        onPress={onPress}
        style = {styles.button}
        >
          Login
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      gap: 26
    },
    textInput: {
      width: 260
    }, 
    button: {
      width: 160,
      borderRadius: 2
    },
    errorButton: {

    }
});
