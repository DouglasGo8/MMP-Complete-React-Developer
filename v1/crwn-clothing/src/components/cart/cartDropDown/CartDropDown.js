import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import './CartDropDown.scss';

import CustomButton from '../../button/Button';
import CartItem from '../../cartItem/CartItem';

import { selectCartItems } from '../../../redux/cart/cart-selector';
import { toggleCartHidden } from '../../../redux/cart/cart-actions';

/**
 * [cartDropDown description]
 * @param  {[type]} cartItems [description]
 * @param  {[type]} history   [description]
 * @param  {[type]} dispatch  [description]
 * @return {[type]}           [description]
 */
const cartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
  );

/**
 * [mapStateToProps description]
 * @type {[type]}
 */
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(cartDropDown));
