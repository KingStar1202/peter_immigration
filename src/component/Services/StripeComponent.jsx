import { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

function StripeComponent(props) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const amount = props.amount;
  const description = props.description;

  //   pk_test_51M5wNrGcZNQtrpugCDQgiEp5QTO63VqbOd7WuVBPhUBuEieATdS0jciPDHeo4BAyCBp083fg3yqTMtQFqdRKZmlL00ObKpHK36
  // se: pi_3MHWKVGcZNQtrpug1Ch0eYUC_secret_7ec98SBpXHzmGVbD0S4nOIgwt

  useEffect(() => {
    const public_key = 'pk_test_51M5wNrGcZNQtrpugCDQgiEp5QTO63VqbOd7WuVBPhUBuEieATdS0jciPDHeo4BAyCBp083fg3yqTMtQFqdRKZmlL00ObKpHK36';
    console.log(public_key);
    // const v =
    //   "pk_test_51Ie5hAKpKq207vNFE6Nnjrbd4FMxAkGdXaH2ewlcjrexLWaiy5Vw95i7QBzfHz2sppIpglGe7OT4WtE85kMejuvd00OrSmDVw1";
    setStripePromise(loadStripe(public_key));
  }, []);

  // useEffect(() => {
  //   setClientSecret("pi_3MHo67KpKq207vNF1E4JjWS9_secret_5XfRtgXv9DvLHbyBF4T5fVz9Z")
  // }, []);
  useEffect(() => {
    fetch("http://localhost:5600/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({amount : amount, description : description}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>

      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm amount={amount} />
        </Elements>
      )}
    </>
  );
}

export default StripeComponent;
