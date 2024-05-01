import React from "react";
import {ToastContainer,toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import Footer from "../Components/Footer";
import leader from "../Images/leader.png";
import menu_icon from "../Images/menu-icon.svg";
import one from "../Images/1.png";
import five_star from "../Images/5star.png";
import two from "../Images/2.png";
import four_star from "../Images/4star.png";
import three from "../Images/3.png";
import four from "../Images/4.png";
import five from "../Images/5.png";
import three_star from "../Images/3star.png";
import six from "../Images/6.png";
import seven from "../Images/7.png";
import eight from "../Images/8.png";
import two_star from "../Images/2star.png";
import nine from "../Images/9.png";
import ten from "../Images/10.png";
import one_star from "../Images/1star.png";
import Menu from "../Components/Menu";
import { sendLeaderboardApi } from "../Data/Api";
import { useEffect } from "react";
import Get from "../Request/Get";
import { useState } from "react";
import Loader from "../Components/Loader";

const Leaderboard = () => {

  const navigate=useNavigate();

  //to run on load
  useEffect(()=>{
    getDataFromBackend();
  },[]);

  //Method to get leaderboard data from backend
  const getDataFromBackend=()=>{
    let promise=Get(sendLeaderboardApi);
    promise.then(e=>{
      handleResponse(e);
    })
  }

  const[daily0,setDaily0]=useState(0);
  const[daily1,setDaily1]=useState(0);
  const[daily2,setDaily2]=useState(0);
  const[daily3,setDaily3]=useState(0);
  const[daily4,setDaily4]=useState(0);
  const[daily5,setDaily5]=useState(0);
  const[daily6,setDaily6]=useState(0);
  const[daily7,setDaily7]=useState(0);
  const[daily8,setDaily8]=useState(0);
  const[daily9,setDaily9]=useState(0);

  const[monthly0,setMonthly0]=useState(0);
  const[monthly1,setMonthly1]=useState(0);
  const[monthly2,setMonthly2]=useState(0);
  const[monthly3,setMonthly3]=useState(0);
  const[monthly4,setMonthly4]=useState(0);
  const[monthly5,setMonthly5]=useState(0);
  const[monthly6,setMonthly6]=useState(0);
  const[monthly7,setMonthly7]=useState(0);
  const[monthly8,setMonthly8]=useState(0);
  const[monthly9,setMonthly9]=useState(0);

  const[loader,setLoader]=useState('block');

  //Method to handle response
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
      setDaily0(e.daily0);
      setDaily1(e.daily1);
      setDaily2(e.daily2);
      setDaily3(e.daily3);
      setDaily4(e.daily4);
      setDaily5(e.daily5);
      setDaily6(e.daily6);
      setDaily7(e.daily7);
      setDaily8(e.daily8);
      setDaily9(e.daily9);

      setMonthly0(e.monthly0);
      setMonthly1(e.monthly1);
      setMonthly2(e.monthly2);
      setMonthly3(e.monthly3);
      setMonthly4(e.monthly4);
      setMonthly5(e.monthly5);
      setMonthly6(e.monthly6);
      setMonthly7(e.monthly7);
      setMonthly8(e.monthly8);
      setMonthly9(e.monthly9);
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
      <Menu one="inactive"two="inactive"three="active"four="inactive"five="inactive"six="inactive"/>
      <div className="container white-bg">
        <div className="cus-header">
          <div className="col-md-7 col-xs-7 pl-0">
            <div className="page-icon">
              <img alt="logo" src={leader} /> 
              <span className="text-unselect">Leaderboard</span>
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
              <span className="text-unselect cursor-pointer">menu</span>
            </span>
          </div>
        </div>
        <div className="container-area">
          <span className="cus-btn-blue container-area-span">
            {" "}
            <span className="text-unselect">Top 10 Players Rankings</span>
          </span>
          <p className="big-font text-unselect">
            Climb the ranks and earn your spot at the top of the leaderboard!
          </p>
          <div className="score-area-table text-unselect">
            <div className="blue-row">
              <div className="col-md-3 col-xs-3">Position </div>
              <div className="col-md-3 col-xs-3">Player Rating </div>
              <div className="col-md-3 col-xs-3">Daily Score </div>
              <div className="col-md-3 col-xs-3">Monthly Score</div>
            </div>
            <div className="white-bg-shadow">
              <div className="rating-row">
                <div className="col-md-3 col-xs-3">
                  <img alt="logo" src={one} />{" "}
                </div>
                <div className="col-md-3 col-xs-3">
                  {" "}
                  <img alt="logo" src={five_star} />
                </div>
                <div className="col-md-6 border-row col-xs-6">
                  {" "}
                  <div className="col-md-5 col-xs-5"> {daily0}</div>
                  <div className="col-md-2 col-xs-2">|</div>
                  <div className="col-md-5 col-xs-5"> {monthly0}</div>
                </div>
              </div>

              <div className="rating-row">
                <div className="col-md-3 col-xs-3">
                  <img alt="logo" src={two} />{" "}
                </div>
                <div className="col-md-3 col-xs-3">
                  {" "}
                  <img alt="logo" src={four_star} />
                </div>
                <div className="col-md-6 border-row col-xs-6">
                  {" "}
                  <div className="col-md-5 col-xs-5"> {daily1}</div>
                  <div className="col-md-2 col-xs-2">|</div>
                  <div className="col-md-5 col-xs-5"> {monthly1}</div>
                </div>
              </div>

              <div className="rating-row">
                <div className="col-md-3 col-xs-3">
                  <img alt="logo" src={three} />{" "}
                </div>
                <div className="col-md-3 col-xs-3">
                  {" "}
                  <img alt="logo" src={four_star} />
                </div>
                <div className="col-md-6 border-row col-xs-6">
                  {" "}
                  <div className="col-md-5 col-xs-5"> {daily2}</div>
                  <div className="col-md-2 col-xs-2">|</div>
                  <div className="col-md-5 col-xs-5"> {monthly2}</div>
                </div>
              </div>

              <div className="rating-row">
                <div className="col-md-3 col-xs-3">
                  <img alt="logo" src={four} />{" "}
                </div>
                <div className="col-md-3 col-xs-3">
                  {" "}
                  <img alt="logo" src={four_star} />
                </div>
                <div className="col-md-6 border-row col-xs-6">
                  {" "}
                  <div className="col-md-5 col-xs-5"> {daily3}</div>
                  <div className="col-md-2 col-xs-2">|</div>
                  <div className="col-md-5 col-xs-5"> {monthly3}</div>
                </div>
              </div>

              <div className="rating-row">
                <div className="col-md-3 col-xs-3">
                  <img alt="logo" src={five} />{" "}
                </div>
                <div className="col-md-3 col-xs-3">
                  {" "}
                  <img alt="logo" src={three_star} />
                </div>
                <div className="col-md-6 border-row col-xs-6">
                  {" "}
                  <div className="col-md-5 col-xs-5"> {daily4}</div>
                  <div className="col-md-2 col-xs-2">|</div>
                  <div className="col-md-5 col-xs-5"> {monthly4}</div>
                </div>
              </div>

              <div className="rating-row">
                <div className="col-md-3 col-xs-3">
                  <img alt="logo" src={six} />{" "}
                </div>
                <div className="col-md-3 col-xs-3">
                  {" "}
                  <img alt="logo" src={three_star} />
                </div>
                <div className="col-md-6 border-row col-xs-6">
                  {" "}
                  <div className="col-md-5 col-xs-5"> {daily5}</div>
                  <div className="col-md-2 col-xs-2">|</div>
                  <div className="col-md-5 col-xs-5"> {monthly5}</div>
                </div>
              </div>

              <div className="rating-row">
                <div className="col-md-3 col-xs-3">
                  <img alt="logo" src={seven} />{" "}
                </div>
                <div className="col-md-3 col-xs-3">
                  {" "}
                  <img alt="logo" src={three_star} />
                </div>
                <div className="col-md-6 border-row col-xs-6">
                  {" "}
                  <div className="col-md-5 col-xs-5"> {daily6}</div>
                  <div className="col-md-2 col-xs-2">|</div>
                  <div className="col-md-5 col-xs-5"> {monthly6}</div>
                </div>
              </div>

              <div className="rating-row">
                <div className="col-md-3 col-xs-3">
                  <img alt="logo" src={eight} />{" "}
                </div>
                <div className="col-md-3 col-xs-3">
                  {" "}
                  <img alt="logo" src={two_star} />
                </div>
                <div className="col-md-6 border-row col-xs-6">
                  {" "}
                  <div className="col-md-5 col-xs-5"> {daily7}</div>
                  <div className="col-md-2 col-xs-2">|</div>
                  <div className="col-md-5 col-xs-5"> {monthly7}</div>
                </div>
              </div>

              <div className="rating-row">
                <div className="col-md-3 col-xs-3">
                  <img alt="logo" src={nine} />{" "}
                </div>
                <div className="col-md-3 col-xs-3">
                  {" "}
                  <img alt="logo" src={two_star} />
                </div>
                <div className="col-md-6 border-row col-xs-6">
                  {" "}
                  <div className="col-md-5 col-xs-5"> {daily8}</div>
                  <div className="col-md-2 col-xs-2">|</div>
                  <div className="col-md-5 col-xs-5"> {monthly8}</div>
                </div>
              </div>

              <div className="rating-row">
                <div className="col-md-3 col-xs-3">
                  <img alt="logo" src={ten} />{" "}
                </div>
                <div className="col-md-3 col-xs-3">
                  {" "}
                  <img alt="logo" src={one_star} />
                </div>
                <div className="col-md-6 border-row col-xs-6">
                  {" "}
                  <div className="col-md-5 col-xs-5"> {daily9}</div>
                  <div className="col-md-2 col-xs-2">|</div>
                  <div className="col-md-5 col-xs-5"> {monthly9}</div>
                </div>
              </div>
            </div>

            <div className="cus-score-btn-blue">
              <span className="cus-score-btn-blue-span"
                style={{cursor:"pointer"}}
                onClick={()=>{
                  navigate("/score")
                }}> View My Score</span>
            </div>

            <Footer one="inactive" two="inactive" three="active" four="inactive"/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Leaderboard;