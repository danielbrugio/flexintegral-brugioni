import { createContext, useState } from "react";

const Context = createContext();

export function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  const isInCart = (id) => {
    return cart.some((purchase) => purchase.item.id === id);
  };

  const addItem = (item, quantity) => {
    const newItem = { item, quantity };

    if (isInCart(item.id)) {
      let product = cart.find((p) => p.item.id === item.id);
      product.quantity += quantity;

      let newCart = cart.map((p) => {
        if (product.item.id === p.item.id) return product;
        return p;
      });

      setCart(newCart);
    } else {
      if (quantity > 0) {
        setCart((prevState) => [...prevState, newItem]);
      } else {
        console.log("You should add at least 1 product");
      }
    }
  };

  const removeItem = (item) => {
    let newCart = cart.filter((p) => p.item.id !== item.item.id);
    setCart(newCart);
  };

  const clear = () => {
    setCart([]);
  };

  const getQuantityTotal = () => {
    return cart.reduce((acc, purchase) => {
      return acc + purchase.quantity;
    }, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, purchase) => {
      return acc + purchase.item.price * purchase.quantity;
    }, 0);
  };

  return (
    <Context.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        getTotalPrice,
        getQuantityTotal,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;