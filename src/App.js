import React, { Component } from 'react'
import Login from './Components/Form/Login'
import Register from './Components/Form/Register'
export default class extends Component {
  render() {
    return (
      <div>
        <Login/>
        <Register/>
      </div>
    )
  }
}

