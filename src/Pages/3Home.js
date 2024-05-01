import React, { useEffect, useState } from "react";
// import home_icon_top from "../Images/home-icon-top.png";
import menu_icon from "../Images/menu-icon.svg";
// import big_cash_game from "../Images/big-cash-game.png";
import mediaplay from "../Images/mediaplay.svg";
import dots from "../Images/dots.svg";
// import xmas from "../Images/xmas.png";
// import heart from "../Images/heart-sweet.png";
// import crypto from "../Images/cryptocrush.png";
import Footer from "../Components/Footer";
import logo from "../Images/CashhubLogo.png";
import Menu from "../Components/Menu";
import { getGamesApi } from "../Data/Api";
import Get from "../Request/Get";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../Components/Loader";

const Home = () => {

  //to run on load
  useEffect(()=>{
    gettingGamesData();
  },[]);

  //Method to get games 
  const gettingGamesData=()=>{
    let promise=Get(getGamesApi);
    promise.then(e=>{
      handleGamesReponse(e);
    })
  }

  //Hook to store data
  const[games,setGames]=useState([]);

  //Handling Game Response
  const handleGamesReponse=(e)=>{
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
      //Getting Proper Response
      setGames(e.data);
    }
    else
    {
      toast.error("Something Went Wrong");
    }
  }

    //Hook to store loader div state
    const[loader,setLoader]=useState('block');

  return (
    <>
    <ToastContainer/>
    <Loader value={loader}/>
      <Menu one="active"two="inactive"three="inactive"four="inactive"five="inactive"six="inactive"/>
      <div className="container white-bg">
        <div className="cus-header">
          <div className="col-md-6 col-xs-6">
            <div className="page-icon">
              <img alt="logo" src={logo} height="50px" width="70px" 
                style={{paddingTop:"10px"}}/> 
              <span className="text-unselect">Home</span>
            </div>
          </div>
          <div className="col-md-6 col-xs-6">
          <span
              className="cus-menu navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <img alt="logo" src={menu_icon}/>
              <span className="text-unselect cursor-pointer">menu</span>
            </span>
          </div>
        </div>
        <div className="container-area">
          <span className="cus-btn-blue container-area-span">
            {" "}
            <span className="text-unselect">Cashhub Games For You</span>
          </span>
          <div className="game-area">

            {
              games.length>0 &&
              games.map((item,index)=>{
                return(
                  <div className="col-md-6 col-xs-6" key={index}>
                  <div className="cus-game">
                    <div className="image-div">
                      <img alt="game-icon" src={item.imageUrl} height="120px" width="90px" />
                    </div>
                    <h4 className="text-unselect">{item.name}</h4>
                    <span className="cus-game-span">
                      {" "}
                      <img alt="logo" src={mediaplay} /> 
                      <span className="text-unselect cursor-pointer"
                        onClick={()=>{
                          window.location.href=`${item.gameUrl}?gameid=${item.id}&uid=${localStorage.getItem("ani")}`
                        }}>Play Now</span>
                    </span>
                  </div>
                  <div className="info-icon">
                    <img alt="logo" src={dots} />
                  </div>
                </div>
                )
              })
            }
          </div>
          <Footer one="active" two="inactive" three="inactive" four="inactive"/>
        </div>
      </div>
    </>
  );
};
export default Home;