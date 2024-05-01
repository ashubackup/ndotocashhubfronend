import React from "react";
import {ToastContainer,toast} from "react-toastify";
import Footer from "../Components/Footer";
import prize from "../Images/prize.png";
import menu_icon  from "../Images/menu-icon.svg";
// import message from "../Images/messgae.svg";
// import notes from "../Images/notes.svg";
import coin from "../Images/coins.webp";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";
import { sendPrizesApi } from "../Data/Api";
import Get from "../Request/Get";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../Components/Loader";
const Prize = () => {

  //to start onload
  useEffect(()=>{
    getPrizeFromBackend();
  },[]);

  //Method to get prizes from backend
  const getPrizeFromBackend=()=>{
    let promise=Get(sendPrizesApi);
    promise.then(e=>{
      handleResponse(e);
    })
  }

  //Hook to store prizes
  const[prizes,setPrizes]=useState([]);

  //handle response
  const handleResponse=(e)=>{
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
      setPrizes(e.data);
    }
    else
    {
      toast.error("Something Went Wrong");
    }
  }

  const[loader,setLoader]=useState('block');

  return (
    <div className="text-unselect">
      <ToastContainer/>
      <Loader value={loader}/>
      <Menu one="inactive"two="inactive"three="inactive"four="active"five="inactive"six="inactive"/>
      <div className="container white-bg">
        <div className="cus-header">
          <div className="col-md-7 col-xs-7">
            <div className="page-icon">
              <img alt="logo" src={prize} /> Prize
            </div>
          </div>
          <div className="col-md-5 col-xs-5">
          <span
              className="cus-menu navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <img alt="logo" src={menu_icon} />
              <span className="cursor-pointer">menu</span>
            </span>
          </div>
        </div>
        <div className="container-area">
          <span className="cus-btn-blue container-area-span">
            {" "}
            Winner Prizes
          </span>
          <p className="big-font">
            2,000 is the Grand Cash Prize! <br />
            Enjoy Daily Airtime Rewards!
          </p>
          <div className="score-area-table">
            <div className="blue-row">
              <div className="col-md-6 col-xs-6">Daily Airtime </div>
              <div className="col-md-6 col-xs-6">Monthly Cash </div>
            </div>
            <div className="white-bg-shadow light-blue-bg padding-low">

              {
                prizes.length>0 &&
                prizes.map((item,index)=>{
                  return(
                    <div className="rating-table" key={index}>
                      <div className="col-md-6 border-winner col-xs-6">
                        <div className="col-md-5 col-xs-5">{index+1}</div>
                        <div className="col-md-7 col-xs-7">{item.prize}</div>
                      </div>
                      <div className="col-md-6 border-winner col-xs-6">
                        {/* <div className="col-md-5 col-xs-5"> 1</div> */}
                        <div className="col-md-7 col-xs-7">{item.type}</div>
                      </div>
                  </div>
                  )
                })
              }

              <div className="rating-btn">
                {/* <div className="col-md-6 col-xs-6">
                  <Link to="/">
                    FAQs <img alt="logo" src={message} />
                  </Link>
                </div> */}
                {/* <div className="col-md-6  col-xs-6">
                  <Link to="/">
                    <img alt="logo" src={notes} /> T’s & C’s
                  </Link>
                </div> */}

                <div className="col-md-12  col-xs-12">
                  {" "}
                  <br />
                  <center>
                    {" "}
                    <img alt="logo" src={coin} />
                  </center>
                </div>
              </div>
            </div>

            <div className="cus-score-btn-blue">
              <Link to="/"> Play to Win Big</Link>
            </div>
            <Footer one="inactive" two="inactive" three="inactive" four="active"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prize;