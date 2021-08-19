import StripeCheckout from "react-stripe-checkout";

import "./StripeButton.scss";

const stripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_bla12212xxoptp";

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={() => alert("Payment Successfully")}
      stripeKey=""
    />
  );
};

export default stripeCheckoutButton;
