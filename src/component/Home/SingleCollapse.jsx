import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function SingleCollapse({ data }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`bg-white p-3 border-b relative ${
        open
          ? "rounded-xl my-5"
          : data.id === 1
          ? "rounded-t-xl"
          : data.id === 3 && "rounded-b-xl"
      }`}
    >
      <h6
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center cursor-pointer text-[16px] font-[600]"
      >
        {data.title}
        <IoIosArrowDown
          className={`lg:w-auto w-full md:w-auto ${open ? "rotate-180" : ""}`}
        />
      </h6>
      <p
        className={`text-[#212b36] text-[16px] font-[400] overflow-hidden ${
          open ? "block pt-4 duration-1000 " : "hidden duration-1000"
        }`}
      >
        {data.desc}
      </p>
    </div>
  );
}

export default SingleCollapse;
