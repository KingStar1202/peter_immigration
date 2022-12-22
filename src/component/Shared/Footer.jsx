import React from "react";
import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pb-[30px]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="basis-[25%] ">
            <p className="font-bold text-center lg:text-left text-[18px] py-[16px] text-white">
              © 2022. All rights reserved
            </p>
          </div>
          <div className="basis-[75%]">
            <div className="flex gap-y-5 flex-col lg:flex-row h-[100%] items-center justify-between">
              <a
                href="test.com"
                className="text-[0.8125rem] leading-[1.71429] text-white border border-[#fff] m-1 min-w-[64px] py-[3px] px-[9px] inline-flex items-center rounded-lg"
                target="_blank"
              >
                <span className="mr-2">
                  <FaFacebookF />
                </span>
                <span>FaceBook</span>
              </a>
              <a
                href="test.com"
                className="text-[0.8125rem] leading-[1.71429] text-white border border-[#fff] m-1 min-w-[64px] py-[3px] px-[9px] inline-flex items-center rounded-lg"
                target="_blank"
              >
                <span className="mr-2">
                  <FaInstagramSquare />
                </span>
                <span>InstagramSquare</span>
              </a>
              <Link to="/" className="text-white hover:underline font-bold">
                Terms & Service
              </Link>
              <Link to="/" className="text-white hover:underline font-bold">
                Disclaimer
              </Link>
              <Link to="/" className="text-white hover:underline font-bold">
                Privacy Policy
              </Link>
              {/* <Link
                to="/feed-back"
                className="text-white hover:underline font-bold"
              >
                Feedback
              </Link> */}
            </div>
          </div>
        </div>
        <div>
          <p className="text-white leading-[1.5] first-letter-upper text-center lg:text-left mt-5 lg:mt-0 ">
            Disclaimer: ImmigrateCanada is mainly an Immigration and Visa
            Consultancy service provider and we are not associated with any
            Immigration Department or Government Authority. ImmigrateCanada does
            not provide any job employment service. We only assist our aspirants
            for various visa application process and deliver required service
            assistance. The mentioned material on this website is for
            information purposes only and does not constitute any legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
