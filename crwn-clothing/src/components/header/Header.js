import "./Header.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Logo from "../../assets/svg/crown.svg";
/**
 *
 * @returns
 */
const header = ({ currentUser }) => {
  return (
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
      </div>
    </div>
  );
};

const mapStateToProps = (state) =>
  /*console.log(state);*/
  ({
    currentUser: state.user.currentUser,
  });

export default connect(mapStateToProps)(header);
