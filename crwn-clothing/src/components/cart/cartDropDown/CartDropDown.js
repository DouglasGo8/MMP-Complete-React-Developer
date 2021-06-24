import { connect } from "react-redux";

import "./CartDropDown.scss";

import CustomButton from "../../button/Button";

import CartItem from "../../cartItem/CartItem";

import { selectCartItems } from "../../../redux/cart/cart-selector";

/**
 *
 * @returns
 */
const cartDropDown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(cartDropDown);
