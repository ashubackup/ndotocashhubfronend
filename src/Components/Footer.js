import React from "react";
import { Link } from "react-router-dom";
import home_icon from "../Images/home-white-icon.svg";
import score_icon from "../Images/score-icon.svg";
import leader_icon from "../Images/leader-icon.svg";
import prize_icon from "../Images/prize-icon.svg";

const Footer=(prop)=> {

  return (
    <>
      <div className="footer-menu">
        <div className="col-md-3 col-xs-3">
          <Link to="/home" className={prop.one}>
            <img alt="logo" src={home_icon} />
            Home{" "}
          </Link>
        </div>
        <div className="col-md-3 col-xs-3 active">
          <Link to="/score" className={prop.two}>
            <img alt="logo" src={score_icon} />
            Score{" "}
          </Link>
        </div>
        <div className="col-md-3 col-xs-3">
          <Link to="/leader" className={prop.three}>
            <img alt="logo" src={leader_icon} />
            Leaderboard{" "}
          </Link>
        </div>
        <div className="col-md-3 col-xs-3">
          <Link to="/prize" className={prop.four}>
            <img alt="logo" src={prize_icon} />
            Prizes
          </Link>
        </div>
      </div>
    </>
  );
};
export default Footer;