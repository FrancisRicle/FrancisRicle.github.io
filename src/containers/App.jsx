import React from "react";
import {Route} from "react-router-dom";
import Profile from "../components/Profile/Profile.jsx";
import Projects from "../components/Projects/Projects.jsx";
export default function App(){
    return(
        <div id="App">
            <Route exact path="/">
                <Profile/>
            </Route>
            <Route exact path="/cv">

            </Route>
            <Route exact path="/projets">
                <Projects/>
            </Route>
        </div>
    );
}
