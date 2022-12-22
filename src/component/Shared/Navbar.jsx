import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FiMenu } from "react-icons/fi";
import HumBurgerMenu from "./HumBurgerMenu";
const Navbar = () => {
  const [clickMenu, setClickMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
 
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });



  return (
    <nav
      className={`fixed top-0 z-[9999999999] w-full ${
        scroll ? "active-menu duration-700 ease-in-out" : ""
      }`}
    >
      <div className="flex justify-between items-center lg:container mx-auto py-3 px-12">
        <img className="w-12" src={logo} alt="" />
        <div
          className={`text-[15px] lg:block hidden space-x-7 font-[600] ${
            scroll ? "text-white" : "text-[#e50000]"
          }`}
        >
          <Link to="/">HOME</Link>
          <Link to="/service">SERVICES</Link>
          <Link to="/feed-back">FEED BACK</Link>
          <Link to="/contact-us">CONTACT US</Link>
          <Link to="/about-us">ABOUT US</Link>
        </div>
        <FiMenu
          className="lg:hidden"
          onClick={() => setClickMenu(!clickMenu)}
        />
      </div>
      {<HumBurgerMenu clickMenu={clickMenu} setClickMenu={setClickMenu}/>}
    </nav>
  );
};

export default Navbar;
