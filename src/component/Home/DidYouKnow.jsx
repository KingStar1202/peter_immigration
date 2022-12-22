import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import img1 from "../../images/homePhoto/img-1.webp";
import img2 from '../../images/homePhoto/img-2.png'
import img3 from '../../images/homePhoto/img-3.webp'
import img4 from "../../images/homePhoto/img-4.webp";
import img5 from "../../images/homePhoto/img-5.jpg";
import "../../styles/didYouKnow.css";
import service1 from "../../assets/images/services/service1.webp"
import service2 from "../../assets/images/services/service2.png"
import service3 from "../../assets/images/services/service3.webp"
import service4 from "../../assets/images/services/service4.webp"
import service5 from "../../assets/images/services/service5.jpg"
const knows = [
  {
    id: 1,
    text: (
      <p className="lg:text-[20px] lg:font-[600]">
        Ottawa reveals plan to welcome 500,000 immigrants per year by 2025
      </p>
    ),
    img: service1,
    href: "https://www.cbc.ca/news/politics/canada-immigration-500000-2025-1.6636661",
    date: "Nov 01, 2022 12:36 PM ET | Last Updated: November 2",
  },
  {
    id: 2,
    text: "Ottawa reveals plan to welcome 500,000 immigrants a year by 2025",
    img: img2,
    href: "https://www.ctvnews.ca/politics/feds-reveal-plan-to-welcome-500-000-immigrants-per-year-by-2025-1.6133962",
    date: "Published Nov. 1, 2022 6:45 p.m. +03 | Updated Nov. 2, 2022 3:11 a.m. +03",
  },
  {
    id: 3,
    text: "Canada to admit 1.4 million immigrants in three years to address labour shortages",
    img: img3,
    href: "https://www.cbc.ca/news/politics/canada-immigration-500000-2025-1.6636661",
    date: "Nov 01, 2022 • November 1, 2022",
  },
  {
    id: 4,
    text: "Ottawa aims to welcome 500,000 immigrants per year by 2025",
    img: img4,
    href: "https://www.theglobeandmail.com/canada/article-canada-immigration-targets-2025",
    date: "PUBLISHED NOVEMBER 1, 2022",
  },
  {
    id: 5,
    text: "Canada Plans to Welcome Record Half Million Immigrants in 2025",
    img: img5,
    href: "https://www.bloomberg.com/news/articles/2022-11-01/canada-plans-to-welcome-record-half-million-immigrants-in-2025",
    date: "November 1, 2022 at 11:52 PM GMT+8",
  },
];
const DidYouKnow = () => {
  let didYou = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      didYou,
      { translateY: -100, opacity: 0, letterSpacing: "30px" },
      {
        translateY: 0,
        delay: 0.4,
        duration: 0.7,
        opacity: 1,
        letterSpacing: 0,
        ease: "power3.out",
      }
    );
  }, []);
  return (
   <div className="bg-white pt-3">
     <div className="lg:container mx-auto lg:px-12 px-3 ">
      <h2
        ref={(el) => (didYou = el)}
        className="text-[#E50000] lg:text-6xl text-4xl font-bold text-center mb-10 did-you-know"
      >
        Did you know?
      </h2>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-3 lg:space-y-0 space-y-12 pb-10">
        {knows.slice(0, 3).map((know) => (
          <div key={know.id} className="single-know-item lg:block hidden">
            <div className="know-item">
              <div className="know-item-content">
                <div className="know-item-date">{know.date}</div>
                <a
                  className="know-item-link"
                  target="_blank"
                  rel="noreferrer"
                  href={know.href}
                >
                  <h5 className="know-item-link-text">{know.text}</h5>
                </a>
              </div>
              <div className="know-item-overly"></div>
              <span className="know-item-img-section">
                <span
                  className="wrapper lazy-load-image-background blur lazy-load-image-loaded"
                  style={{ color: "transparent", display: "inline-block" }}
                >
             
                  <img src={know.img} alt=""  className="know-item-img"/>
                </span>
              </span>
            </div>
          </div>
        ))}
        {knows.map((know) => (
          <div key={know.id} className="w-full lg:hidden">
            <img
              className="rounded-t-[20px] h-2/3 w-full bg-black"
              src={know.img}
              alt=""
            />
            <div className="py-6 px-5 shadow-md rounded-b-2xl h-[150px]">
              <p className="text-[12px] font-[400] text-[#999] py-2">
                {know.date}
              </p>
              <a className="hover:underline font-[600]" href={know.href}>
                {know.text}
              </a>
            </div>
          </div>
        ))}
        <div className="lg:flex block gap-3 space-y-3 lg:space-y-0">
          {knows.slice(3, 5).map((know) => (
            <div key={know.id} className="w-full lg:block hidden">
              <img className="rounded-t-[20px]" src={know.img} alt="" />
              <div className="py-3 px-4 shadow-md rounded-b-2xl">
                <p className="text-[12px] font-[400] text-[#999] py-2">
                  {know.date}
                </p>
                <a
                  className="hover:underline font-[600] overflow-hidden text-ellipsis know-text text-sm"
                  href={know.href}
                >
                  {know.text}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
};

export default DidYouKnow;
