import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import women1 from "../assets/fff.jpg";
import PageLayOut from "./../component/Shared/PageLayOut";
import videoSrc from "../videos/videoplayback.mp4";
import youtubeIcon from "../assets/images/services/youtube.png";

import { Navigation, Pagination, Autoplay } from "swiper";
import FeedBackModalVideo from "./FeedBackModalVideo";

function FeedBackPage() {
  const feedBackList = [
    {
      name: "Samuel Schick",
      text: `Aenean pulvinar dui ornare, feugiat lorem non, ultrices
            justo. Mauris efficitur, mauris in auctor euismod, quam
            elit ultrices urna, eget eleifend arcu risus id metus.
            Maecenas ex enim, mattis eu velit vitae, blandit mattis
            sapien. Sed aliquam leo et semper vestibulum.`,
      img: women1,
      video: videoSrc,
    },
    {
      name: "Samuel Schick",
      text: `Aenean pulvinar dui ornare, feugiat lorem non, ultrices
            justo. Mauris efficitur, mauris in auctor euismod, quam
            elit ultrices urna, eget eleifend arcu risus id metus.
            Maecenas ex enim, mattis eu velit vitae, blandit mattis
            sapien. Sed aliquam leo et semper vestibulum.`,
      img: women1,
      video: videoSrc,
    },
    {
      name: "Samuel Schick",
      text: `Aenean pulvinar dui ornare, feugiat lorem non, ultrices
            justo. Mauris efficitur, mauris in auctor euismod, quam
            elit ultrices urna, eget eleifend arcu risus id metus.
            Maecenas ex enim, mattis eu velit vitae, blandit mattis
            sapien. Sed aliquam leo et semper vestibulum.`,
      img: women1,
      video: videoSrc,
    },
  ];

  const [open, setOpen] = useState(false);
  const [video, setVideo] = useState(null);

  const openVideo = (v) => {
    setVideo(v);
    setOpen(true);
  };

  const handleOn = (e) => {
    console.log(e.target.play());
  };
  const handleOut = (e) => {
    console.log(e.target.pause());
  };

  return (
    <PageLayOut>
      <div className="pt-[100px] pb-[50px] container px-[16px] mx-auto md:px-6 ">
        <div>
          <div className="flex md:flex-row flex-col gap-7">
            <div className="basis-[100%] md:max-w-[100%]">
              <Swiper
                navigation={true}
                modules={[Navigation, Pagination]}
                className="mySwiper pb-[30px]"
                pagination={true}
                loop={true}
              >
                {feedBackList.map((el, i) => (
                  <SwiperSlide key={i}>
                    <div>
                      <div className="flex flex-col items-center px-[50px] gap-[20px]">
                        <div
                          onClick={() => openVideo(el.video)}
                          className="border-[10px] feedbackImgW relative border-[#f1c50e] w-[216px] md:w-[272px] h-[216px] md:h-[272px] overflow-hidden rounded-full"
                        >
                          <img
                            src={el.img}
                            alt=""
                            className="w-full h-full transformBYC"
                          />
                          <img
                            src={youtubeIcon}
                            style={{background:"transparent", opacity:"0.5"}}
                            className="absolute w-[100px] top-[30%] left-[30%] transformBYC"
                            alt=""
                          />
                          <video
                            className="hover:scale-110 duration-700 rounded-t-xl"
                            onMouseEnter={handleOn}
                            onMouseOut={handleOut}
                            muted={true}
                            onVolumeChange = {0}
                            controls
                          >
                            {
                              <source
                                alt="no"
                                src={el.video}
                                type="video/mp4"
                              />
                            }
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="text-center">
                          <p>"{el.text}"</p>
                          <h3 className="mt-[20px] font-bold tracking-[3px] text-[1.25rem] leading-[1.2]">
                            {" "}
                            {el.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              ;
            </div>
          </div>
        </div>
      </div>

      <FeedBackModalVideo
        video={video}
        setVideo={setVideo}
        open={open}
        setOpen={setOpen}
      />
    </PageLayOut>
  );
}

export default FeedBackPage;
