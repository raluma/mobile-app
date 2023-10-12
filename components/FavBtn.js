import { FavContext } from "./FavContext";
import { useState } from "react";
import { Button } from "@rneui/themed";

export default function FavBtn({ children }) {
  const [fav, setFav] = useState(false);
  const bColor = fav ? "red" : "black";

  return (
    <Button 
      onPress = { 
        () => { setFav(!fav) }
      }
      buttonStyle = {
        {
          backgroundColor: "white",
          borderWidth: 1,
          borderRadius: 3,
          borderColor: bColor,
        }
      }
    >
      <FavContext.Provider value={fav}>
        {children}
      </FavContext.Provider>
    </Button>
  );
}
