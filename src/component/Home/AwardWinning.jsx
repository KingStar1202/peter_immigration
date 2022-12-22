import React from "react";
import award1 from "../../images/homePhoto/1.png";
import award2 from "../../images/homePhoto/2.png";
import award3 from "../../images/homePhoto/3.png";
import award4 from "../../images/homePhoto/4.webp";
import award5 from "../../images/homePhoto/5.png";
import award6 from "../../images/homePhoto/6.png";
import award7 from "../../images/homePhoto/7.png";
import partner4 from "../../images/homePhoto/bing-ads.png";
import partner from "../../images/homePhoto/google_partner.png";
import partner2 from "../../images/homePhoto/marketing-partners.png";
import partner3 from "../../images/homePhoto/shopify-plus.png";
import partner5 from "../../images/homePhoto/wp-engine.png";

import "../../styles/award.css";
import Collapse from "./Collapse";

const AwardWinning = () => {
  const awards = [
    { id: 1, img: award1 },
    { id: 2, img: award2 },
    { id: 3, img: award3 },
    { id: 4, img: award4 },
    { id: 5, img: award5 },
    { id: 6, img: award6 },
    { id: 7, img: award7 },
  ];
  const partners = [
    { id: 1, img: partner },
    { id: 2, img: partner2 },
    { id: 3, img: partner3 },
    { id: 4, img: partner4 },
    { id: 5, img: partner5 },
  ];

  return (
    <div className="bg-[#FF0038] pt-20 overflow-x-hidden">
      <div className="lg:container mx-auto px-20">
        <div
          data-projection-id="115"
          style={{ position: "relative", margin: "auto", width: "fit-content" }}
        >
          <h2 className="gradient-3d-text">
            <span>
              <strong className="underline--magical">Recognized</strong> and{" "}
              <strong className="underline--magical">Award-Winning</strong>{" "}
              Immigration Consulting Firm in Canada
            </span>
          </h2>
        </div>
        <p className="text-white font-[700] text-[20px] lg:text-left text-center">
          We work as a single United Team with market leading firms around the
          world and give our clients the highest quality advice possible.
        </p>
        <div className="lg:grid grid-cols-3">
          <div className="col-span-2">
            <h3 className="mt-10 text-white font-[700] text-[20px] lg:text-left text-center">
              AWARD:
            </h3>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-7 gap-5 award-brake">
              {awards.map((award) => (
                <div key={award.id}>
                  <img className="w-[120px]" src={award.img} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mt-10 text-white font-[700] text-[20px] lg:text-left text-center">
              PARTNERS:
            </h3>
            <div className="grid grid-cols-2 lg:gap-7 gap-4 ">
              {partners.map((partner) => (
                <div key={partner.id}>
                  <img className="w-[120px]" src={partner.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="top-4"
          style={{ position: "relative", margin: "auto", width: "fit-content" }}
        >
          <h1 className="gold-text" data-text="CANADA IMMIGRATION FAQ">
            <span
              className="gold-text__highlight"
              data-text="CANADA IMMIGRATION FAQ"
            >
              CANADA IMMIGRATION FAQ
            </span>
          </h1>
        </div>
        <div className="">
          <p className="text-[#D2D2D2] font-[700] lg:text-2xl text-xl text-center pt-4 pb-2">
            Are you considering moving to Canada but don’t know how to begin.
          </p>
          <div className="rounded-xl pb-10">
            <Collapse />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardWinning;
