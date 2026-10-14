import React, { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

export function CartContextProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((previousItems) => {
      const existingItemIndex = previousItems.findIndex(
        (existingItem) => existingItem.id === item.id,
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...previousItems];

        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          amount: updatedItems[existingItemIndex].amount + item.amount,
        };

        return updatedItems;
      }

      return [...previousItems, item];
    });
  }

  function removeItem(id) {
    setItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.id === id);

      if (!existingItem) return previousItems;

      if (existingItem.amount === 1) {
        return previousItems.filter((item) => item.id !== id);
      }

      return previousItems.map((item) =>
        item.id === id ? { ...item, amount: item.amount - 1 } : item,
      );
    });
  }

  function clearCart() {
    setItems([]);
  }

  const totalQuantity = items.reduce((total, item) => total + item.amount, 0);

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.amount,
    0,
  );

  const cartContextValue = {
    items,
    totalQuantity,
    totalAmount,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
}
