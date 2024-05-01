import React from "react";
import {ToastContainer,toast} from "react-toastify";
import Footer from "../Components/Footer";
import score_icon from "../Images/score-icon.png";
import menu_icon from "../Images/menu-icon.svg";
import demo_img from "../Images/demo-img.png";
import trophy from "../Images/trophy.png";
import Menu from "../Components/Menu";
import { sendScoreApi } from "../Data/Api";
import { useEffect } from "react";
import Post from "../Request/Post";
import { useState } from "react";
import Loader from "../Components/Loader";

const Score = () => {

  //to run on load
  useEffect(()=>{
    getScoreFromBackend();
  },[]);

  //Method to get score
  const getScoreFromBackend=()=>{
    let promise=Post(sendScoreApi,{"ani":localStorage.getItem("ani")})
    promise.then(e=>{
      handleScoreResponse(e);
    })
  }

  const[topScore,setTopScore]=useState('0');
  const[userScore,setUserScore]=useState('0');

  const[loader,setLoader]=useState('block');

  //Method to handle score response
  const handleScoreResponse=(e)=>{
    console.log("e ",e);
    setLoader('none');

    if(e.response==='3')
    {
      toast.error("Something Went Wrong");
    }
    else if(e.response==='0')
    {
      toast.error("Something Went Wrong");
    }
    else if(e.response==='1')
    {
      setTopScore(e.topScore);
      setUserScore(e.userScore);  
    }
    else
    {
      toast.error("Something Went Wrong");
    }
  }

  return (
    <>
    <ToastContainer/>
    <Loader value={loader}/>
      <Menu one="inactive"two="active"three="inactive"four="inactive"five="inactive"six="inactive"/>
      <div className="container white-bg">
        <div className="cus-header">
          <div className="col-md-6 col-xs-6">
            <div className="page-icon">
              <img alt="logo" src={score_icon} /> 
              <span className="text-unselect">Score</span>
            </div>
          </div>
          <div className="col-md-6 col-xs-6">
          <span
              className="cus-menu navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <img alt="logo" src={menu_icon} />
              <span className="text-unselect cursor-pointer">menu</span>
            </span>
          </div>
        </div>
        <div className="container-area">
          <span className="cus-btn-blue container-area-span">
            {" "}
            <span className="text-unselect">Your Performance Status</span>
          </span>

          <div className="score-area">
            <img alt="logo" className="img-user" src={demo_img} />
            <h3 className="text-unselect"> Hie Player </h3>
            <p className="text-unselect"> Congratulations on your new score!</p>
            <div className="user-score">
              <div className="blue-bg text-unselect">
                User Score: <div className="score text-unselect">{userScore}</div>
              </div>
            </div>
            <p className="text-unselect">Beat the best score & become the highest!</p>

            <div className="score-row">
              <div className="col-md-5 col-xs-5">
                {" "}
                <img alt="logo" src={trophy} />
              </div>
              <div className="col-md-7 col-xs-7">
                <div className="best-score text-unselect">
                  Best Score to Beat:
                  <div className="score text-unselect">{topScore}</div>
                </div>
              </div>
            </div>
          </div>
          <Footer one="inactive" two="active" three="inactive" four="inactive"/>
        </div>
      </div>
    </>
  );
};
export default Score;