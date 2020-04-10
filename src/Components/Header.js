import React, {Component} from "react";
import { Link, Redirect } from "react-router-dom";

export default class Header extends Component {
  constructor(){
    super()
    this.state={
      open: false
    }
  }
  render() {
    return (
      <>
        <div className="header">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <div className="logo">Wiltt</div>
          </Link>
          <div className="nav" id="bar">
            <Link
              to="/Account"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p className="link">Account</p>
            </Link>
            <Link
              to="/shoes"
              style={{ textDecoration: "none", color: "white" }}
            >
              <p className="link">Shoes</p>
            </Link>
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              <p className="link">Cart</p>
            </Link>
          </div>
            <img
              id="hamburger"
              data-testid='hamburger'
              onClick={() => this.setState({ open: !this.state.open })}
              src="https://i.ya-webdesign.com/images/hamburger-menu-icon-png-white-6.png"
            />
        </div>
        <menu className={this.state.open === true ? "menu-open" : ""} data-testid='menu'>
          <h6>Menu</h6>
          <Link
            to="/Account"
            style={{ textDecoration: "none", color: "white" }}
          >
            <p className="linkmini">Account</p>
          </Link>
          <Link to="/shoes" style={{ textDecoration: "none", color: "white" }}>
            <p className="linkmini">Shoes</p>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <p className="linkmini">Cart</p>
          </Link>
        </menu>
      </>
    );
  }
}
