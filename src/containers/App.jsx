import React from "react";
import {Route} from "react-router-dom";
import About from "../components/About/About.jsx";
import Profile from "../components/Profile/Profile.jsx";
export default function App(){
    return(
        <div>
            <Route exact path="/">
                <Profile/>
                <About/>
            </Route>
        </div>
    );
}
