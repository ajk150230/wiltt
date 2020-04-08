import React, { Component } from 'react'
import routes from './routes'
import Header from './Components/Header'
import "./App.scss"
// import "./Reset.css"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {routes}
      </div>
    )
  }
}

