import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Game from "./components/Game/Game";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

// Check if user is authorized
const isAuthorized = _ => localStorage.getItem("authToken");

//Protected route that checks if the user is Authorized, if not, routes to login page
const ProtectedRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} render={props => localStorage.getItem("authToken") ? (<Component {...props} />) : (<Redirect to={{pathname: "/login"}} />)} />
    )};

const Router = _ => {
    return (
        <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/" component={Game} />
        </Switch>
    )
};

export default Router;