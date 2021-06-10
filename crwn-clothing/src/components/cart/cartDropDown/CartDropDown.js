import "./CartDropDown.scss";

import CustomButton from "../../button/Button";

/**
 *
 * @returns
 */
const cartDropDown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default cartDropDown;
