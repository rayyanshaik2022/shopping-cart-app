import { useState } from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App(props) {
  const [cartItems, setCartItems] = useState({});

  let addToCart = (id, brand, name, price, image) => () => {
    console.log(cartItems)
    if (id in cartItems) {
      setCartItems({
        ...cartItems,
        [id]: { ...cartItems[id], count: cartItems[id].count + 1 },
      });
    } else {
      setCartItems({
        ...cartItems,
        [id]: {brand, name, price, image, count: 1},
      });
    }
  };

  if (props.page == "shop") {
    return <Shop cartItems={cartItems} addToCart={addToCart} />;
  }

  return (
    <>
      <Home cartItems={cartItems} />
    </>
  );
}

export default App;
