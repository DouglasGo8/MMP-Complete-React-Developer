import "./CartItem.scss";

/**
 *
 * @param {*} item
 * @returns
 */
const cartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="name">
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
};

export default cartItem;
