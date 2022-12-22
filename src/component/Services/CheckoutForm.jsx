import { CardElement, PaymentElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const amount = props.amount;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsProcessing(false);
  };


  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <div
        className="w-full p-[15px] text-[16px] font-bold"
        style={{
          opacity: 1,
          transform: "none",
        }}
      >
        Permanent Residency : ${amount}
      </div>
      <div className="relative input-box pb-2">
        <input
          className="w-full p-[10px] border-[2px] rounded-lg outline-none  text-[20px] py-[11.5px] px-[14px]"
          type="email"
        />
        <span className="absolute left-0 py-[14px] px-3 pointer-events-none text-[16px] text-[#919eab]">
          Email Address
        </span>
      </div>
      <PaymentElement
        id="payment-element"
        options={{
          paymentMethodOrder: ["card"],
        }}
      />

      <div className="mt-[20px]">
        <button className="submit-button  " type="button">
          Pay now
          <span className="css-w0pj6f"></span>
        </button>
      </div>
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
