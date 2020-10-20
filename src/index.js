import React from "react";
import {render} from "react-dom";
import {HashRouter as Router, Switch} from "react-router-dom";
import App from "./containers/App.jsx";
render(
    <Router>
        <Switch>
            <App/>
        </Switch>
    </Router>,
    document.querySelector("#root")
);
