import { Card } from "@rneui/themed";
import { FavContext } from "./FavContext";

export default function Gif({ fav, children }) {
  return (
    <Card>
      <FavContext.Provider value={fav}>
        {children}
      </FavContext.Provider>
    </Card>
  );
}
