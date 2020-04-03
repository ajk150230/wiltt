import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getSession } from "../../Redux/userReducer";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: null,
      user: []
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  submit = () => {
    const { email, password } = this.state;
    const user = { email, password };
    axios.post("/auth/login", user).then(user => {
      this.setState({ user: user.data })
    });
  };
  render() {
    if (this.state.user.user_id) {
      return <Redirect to="/Profile" />;
    }
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
        <button onClick={this.submit}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({ user: reduxState.user });

export default connect(mapStateToProps, { getSession })(Login);
