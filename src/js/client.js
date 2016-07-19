import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import Services from "./pages/Services";
import Layout from "./pages/Layout";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Services}></IndexRoute>
        </Route>
    </Router>,
    app);