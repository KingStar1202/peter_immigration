import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import canada from "../../images/service/canda.jpg";
import banner from "../../images/service/modern-stylish-red-wave.jpg";
import phoneNumber from "../../images/service/phone-number.png";
import phone from "../../images/service/phone.png";
import iStock from "../../images/service/istockphoto-1.png";
import "../../styles/Consultation.css";
import video from "../../videos/videoplayback.mp4";
import Services from "./Services";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Consultation = () => {
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
      { x: 150, opacity: 0 },
      {
        scrollTrigger: rightImg,
        x: 0,
        duration: 0.7,
        opacity: 1,
        delay: 0.3,
        ease: "power.out",
      }
    );
  }, []);
  return (
    <div
      className="relative -top-1 overflow-hidden"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "top bottom",
      }}
    >
      <div className="pt-10">
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center grid-cols-2 container mx-auto px-4 lg:space-x-32 lg:space-y-0 space-y-7">
          <div
            ref={(el) => (leftImg = el)}
            className="lg:w-2/3 w-full rounded-2xl"
          >
            <div className="css-1du3coz">
              <span className="css-3e0dsc">
                <span
                  className="wrapper lazy-load-image-background blur lazy-load-image-loaded"
                  style={{ color: "transparent", display: "inline-block" }}
                >
                  <img
                    className="css-6jrdpz rounded-xl"
                    alt="cover"
                    src={canada}
                  />
                </span>
              </span>
              <div
                className="absolute left-0 bottom-[-17%] w-full h-[110px]"
                style={{
                  zIndex: 1,
                  backgroundImage: `url(${iStock})`,
                  backgroundSize: "100% 100%",
                }}
              ></div>
            </div>
            <div className="bg-[#CD191A] p-6 rounded-b-2xl">
              <div className="lg:flex ">
                <div
                  className="water-wave-text-animation"
                  style={{ width: "100px" }}
                >
                  <h2>Phone</h2>
                  <h2>Phone</h2>
                </div>
                <div className="my-0 lg:mx-4">
                  <div
                    className="water-wave-text-animation"
                    style={{ width: "204px" }}
                  >
                    <h2>Consultation</h2>
                    <h2>Consultation</h2>
                  </div>
                </div>
                <div>
                  <div
                    className="water-wave-text-animation"
                    style={{ width: "144px" }}
                  >
                    <h2>Service</h2>
                    <h2>Service</h2>
                  </div>
                </div>
              </div>
              <p className="first-letter-upper text-white text-[20px]">
                This service will help you understand how we operate and how we
                can have a successful approval of your application since we have
                special access to a network of immigrations offices,officers and
                government individuals that other competitors of ours don’t have
                access to.
              </p>
            </div>
          </div>
          <div
            ref={(el) => (rightImg = el)}
            style={{
              overflowY: "hidden",
              width: "fit-content",
              height: "100%",
              position: "relative",
              opacity: 1,
              transform: "none",
            }}
          >
            <div
              className="iphone_div overflow-x-hidden h-full relative pointer-events-none"
              style={{
                width: "fit-content",
                opacity: 1,
                transform: "none",
                zIndex: 1,
              }}
            >
              <img
                height="100%"
                src={phone}
                style={{ minHeight: "400px" }}
                alt=""
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "1%",
                left: "3%",
                display: "flex",
                justifyContent: "center",
                borderRadius: "13%/7%",
                width: "94%",
                height: "98%",
                zIndex: 0,
                overflow: "hidden",
                backgroundColor: "#FF0800",
              }}
            >
              <div style={{ marginTop: "18%", width: "100%", padding: "5%" }}>
                <div
                  style={{
                    margin: "8% auto 0%",
                    fontSize: "20px",
                    textAlign: "center",
                    color: "white",
                    position: "relative",
                    width: "fit-content",
                  }}
                >
                  <p
                    className="text-shadow-1"
                    style={{ color: "white", fontSize: "2rem" }}
                  >
                    <span>☎</span> 5 min
                  </p>
                </div>
                <div
                  style={{
                    margin: "-2% auto 0%",
                    textAlign: "center",
                    color: "white",
                    position: "relative",
                    width: "fit-content",
                  }}
                >
                  <p style={{ color: "white", fontSize: "1.8rem" }}>
                    Consult with us
                  </p>
                </div>
                <div
                  className="css-r46qw5"
                  style={{
                    margin: "40% auto",
                    marginTop: "15%",
                    boxShadow: "0px 8px 20px #5a5c5ecf",
                    backgroundColor: "#fff",
                  }}
                >
                  <div className="css-18mhetb" style={{ padding: "5px" }}>
                    <video
                      className="col-12"
                      style={{
                        width: "100%",
                        borderRadius: "10px",
                        verticalAlign: "middle",
                      }}
                      autoPlay
                      muted
                      loop
                      __idm_id__="5685249"
                    >
                      <source alt="no" src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{ position: "absolute", width: "100%", bottom: "60px" }}
            >
              <div
                style={{
                  marginBottom: "5%",
                  fontSize: "25px",
                  textAlign: "center",
                  color: "white",
                  userSelect: "none",
                }}
              >
                <img
                  src={phoneNumber}
                  style={{ width: "60%", margin: "auto", borderRadius: "10px" }}
                  alt=""
                />
              </div>
              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginBottom: "15px",
                }}
              >
                <a
                  href="/payshedulecall"
                  style={{ textDecorationLine: "none" }}
                >
                  <button
                    className="pulsing_animation css-1974ds6"
                    type="button"
                  >
                    Schedule Call($150)
                    <span className="css-w0pj6f"></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Services />
      </div>
    </div>
  );
};

export default Consultation;
