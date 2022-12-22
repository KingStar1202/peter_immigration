import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Form from "../component/Form";
import "../styles/pay.css";
import PageLayOut from "./../component/Shared/PageLayOut";
 import StripeComponent from './../component/Services/StripeComponent';

const PayPermanentResidency = () => {
  let payment = useRef(null);
  let paymentTitle = useRef(null);
  let emailInput = useRef(null);
  let cardForm = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      payment,
      { x: -150, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5 }
    );
    gsap.fromTo(
      paymentTitle,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.6 }
    );
    gsap.fromTo(
      emailInput,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, delay: 0.6 }
    );
    gsap.fromTo(
      cardForm,
      { y: 5, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.1, delay: 1.1 }
    );
  }, []);
  return (
    <PageLayOut>
      <div className="pay-permanent mt-8 pb-12">
        <div ref={(el) => (payment = el)} className="pay-container" dir="ltr">
          <div className="pay-padding">
            {/* <form id="payment-form" className="m-auto">
              <div className="pay-permanent-title" data-projection-id="1">
                <div
                  ref={(el) => (paymentTitle = el)}
                  className="w-full p-[15px] text-[16px] font-[600]"
                  style={{
                    opacity: 1,
                    transform: "none",
                  }}
                >
                  Permanent Residency : $3999.99
                </div>
                <div
                  ref={(el) => (emailInput = el)}
                  className="relative input-box pb-2"
                >
                  <input
                    className="w-full p-[10px] border-[2px] rounded-lg outline-none  text-[20px] py-[11.5px] px-[14px]"
                    type="email"
                  />
                  <span className="absolute left-0 py-[14px] px-3 pointer-events-none text-[16px] text-[#919eab]">
                    Email Address
                  </span>
                </div>
                <div
                  ref={(el) => (cardForm = el)}
                  data-projection-id="4"
                  style={{ opacity: 1, transform: "none" }}
                >
                  <Form />
                  <button className="submit-button" tabIndex="0" type="button">
                    Pay now
                    <span className="css-w0pj6f"></span>
                  </button>
                </div>
              </div>
            </form> */}
            <StripeComponent amount={"3999.99"} description={"Permanent Residency"}/>
          </div>
        </div>
      </div>
    </PageLayOut>
  );
};

export default PayPermanentResidency;
