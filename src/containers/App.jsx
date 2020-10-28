import React from "react";
import {Route} from "react-router-dom";
import Profile from "../components/Profile/Profile.jsx";
export default function App(){
    return(
        <div id="App">
            <Route exact path="/">
                <Profile/>
            </Route>
        </div>
    );
}
