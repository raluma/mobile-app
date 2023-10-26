import Login from "../components/Login";
import { Text } from 'react-native';
import * as accountFunctions from "../services/accountFunctions";

export default function FavsScreen() {
  let loged = false;

  return (
    <>
      { loged ? 
        <Text>hola</Text>
        :
        <Login />
      } 
    </>
  );
}
