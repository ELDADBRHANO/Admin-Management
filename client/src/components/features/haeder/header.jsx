import React from "react";
import SideBar from "../sideBar/sideBar";
import "./header.css";

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
        <SideBar/>
      {/* <img id="burger_logo" alt="burger" src="./images/menu.png"/> */}
      </div>
        </div>
      </nav>
      <div id="sidebar_div">

      </div>
    </div>
  );
}

export default Header;


