import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

export default function Login() {

  return (
    <View style={styles.container}>
      <TextInput
        label="Username"
        style={styles.textInput}
      />

      <TextInput
        label="Password"
        secureTextEntry
        right={<TextInput.Icon icon="eye" />}
        style={styles.textInput}
      />

      <Button 
        mode="elevated" 
        onPress={() => console.log('Pressed')}
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
