import { createSelector } from 'reselect';

/**
 *
 * @param {*} state
 * @returns
 */
const selectCart = (state) => state.cart;

/**
 * [selectCartHidden description]
 * @type {[type]}
 */
export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

/**
 * [selectCartItems description]
 * @type {[type]}
 */
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

/**
 * [selectCartItemsCount description]
 * @type {[type]}
 */
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  // last return
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

/**
 * [selectCartTotal description]
 * @type {[type]}
 */
export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
);
