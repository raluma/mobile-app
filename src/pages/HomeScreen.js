import { StatusBar } from 'expo-status-bar';
import GifsStack from '../components/GifsStack';

export default function HomeScreen() {
    return (
      <>
        <GifsStack limit={6} />
        <StatusBar style="auto" />
      </>
    );
}


