import React from 'react'
import ReactDom from 'react-dom';
import Profile from '../Components/Profile'
import {isTSAnyKeyword} from '@babel/types'

it("renders profile", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<Profile></Profile>, div)
})
