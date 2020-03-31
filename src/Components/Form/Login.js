import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: null
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submit = () => {
    const { email, password } = this.state;
    const user = { email, password }
    console.log(user)
    axios.post("/auth/login", user);
  };
  render() {
    return (
      <div>
        <input
          name="email"
          onChange={this.handleChange}
          placeholder="Email"
          autocomplete="off"
        />
        <input
          name="password"
          onChange={this.handleChange}
          type="Password"
          placeholder="Password"
        />
        <button onClick = {this.submit}>Login</button>
      </div>
    );
  }
}
