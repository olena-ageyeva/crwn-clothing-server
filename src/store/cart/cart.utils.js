export const addItemToCart = (cartItems, newItem) => {
  const isInCart = cartItems.find((item) => item.id === newItem.id);

  if (isInCart) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const isInCart = cartItems.find((item) => item.id === itemToRemove.id);

  if (isInCart?.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToRemove.id);
  } else {
    return cartItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
};
