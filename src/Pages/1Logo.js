import React from "react";
import img_logo from "../Images/bigcash-logo.png";

const Logo = () => {
  return (
    <>
      <div className="container">
        <div className="center-logo">
          <img alt="logo" src={img_logo} />
        </div>
      </div>
    </>
  );
};
export default Logo;