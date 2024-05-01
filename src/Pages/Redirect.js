import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Post from "../Request/Post";
import { checkSubscriptionApi } from "../Data/Api";
import { toast, ToastContainer } from "react-toastify";

const Redirect=()=>{

    //Navigator
    const navigate=useNavigate();

    //start on load
    useEffect(()=>{
        getMsisdn();
    },[]);

    //Getting MSISDN from /redirect link
    const getMsisdn=()=>{
        const params=new URLSearchParams(window.location.search);
        let ani=params.get("msisdn");
        let result=params.get("result");

        console.log("ani ",ani);
        console.log("result ",result);

        if(ani!==null || ani!==undefined || ani!=='' || ani!==' ')
        {
            checkSubscription(ani,result);
        }
        else
        {
            console.log("Empty Ani");
            toast.error("Empty MSISDN");
        }
    }

    //Check Subscription
    const checkSubscription=(ani,result)=>{
        let promise=Post(checkSubscriptionApi,{result:result,ani:ani});
        promise.then(e=>{
            handleSubscriptionResponse(e,ani);
        })
    }

    //Method to handle subscription response
    const handleSubscriptionResponse=(e,ani)=>{
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
                navigate("/login");
            }
        }
        else
        {
            toast.error("Something Went Wrong");
        }
    }

    return(
        <>
            <ToastContainer/>
             <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        {/* <h1></h1> */}
                        <h2>Please Wait</h2>
                    </div>
                </div>
            </div>   
        </>
    );
}

export default Redirect;