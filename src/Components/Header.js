import React from "react";
import { Link, Redirect } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to='/' style={{ textDecoration: "none", color: "white" }}>
      <div className="logo">Wiltt</div>
      </Link>
      <div className="nav" id="bar">
        <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
          <p className="link">Login</p>
        </Link>
        <Link to='/shoes' style={{ textDecoration: "none", color: "white" }}>
          <p className="link">Shoes</p>
        </Link>
        <Link to='/apparel'style={{ textDecoration: "none", color: "white" }}>
          <p className="link">Apparel</p>
        </Link>
        <Link to='/cart'style={{ textDecoration: "none", color: "white" }}>
          <p className="link">Cart</p>
        </Link>
      </div>
    </div>
  );
}
