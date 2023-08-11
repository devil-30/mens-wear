"use client";
import React from "react";
import "./header.scss";

import { BsCart4 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="/assets/images/flogo.png" alt="Logo" />
      <div className="searchContainer ">
        <input className="searchBox" type="text" placeholder="Search..." />
        <button className="searchButton">Search</button>
      </div>
      <div className="rightContainer">
        <div className="icons mx-7">
          <BsCart4 className="icon mx-4" />
          <FaUserCircle className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
