import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {location.pathname !== "/basket" ? (
            <Link to="/basket">Basket</Link>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
