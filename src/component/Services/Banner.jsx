import React, { useEffect, useRef } from "react";
import banner from "../../images/service/service-banner.jpg";
import years from "../../images/service/15years.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  let bar = useRef();
  let success = useRef(null);
  let image = useRef(null);
  let text = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      success,
      {
        y: 180,
        opacity: 0,
      },
      {
        scrollTrigger: success,
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 0.3,
        ease: "power3.Out",
      }
    );
    gsap.fromTo(
      bar,
      {
        x: -80,
        opacity: 0,
      },
      {
        scrollTrigger: success,
        opacity: 1,
        x: 0,
duration:.4,
        ease: "power3.Out",
      }
    );
    gsap.fromTo(
      image,
      {
        x: 100,
        opacity: 0,
      },
      {
        scrollTrigger: image,
        opacity: 1,
        x: 0,
        duration: 0.7,
        delay: 0.5,
        ease: "power3.Out",
      }
    );
    gsap.fromTo(
      text,
      {
        x: 160,
        opacity: 0,
      },
      {
        scrollTrigger: text,
        opacity: 1,
        x: 0,
        duration: 0.7,
        delay: 0.7,
        ease: "power3.Out",
      }
    );
  }, []);
  const percentage = 90;
  return (
    <div
      className="flex justify-center items-center lg:py-36 md:py-28 py-20 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(0deg, rgb(179, 1, 25), transparent),url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto lg:px-20 mt-20">
        <div className="flex lg:flex-row flex-col lg:justify-start items-center space-x-16">
          <div className="flex flex-row justify-center items-center space-x-12">
            <div ref={el => bar = el} style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                styles={buildStyles({
                  textSize: "26px",
                  textColor: "#ffffff",
                  pathColor: `#ffffff`,
                  trailColor: "rgba(145, 158, 171, 0.16)",
                  backgroundColor: "rgba(145, 158, 171, 0.16)",
                })}
                value={percentage}
                text={`${percentage}%`}
              />
            </div>
            <h3
              ref={(el) => (success = el)}
              className="lg:text-5xl text-4xl text-white font-bold"
            >
              Success Rate
            </h3>
          </div>
          <div className="lg:mt-0 mt-10">
            <img
              ref={(el) => (image = el)}
              className="w-[150px]"
              src={years}
              alt=""
            />
          </div>
        </div>
        <p
          ref={(el) => (text = el)}
          className="text-white lg:text-2xl text-xl font-semibold mt-16 text-center lg:text-left"
        >
          Successful applications will receive a free guidebook of ours to help
          you explore Canada, we also offer 15% discount with our partners such
          as Expedia,Walmart,Enterprise
        </p>
      </div>
    </div>
  );
};

export default Banner;
