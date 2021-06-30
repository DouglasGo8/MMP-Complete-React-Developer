/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
import "./Header.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import Logo from "../../assets/svg/crown.svg";
import { selectCartHidden } from "../../redux/cart/cart-selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

import CartIcon from "../cart/cartIcon/CartIcon";
import CartDropDown from "../cart/cartDropDown/CartDropDown";
/**
 *
 * @returns
 */
const header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option">SIGN OUT</div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(header);
