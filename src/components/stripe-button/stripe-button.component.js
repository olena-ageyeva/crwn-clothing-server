import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { ReactComponent as Logo } from "../../assets/crown.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey =
    "pk_test_51I4phGCc6kJdlhxBXjvebwYJQ0gErOFB9b05HDOppSKCdymlM84gunDuO7SejWUC7uVPEOiBZpvfdASzxtIqPRQY00RiXPX7Ml";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
