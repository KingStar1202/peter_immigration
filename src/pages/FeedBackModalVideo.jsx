import React from "react";

function FeedBackModalVideo({ video, open, setOpen, setVideo }) {
  const close = () => {
    setVideo(null);
    setOpen(false);
  };

  return (
    open &&
    video && (
      <div className="fixed w-screen h-screen flex items-center justify-center z-20 top-0 left-0 bg-[#000000cf]">
        <div className="w-[90%] sm:w-[75%] mx-auto rounded-md overflow-hidden">
          <div
            onClick={close}
            className="text-right text-red-600 font-bold cursor-pointer  "
          >
            X
          </div>
          <video className="rounded-md" autoPlay loop muted controls>
            <source alt="no" src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  );
}

export default FeedBackModalVideo;
