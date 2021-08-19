import "./CartIcon.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ShoppingIcon from "../../../assets/svg/shopping-bag.svg";

import { toggleCartHidden } from "../../../redux/cart/cart-actions";

import { selectCartItemsCount } from "../../../redux/cart/cart-selector";
/**
 *
 * @returns
 */
const cartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

/**
 *
 */
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

/**
 *
 * @param {*} param0
 * @returns
 */
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount, //cartItems.reduce((acc, item) => acc + item.quantity, 0),
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
