import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Home from './components/Home' ;
import Login from './components/Login' ;

export default function Routes() {
    return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path='/login' exact component={Login} />
    </Switch>
    ) 
}


