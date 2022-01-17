import React from "react";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>The Only Pizza Made From 
                Fresh Dough For Fresh Pizza
            </h3>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                Order Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
