import SearchGifsStack from '../components/SearchGifsStack';

export default function HomeScreen() {
  return (
    <>
      <SearchGifsStack 
        query = {"animales"}
        limit = {6}
      />
    </>
  );
}


