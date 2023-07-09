import React, { useState } from "react";
import "./layout.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [navClass, setNavClass] = useState("navbar");
  //const [brand, setBrand] = useState(false);

  const toggleNav = () => {
    navClass === "navbar"
      ? setNavClass("navbar-mobile")
      : setNavClass("navbar");
  };

  const closeNav = () => {
    setNavClass("navbar");
  };

  // const closeBrand = () => {
  //   setBrand(!brand);
  // };

  return (
    <nav id="navbar" className={navClass}>
      {navClass === "navbar" ? (
        <Link className="navbar-brand mx-5" to="/">
          <h1>
            <strong>Portfolio</strong>
          </h1>
        </Link>
      ) : (
        ""
      )}
      <ul className="mx-3">
        <li>
          <NavLink to="/" className="nav-link" onClick={closeNav}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link" onClick={closeNav}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" className="nav-link" onClick={closeNav}>
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="nav-link" onClick={closeNav}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" className="nav-link" onClick={closeNav}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link" onClick={closeNav}>
            Contact
          </NavLink>
        </li>
      </ul>
      {navClass === "navbar" ? (
        <i className="fa fa-bars mobile-nav-toggle mt-4" onClick={toggleNav} />
      ) : (
        <i className="fa fa-times mobile-nav-toggle mt-4" onClick={toggleNav} />
      )}
    </nav>
  );
};
