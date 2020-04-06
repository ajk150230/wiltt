import React, { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
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
      <main className='card'>
      <section className='picture-card'>
      </section>
      <div className='logincard'>
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
        <section>
          Want to make a new account?
        </section>
        <Link to='/register'> register</Link>
      </div>
      </main>
    );
  }
}

const mapStateToProps = reduxState => ({ user: reduxState.user });

export default connect(mapStateToProps, { getSession })(Login);
