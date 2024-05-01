import React from "react";
import {Route, Routes } from "react-router-dom";
import Logo from "../Pages/1Logo";
import Intro from "../Pages/2Intro";
import Home from "../Pages/3Home";
import PageNotFound from "../Pages/404";
import Score from "../Pages/4Score";
import Leaderboard from "../Pages/5Leaderboard";
import Prize from "../Pages/6.Prize";
import Terms from "../Pages/7.Terms";
import Faq from "../Pages/8.Faq";
import BillingPending from "../Pages/BillingPending";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Redirect from "../Pages/Redirect";
// import Signin from "../Pages/Signin";

const Routing=()=>{
    return(
        <>
            {/* <BrowserRouter> */}
                <Routes>
                    <Route path="/logo" element={<Logo/>} exact={true}></Route>
                    <Route path="/intro" element={<Intro/>} exact={true}></Route>

                    <Route path="/redirect" element={<Redirect/>} exact={true}></Route>
                    <Route path="/" element={<Home/>} exact={true}></Route>
                    <Route path="/home" element={<Home/>} exact={true}></Route>
                    <Route path="/score" element={<Score/>} exact={true}></Route>
                    <Route path="/leader" element={<Leaderboard/>} exact={true}></Route>
                    <Route path="/prize" element={<Prize/>} exact={true}></Route>
                    <Route path="/terms" element={<Terms/>} exact={true}></Route>
                    <Route path="/faq" element={<Faq/>} exact={true}></Route>
                    <Route path="/login" element={<Login/>} exact={true}></Route>

                    <Route path="*" element={<PageNotFound/>} exact={true}></Route>
                    <Route path="/error" element={<Error/>} exact={true}></Route>
                    <Route path="/pending" element={<BillingPending/>} exact={true}></Route>
                    {/* <Route path="/signin" element={<Signin/>} exact={true}></Route> */}
                </Routes>
            {/* </BrowserRouter> */}
        </>
    );
}
export default Routing;