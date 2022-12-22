import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/my_style.css";
import { AiOutlineHome } from "react-icons/ai";

import logo from "../../images/logo.png";

const HumBurgerMenu = ({ clickMenu, setClickMenu }) => {
  const menuRef = useRef(null);

  const clickOutSide = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setClickMenu(false);
    }
  };

  return (
    <div
      className={`fixed z-[99999999999] top-0 h-full h-menu ${
        clickMenu ? "w-full" : "w-0"
      }`}
      onClick={(e) => clickOutSide(e)}
    >
      <div
        ref={menuRef}
        className={`w-[200px] pl-12 fixed top-0 h-full block bg-[white]  space-y-5 shadow-md pt-3 duration-500 lg:hidden ${
          clickMenu ? "left-0" : "-left-[200px]"
        }`}
      >
        <img className="w-12" src={logo} alt="" />
        <div className={`text-[15px] space-y-5 font-[400] hum-menu`}>
          <Link to="/">
            <AiOutlineHome className="mr-2" /> HOME
          </Link>
          <Link to="/service">
            <AiOutlineHome className="mr-2" /> SERVICES
          </Link>
          <Link to="/contact-us">
            <AiOutlineHome className="mr-2" /> CONTACT US
          </Link>
          <Link to="/about-us">
            <AiOutlineHome className="mr-2" /> ABOUT US
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HumBurgerMenu;
