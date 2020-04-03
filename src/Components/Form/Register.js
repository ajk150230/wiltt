import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      first: "",
      last: "",
      address: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submit = () => {
    const { email, password, first, last, address } = this.state;
    const user = { email, password, first, last, address };
    console.log(user);
    axios.post("/auth/register", user);
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
        <input
          name="first"
          onChange={this.handleChange}
          placeholder="First Name"
        />
        <input
          name="last"
          onChange={this.handleChange}
          placeholder="Last Name"
        />
        <input
          name="address"
          onChange={this.handleChange}
          placeholder="Address"
        />
        <button onClick={this.submit}>Register</button>
      </div>
    );
  }
}
