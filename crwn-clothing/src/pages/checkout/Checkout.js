/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './Checkout.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckOutItem from '../../components/checkoutItem/CheckoutItem';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart-selector';

/**
 * [checkOut description]
 * @return {[type]} [description]
 */
const checkOut = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckOutItem
        key={cartItem.id}
        cartItem={cartItem}
      />
))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

/**
 * [mapStateToProps description]
 * @type {[type]}
 */
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(checkOut);
