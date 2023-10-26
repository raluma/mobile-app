import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { logIn } from '../services/accountFunctions'

export default function Login({ setLoged }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onPress = () => {
    setLoged({loading: false, result: logIn(username, password)});
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="Username"
        value={username}
        onChangeText={username => setUsername(username)}
        style={styles.textInput}
      />

      <TextInput
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
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
    }
});
