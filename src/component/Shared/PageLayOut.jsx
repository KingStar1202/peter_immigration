import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function PageLayOut({ children }) {
  return (
    <>
      <div className="a-f-1">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
}

export default PageLayOut;
