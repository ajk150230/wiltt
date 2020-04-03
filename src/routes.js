import React from "react";
import {Switch, Route} from "react-router-dom"
import Login from "./Components/Form/Login"
import Profile from "./Components/Profile"
import Homepage from "./Components/Homepage"
export default(
    <Switch>
        <Route path='/profile' component ={Profile}/>
        <Route path='/' exact component ={Homepage}/>
    </Switch>
)