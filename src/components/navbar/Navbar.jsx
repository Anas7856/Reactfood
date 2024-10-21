import React from "react";
import "./navbar.css";
import logo from "../../imgs/logo.2c489fc453a1783cbadacf914efa3df6.svg";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const path = useLocation().pathname;
  console.log(path);
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="" />
            <h5>Treact</h5>
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-4 ">
              <li className={`nav-item ${path === "/about" ? "active" : ""}`}>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className={`nav-item ${path === "/blog" ? "active" : ""}`}>
                <NavLink className="nav-link" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className={`nav-item ${path === "/menu" ? "active" : ""}`}>
                <NavLink className="nav-link" to="/menu">
                  Pricing
                </NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="nav-button">
              <h5>Login</h5>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
