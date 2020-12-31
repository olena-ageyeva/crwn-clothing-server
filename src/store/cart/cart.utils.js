export const addItemToCart = (cartItems, newItem) => {
  const isInCart = cartItems.find((item) => item.id === newItem.id);

  console.log("cart", cartItems, isInCart);

  if (isInCart) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};
