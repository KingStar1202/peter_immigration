import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import canada from "../../images/service/canda-permanent-residency.jpg";
import discount from "../../images/service/discount_circle.png";
import stock from "../../images/service/istockphoto.png";
import banner from "../../images/service/PermanentResidency.jpg";
import "../../styles/permanent.css";
gsap.registerPlugin(ScrollTrigger);

const PermanentResidency = () => {
  let leftImg = useRef(null);
  let rightImg = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      leftImg,
      { x: -150, opacity: 0 },
      {
        scrollTrigger: leftImg,
        x: 0,
        duration: 0.7,
        opacity: 1,
        delay: 0.3,
        ease: "power.out",
      }
    );
    gsap.fromTo(
      rightImg,
      { x: -150, opacity: 0 },
      {
        scrollTrigger: rightImg,
        x: 0,
        duration: 0.7,
        opacity: 1,
        delay: 0.6,
        ease: "power.out",
      }
    );
  }, []);
  return (
    <div
      className="relative top-1 pb-16"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "top",
      }}
    >
      <div className="px-5">
        <div
          className="layout-css pt-4 flex flex-col lg:flex-row"
          sx="[object Object]"
          data-projection-id="33"
        >
          <div className="css-9pvc8p lg:basis-1/2 basis-full lg:w-1/2">
            <div
              data-projection-id="34"
              style={{
                position: "relative",
                textAlign: "center",
                width: "fit-content",
                marginLeft: "auto",
              }}
            >
              <h3 className="gold-text" data-text="Permanent">
                <span
                  className="gold-text__highlight"
                  data-text="Permanent"
                  data-projection-id="35"
                >
                  Permanent
                </span>
              </h3>
            </div>
          </div>
          <div className="css-9pvc8p lg:basis-1/2 basis-full lg:w-1/2">
            <div
              data-projection-id="36"
              style={{
                position: "relative",
                textAlign: "center",
                width: "fit-content",
              }}
            >
              <h3 className="gold-text" data-text="Residency">
                <span
                  className="gold-text__highlight"
                  data-text="Residency"
                  data-projection-id="37"
                >
                  Residency
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div
          className="layout-css pt-4 flex flex-col lg:flex-row space-x-6"
          data-projection-id="38"
        >
          <div
            ref={(el) => (leftImg = el)}
            className="css-9pvc8p lg:basis-1/2 basis-full lg:w-1/2"
          >
            <div
              data-projection-id="39"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className=" css-11fag12">
                <div className="css-yw2qn4">
                  <div
                    data-projection-id="40"
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "15px",
                      color: "rgb(255, 255, 255)",
                      textAlign: "center",
                      fontSize: "3.5em",
                      fontWeight: "900",
                    }}
                  >
                    $ 3999.99
                  </div>
                </div>
                <div className="skew-style css-qxnran">
                  <div
                    className="discountOffer"
                    data-projection-id="41"
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "-22px",
                      zIndex: "2",
                    }}
                  >
                    <img
                      className="zoom-in-out-box"
                      src={discount}
                      data-projection-id="42"
                      style={{ width: "100px" }}
                      alt=""
                    />
                  </div>
                  <div
                    data-projection-id="43"
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "10px",
                      color: "rgb(255, 0, 56)",
                      textAlign: "center",
                      fontSize: "2em",
                      fontWeight: "900",
                      border: " 5px solid rgb(205, 0, 33)",
                      borderRadius: "15px",
                    }}
                  >
                    $ 2999.99
                  </div>
                </div>
                <div
                  data-projection-id="44"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    marginTop: "45px",
                    marginBottom: "15px",
                  }}
                >
                  <Link
                    to="/paypermanentresidency"
                    style={{ texDecorationLine: "none" }}
                  >
                    <button
                      className="submit-button hover:shadow-2xl"
                      tabIndex="0"
                      type="button"
                    >
                      Apply Now
                      <span className="css-w0pj6f"></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div
              data-projection-id="45"
              style={{ opacity: 1, transform: "none" }}
            ></div>
          </div>
          <div
            ref={(el) => (rightImg = el)}
            className="css-9pvc8p lg:basis-1/2 basis-full lg:w-1/2"
          >
            <div
              data-projection-id="46"
              style={{ opacity: 1, transform: "none" }}
            >
              <div
                className="css-r46qw5"
                style={{
                  boxShadow: "rgba(90, 92, 94, 0.81) -40px 40px 80px",
                  backgroundColor: "rgb(205, 25, 26)",
                }}
              >
                <div className="css-1du3coz">
                  <div data-projection-id="47">
                    <span className="css-3e0dsc">
                      <span
                        className="wrapper lazy-load-image-background blur lazy-load-image-loaded"
                        style={{
                          color: "transparent",
                          display: "inline-block",
                        }}
                      >
                        <img
                          className="css-6jrdpz"
                          alt="cover"
                          src={canada}
                          sx="[object Object]"
                        />
                      </span>
                    </span>
                  </div>
                  <div
                    data-projection-id="48"
                    className="absolute left-0 -bottom-4 w-full lg:h-[110px] md:h-[130px] h-[170px]"
                    style={{
                      zIndex: 1,
                      backgroundImage: `url(${stock})`,
                      backgroundSize: "100% 100%",
                    }}
                  ></div>
                </div>
                <div className="p-[24px] text-[20px] -mt-12">
                  <p
                    className="first-letter-upper"
                    style={{ color: "white", zIndex: 2 }}
                  >
                    We have a unique approach to help you get a PR(Permanent
                    Residency) card issued that other competitors of our
                    industry don’t have access to the level that we’re able to
                    do so.
                    <br />
                    Our guarantee for the success of your application is 100% as
                    we have the resources to back it up, if you would like to
                    understand how this process works, book a phone call and
                    we’ll explain in details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermanentResidency;
