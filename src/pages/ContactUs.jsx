import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import whatsApp from "../assets/icons/MeanFluffyGlassfrog-size_restricted.gif";
import emailIcon from "../assets/icons/orange-envelope-icon-28.png";
import img1 from "../assets/images/contact/79cd1a01-a071-41c0-a09e-ef7ca5c3bc93_1628233683859.png";
import PageLayOut from "../component/Shared/PageLayOut";
import "../styles/contact.css";

function ContactUs() {
  let contactIcon = useRef();
  useEffect(() => {
    const text = new SplitType(".target");
    gsap.fromTo(
      ".char",
      { y: 70, opacity: 0 },
      { y: 0, duration: 0.7, stagger: 0.04, ease: "power3.inOut", opacity: 1 }
    );
    gsap.fromTo(
      ".form-animation",
      { y: 100, opacity: 0 },
      {
        y: 0,
        duration: 0.4,
        delay: 0.5,
        stagger: 0.09,
        ease: "power3.InOut",
        opacity: 1,
      }
    );
    gsap.fromTo(
      contactIcon,
      { y: -200, opacity: 0 },
      { y: 0, opacity: 1, delay: 0.55, duration: 0.5 }
    );
  }, []);
  return (
    <PageLayOut>
      <div className="contact">
        <div className=" ">
          <div className=" wrapper">
            <div className="h-[auto] pb-[40px] md:pb-0 md:h-[200px]">
              <div className=" container mx-auto px-[16px] md:px-6">
                <div className="pt-[100px] w-full flex flex-wrap items-center justify-center gap-y-4">
                  <div className="tra tra1 overflow-hidden">
                    <h1 className="text-[48px] font-bold">
                      <h2 class="target">WANT</h2>
                    </h1>
                    <h1 className="mr-[16px] text-[48px] font-bold">
                      <h2 class="target">TO</h2>
                    </h1>
                  </div>
                  <div className="tra tra2 overflow-hidden ">
                    <h1 className="text-white text-[48px] font-bold">
                      <h2 class="target">LIVE</h2>
                    </h1>
                    <h1 className="mr-[16px] text-[48px] font-bold">
                      <h2 class="target">IN</h2>
                    </h1>
                  </div>
                  <div className="tra tra1 overflow-hidden ">
                    <h1 className="mr-[16px] text-[48px] font-bold">
                      <h2 class="target">CANADA?</h2>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-6 pt-[48px]">
              <div className="flex flex-col md:flex-row">
                <div className="basis-[25%]">
                  <div className="contact-img-w overflow-hidden">
                    <div className="h-full">
                      <img className="h-full" src={img1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="basis-[25%] min-h-[190px] relative md:pl-[48px]">
                  <div
                    ref={(el) => (contactIcon = el)}
                    className="absolute bottom-0 grid grid-cols-1 gap-[8px] pb-3"
                  >
                    <div>
                      <div className="homepage2-card email-icon rounded-full w-[48px] h-[48px]">
                        <a href="test.com" target="_blank">
                          <img src={emailIcon} alt="" />
                        </a>
                      </div>
                      <div>
                        <h6 className="MuiTypography-root MuiTypography-subtitle2 css-phqz62">
                          Info@immigratecanada.com
                          <br />
                        </h6>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="contact_icon rounded-full w-[48px] h-[48px]">
                          <a href="tel:+18004619999">
                            <img src={whatsApp} alt="" />
                          </a>
                        </div>
                      </div>
                      <div>
                        <h6 className="MuiTypography-root MuiTypography-subtitle2 css-phqz62">
                          1-800-461-9999
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-[50%] md:pl-[48px] pt-[48px] ">
                  <div className="contact-box">
                    <div className="form-animation">
                      <h3 className="text-[30px] font-semibold text-[#212B36]">
                        Feel free to contact us.
                      </h3>
                    </div>
                    <div className="mt-[32px] space-y-[24px]">
                      <div className="form-animation">
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300  appearance-none  focus:outline-none focus:ring-0 focus:border-[#FA2929] peer"
                            placeholder=" "
                          />
                          <label
                            for="name"
                            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#FA2929] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                          >
                            Name
                          </label>
                        </div>
                      </div>
                      <div className="form-animation">
                        <div className="relative">
                          <input
                            type="text"
                            id="email"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300  appearance-none  focus:outline-none focus:ring-0 focus:border-[#FA2929] peer"
                            placeholder=" "
                          />
                          <label
                            for="email"
                            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#FA2929] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                          >
                            Email
                          </label>
                        </div>
                      </div>
                      <div className="form-animation">
                        <div className="relative">
                          <input
                            type="text"
                            id="subject"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300  appearance-none  focus:outline-none focus:ring-0 focus:border-[#FA2929] peer"
                            placeholder=" "
                          />
                          <label
                            for="subject"
                            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#FA2929] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                          >
                            Subject
                          </label>
                        </div>
                      </div>
                      <div className="form-animation">
                        <div className="relative">
                          <textarea
                            type="text"
                            id="message"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300  appearance-none  focus:outline-none focus:ring-0 focus:border-[#FA2929] peer h-[92px]"
                            placeholder=" "
                            col="50"
                            row="40"
                          />
                          <label
                            for="message"
                            className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-[#FA2929] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                          >
                            Enter your message
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-[32px] from-animation">
                      <button
                        className="inline-block text-[0.9375rem] min-w-[64px] h-[48px] rounded-lg text-white py-[6px] px-[12px] font-bold bg-[#FF3030]"
                        type="button"
                      >
                        Submit Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayOut>
  );
}

export default ContactUs;
