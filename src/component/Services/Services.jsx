import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  let service1 = useRef(null);
  let service2 = useRef(null);
  let service3 = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      service1,
      { x: -150, opacity: 0 },
      {
        scrollTrigger: service1,
        x: 0,
        duration: 0.7,
        opacity: 1,
        delay: 0.3,
        stagger: 1,
        ease: "power.out",
      }
    );
    gsap.fromTo(
      service2,
      { y: -150, opacity: 0 },
      {
        scrollTrigger: service2,
        y: 0,
        duration: 0.7,
        opacity: 1,
        delay: 0.3,
        ease: "power.out",
      }
    );
    gsap.fromTo(
      service3,
      { x: -150, opacity: 0 },
      {
        scrollTrigger: service3,
        x: 0,
        duration: 0.7,
        opacity: 1,
        delay: 0.3,
        ease: "power.out",
      }
    );
  }, []);
  const services = [
    {
      id: 1,
      title: "Case Study & Analysis",
      description:
        "When you connect with immigration consultants of ImmigrateCanada, We start case study & analysis to start immigration process.",
    },
    {
      id: 2,
      title: "Visa Assessment",
      description:
        "Visa assessment is process of filling form & entering your name,age,qualification,work experience marital status preferred destination etc.",
    },
    {
      id: 3,
      title: "Legal Document Assistance",
      description:
        "ImmigrateCanada Consultants collect your documents immigration files to prepare your immigration process.",
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 gap-7 py-16 container px-4 mx-auto">
      <div
        ref={(el) => (service1 = el)}
        className="bg-white p-7 shadow-lg rounded-2xl overflow-hidden"
      >
        <h2 className="mb-3 text-xl font-bold">Case Study & Analysis</h2>
        <p>
          When you connect with immigration consultants of ImmigrateCanada, We
          start case study & analysis to start immigration process.
        </p>
      </div>
      <div
        ref={(el) => (service2 = el)}
        className="bg-white p-7 shadow-lg rounded-2xl overflow-hidden"
      >
        <h2 className="mb-3 text-xl font-bold">Case Study & Analysis</h2>
        <p>
          When you connect with immigration consultants of ImmigrateCanada, We
          start case study & analysis to start immigration process.
        </p>
      </div>
      <div
        ref={(el) => (service3 = el)}
        className="bg-white p-7 shadow-lg rounded-2xl overflow-hidden"
      >
        <h2 className="mb-3 text-xl font-bold">Case Study & Analysis</h2>
        <p>
          When you connect with immigration consultants of ImmigrateCanada, We
          start case study & analysis to start immigration process.
        </p>
      </div>
    </div>
  );
};

export default Services;
