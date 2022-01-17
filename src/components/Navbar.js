import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="https://uspizza.in/images/logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
          <li>
            <a href="">Franchise</a>
          </li>
          <li>
            <a href="">Stores</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Order </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
