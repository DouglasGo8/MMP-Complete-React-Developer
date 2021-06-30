/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable arrow-body-style */
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import "./CartDropDown.scss";

import CustomButton from "../../button/Button";

import CartItem from "../../cartItem/CartItem";

import { selectCartItems } from "../../../redux/cart/cart-selector";

/**
 *
 * @returns
 */
const cartDropDown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => history.push("/checkout")}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(cartDropDown));
