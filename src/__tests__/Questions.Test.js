import React from 'react'
import ReactDom from 'react-dom';
import Questions from '../Components/Preference/Questions'
import {isTSAnyKeyword} from '@babel/types'

it("renders", ()=>{
    const div = document.createElement("div");
    ReactDom.render(<Questions></Questions>, div)
})
