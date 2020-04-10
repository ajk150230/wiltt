import React, { Component } from 'react'
import routes from './routes'
import Header from './Components/Header'
import "./App.scss"
import axios from 'axios'
// import "./Reset.css"

export default class App extends Component {
  componentDidMount(){
    axios.get('/auth/session')
  }
  render() {
    return (
      <>
        <Header/>
        {routes}
      </>
    )
  }
}

