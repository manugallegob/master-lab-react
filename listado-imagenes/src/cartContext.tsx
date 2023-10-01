import React from "react";

export const listContext = React.createContext(null);

export const CartProvider = ({ children }) => {
  const [listItems, setListItems] = React.useState([]);

  const addToCart = (item) => {
    const newItem = { ...item, selected: true };
    setListItems([...listItems, newItem]);
  };

  const removeFromCart = (item) => {
    setListItems(
      listItems.filter((e) => {
        return e.id !== item.id;
      })
    );
  };

  return (
    <listContext.Provider value={{ listItems, setListItems, addToCart, removeFromCart }}>
      {children}
    </listContext.Provider>
  );
};
