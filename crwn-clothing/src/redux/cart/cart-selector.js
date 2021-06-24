import { createSelector } from "reselect";

/**
 *
 * @param {*} state
 * @returns
 */
const selectCart = (state) => state.cart;

/**
 *
 */
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  // last return
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);
