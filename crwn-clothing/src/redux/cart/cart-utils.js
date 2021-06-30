/**
 *
 * @param {*} cartItems
 * @param {*} cartItemToAdd
 * @returns
 */
// eslint-disable-next-line import/prefer-default-export
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingCartItem) {
    // eslint-disable-next-line spaced-comment
    //console.log(cartItemToAdd);
    // eslint-disable-next-line no-confusing-arrow
    return cartItems.map((item) =>
      item.id === cartItemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
