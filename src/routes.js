import React from "react";
import {Switch, Route} from "react-router-dom"
import Login from "./Components/Form/Login"
import Profile from "./Components/Profile"
import Homepage from "./Components/Homepage"
import Shoes from "./Components/Shop/Shoes"
import Cart from "./Components/Shop/Cart"
import Apparel from "./Components/Shop/Apparel"
export default(
    <Switch>
        <Route path='/profile' component ={Profile}/>
        <Route path='/login' component ={Login}/>
        <Route path='/shoes' component ={Shoes}/>
        <Route path='/apparel' component ={Apparel}/>
        <Route path='/cart' component ={Cart}/>
        <Route path='/' exact component ={Homepage}/>
    </Switch>
)