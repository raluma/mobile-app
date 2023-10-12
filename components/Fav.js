import { useContext } from 'react';
import { FavContext } from './FavContext';
import { Icon } from '@rneui/themed';

export default function Fav() {
  const fav = useContext(FavContext);

  switch (fav) {
    case true:
      return <Icon name="heart" type="font-awesome" color="red" />;
    case false:
      return <Icon name="heart" type="font-awesome" color="black" />;
    default:
      throw Error('Unknown level: ' + fav);
  }
}
