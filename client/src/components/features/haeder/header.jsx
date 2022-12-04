import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./header.css";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <div className="navbar-div">
      <nav id="nav_container" className="navbar navbar-expand-lg">
        <img
          id="multiLogo"
          src="./images/multimarket.png"
          alt=""
        />
        <div id="dashboard">

      <p className="text-center text-white">
      Dashboard 
      </p>
      <div id="div_burger">
      <img id="burger_logo" src="./images/menu.png"/>
      </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
