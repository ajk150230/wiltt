import React from 'react'
import ReactDom from 'react-dom';
import Profile from '../Components/Preference/Profile'
import {isTSAnyKeyword} from '@babel/types'

it("renders profile", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<Profile></Profile>, div)
})
