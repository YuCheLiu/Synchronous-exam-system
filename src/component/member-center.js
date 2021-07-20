import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Member } from "../page/member";
const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    //loginWithRedirect()
    return (
        <li class="nav-item">
            <Link class="nav-link text-white" to="/member" onClick={() => loginWithRedirect()}>
                login
            </Link>
        </li>
    );
  };
  
const MemberCenter = () => {
    const {user} = useAuth0();
    console.log("Member Center: "+ user);
    if (typeof user === "undefined") {
        return(
            <LoginButton class="w-100 btn btn-lg btn-primary"></LoginButton>
        )
    } else {
        return(
                <li class="nav-item">
                    <Link class="nav-link text-white" to="/member">Member</Link>
                </li>
            );
    }
};

export default MemberCenter;