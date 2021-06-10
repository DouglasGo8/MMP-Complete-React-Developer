import "./CartIcon.scss";

import { connect } from "react-redux";

import ShoppingIcon from "../../../assets/svg/shopping-bag.svg";

import { toggleCartHidden } from "../../../redux/cart/cart-actions";
/**
 *
 * @returns
 */
const cartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(cartIcon);