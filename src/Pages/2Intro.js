import React from "react";
import all_logo from "../Images/all-logo.png";
import hand_shake from "../Images/hand-shake.png";

const Intro = () => {
  return (
    <>
      <div className="container">
        <div className="intro-screen">
          <div className="intro-logo">
            <img alt="logo" src={all_logo} />
          </div>
          <div className="intro-content">
            <img alt="logo" src={hand_shake} />
            <h1>
              Welcome to
              <br />
              Bigcash Games !
            </h1>
            <p>
              Play and Win Cash Prizes For
              <br />
              Reaching Higher Levels.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Intro;