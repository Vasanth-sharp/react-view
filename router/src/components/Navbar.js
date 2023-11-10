import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="container">
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/order">Order</Link>
          <Link to="/about">About</Link>
          <Link to="/user/2">user 2</Link>
          <Link to="/user/3">user 3</Link>
          <Link to="/login">Login</Link>
        </ul>
      </div>
    </div>
  );
}
