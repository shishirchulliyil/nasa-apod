import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link className="link" to="/" exact>
          <h1>
            <span>Take Me Home</span>
          </h1>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
