import { CartActionTypes } from "./cart-types";

/**
 * [addItem description] => README.md
 * @param {[type]} item [description]
 */
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

/**
 *
 * @param {*} item
 * @returns
 */
export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});
/**
 * [toggleCartHidden description]
 * @return {[type]} [description]
 */
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

/**
 * [clearItemFromCart description]
 * @param  {[type]} item [description]
 * @return {[type]}      [description]
 */
export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
