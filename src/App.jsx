import { useState } from "react";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App(props) {
  const [cartItems, setCartItems] = useState({});

  let addToCart = (id, brand, name, price, image) => () => {
    if (id in cartItems) {
      setCartItems({
        ...cartItems,
        [id]: { ...cartItems[id], count: cartItems[id].count + 1 },
      });
    } else {
      setCartItems({
        ...cartItems,
        [id]: { brand, name, price, image, count: 1 },
      });
    }
  };


  // Both functions can only be called if said item
  // is already in the cart
  let removeItemCount = (id) => () => {

    if (cartItems[id].count - 1 <= 0) {
      
      let newCartItems = {...cartItems};
      delete newCartItems[id];
      setCartItems(newCartItems);
    } else {
      setCartItems({
        ...cartItems,
        [id]: {...cartItems[id], count: cartItems[id].count - 1}
      })
    }
    
  };
  let addItemCount = (id) => () => {
    setCartItems({
      ...cartItems,
      [id]: {...cartItems[id], count: cartItems[id].count + 1}
    })
  };

  if (props.page == "shop") {
    return (
      <Shop
        cartItems={cartItems}
        addToCart={addToCart}
        removeItemCount={removeItemCount}
        addItemCount={addItemCount}
      />
    );
  }

  return (
    <>
      <Home
        cartItems={cartItems}
        removeItemCount={removeItemCount}
        addItemCount={addItemCount}
      />
    </>
  );
}

export default App;
