import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import banner from "../../images/homePhoto/drew-unsplash.jpg";
import img from "../../images/homePhoto/Flag.png";
import video from "../../videos/immigration.mp4";

const Banner = () => {
  let immigrate = useRef(null);
  let text = useRef(null);
  let videoRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      immigrate,
      { scale: 28 },
      { scale: 1.4, ease: "power3.out", duration: 3 }
    );
    gsap.to(".full-immigrate", {
      scale: 0,
      ease: "power3.out",
      delay: 4.5,
      duration: 3,
    });
    gsap.to(".progress-bar", {
      width: "100%",
      duration: 4.5,
      ease: "power3.out",
    });
    gsap.fromTo(
      text,
      { scale: 0, opacity: 0 },
      { scale: 1, ease: "back.out(4)", duration: 9, delay: 7, opacity: 1,display:"none" }
    );
    gsap.to(videoRef, { duration: 10, delay: 16, display: "block" });
  }, []);
  return (
   <>
    <div
      className="overflow-x-hidden overflow-y-hidden w-screen h-screen fixed block z-[-1]"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="hidden"
        ref={(el) => (videoRef = el)}
        id="video_component"
        style={{ width: "100%", marginTop: "0px", opacity: 1 }}
      >
        <video
          autoPlay
          loop
          muted
          style={{ height: "100vh", width: "100%", objectFit: "cover" }}
        >
          <source alt="no" src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          className="contextMenu"
          style={{ display: "none", left: "179px", top: "117px" }}
        >
          <div className="optionsList customContextmenuArea1ListWrapper">
            <li className="optionListItem customContextmenuArea1ListItem">
              Control View
            </li>
            <li className="optionListItem customContextmenuArea1ListItem">
              Control Hide
            </li>
          </div>
        </div>
      </div>
      <div className="full-immigrate flex flex-col justify-center items-center">
        <div
          className="mx-auto flex justify-center items-center flex-col mt-32"
          ref={(el) => (immigrate = el)}
        >
          <img src={img} className="w-[200px] m-auto" alt="" />
          <h2 className="text-[#E50000] lg:text-5xl text-4xl font-bold text-center my-10">
            IMMIGRATE CANADA
          </h2>
        </div>
        <div className="mt-24 w-[900px] h-[5px] bg-[gray] inline-flex">
          <div className="bg-[#E50000] w-[0%] progress-bar"></div>
        </div>
      </div>
      <div ref={(el) => (text = el)} className="absolute top-36">
        <h2 className="text-[#E50000] lg:text-5xl text-2xl font-bold text-center my-10 mx-12" style={{lineHeight:'70px'}}>
          ImmigrateCanada where immigration is easier than ever with our unique
          approach to have you get a PR(Permanent Residency) card issued that no
          other competitor of our Industry has access to do so
        </h2>
      </div>
    </div>
    <div className="h-screen"></div>
   </>
  );
};

export default Banner;
