import Loader from '../components/Loader';
import TrendingGifsStack from '../components/TrendingGifsStack';
import Login from "../components/Login";

export default function TrendingScreen({ loged, setLoged }) {

  return (
    <>
      { loged.loading ? 
          <Loader />
        : loged.result === true ?
          <TrendingGifsStack 
            setLoged={setLoged} 
            limit={6} 
          />
        : 
          <Login setLoged={setLoged} /> 
      } 
    </>
  );
}
