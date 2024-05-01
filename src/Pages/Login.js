import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "../Css/login.css";
import { checkSubscriptionApi } from "../Data/Api";
import Post from "../Request/Post";

const Login = () => {

const navigate=useNavigate();

//Hook to store ani
const[ani,setAni]=useState('');

//Method to handle form
const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log("ani ",ani);

    checkSubscription(ani,"result");
}

//Check Subscription
const checkSubscription=(ani,result)=>{
    let promise=Post(checkSubscriptionApi,{result:result,ani:ani});
    promise.then(e=>{
        handleSubscriptionResponse(e);
    })
}

//Method to handle subscription response
const handleSubscriptionResponse=(e)=>{
    console.log("e ",e);

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
        //check response
        if(e.data===true)
        {
            //Subscribed
            localStorage.setItem("ani",ani);
            navigate("/");
        }
        else
        {
            //Unsubscribed
            toast.error("Billing Pending");
        }
    }
    else
    {
        toast.error("Something Went Wrong");
    }
}

  return (
    <div>
      <ToastContainer />
      <div className="login-main" id="main-div">
        <div className="login-sub-main">
          <div>
            <div className="login-imgs">
              {/* <div className="">
                            <img src={logo} alt="Profile" className="login-profile"/>
                        </div> */}
            </div>
            <div>
              <h2 className="font login-second-div">
                Welcome to Cashhub Games
              </h2>
              <form onSubmit={handleFormSubmit}>
                <div>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Mobile Number"
                    autoComplete="off"
                    required
                    className="login-name"
                    onChange={(e)=>{
                        setAni(e.target.value);
                    }}
                  />
                </div>

                <div className="login-bttn-div">
                  <button className="login-bttnn btn btn-success">Enter</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
