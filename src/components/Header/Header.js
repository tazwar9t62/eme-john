import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../App";
const Header = () => {
  let [loggedInUser, setLoggedInUser] = useContext(userContext);
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/review">Order Review</Link>
        <Link to="/manage">Manage Inventory</Link>
        <button onClick={() => setLoggedInUser({})}>Signout</button>
      </nav>
    </div>
  );
};

export default Header;
