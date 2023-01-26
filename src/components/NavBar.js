import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = styled.div`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  margin-right: 20px;
`;

const NavBar = () => {
  const location = useLocation();
  return (
    <NavigationBar className="nav-bar">
      <Ul>
        <Li>
          <Link to="/">Home</Link>
        </Li>
        <Li>
          {location.pathname !== "/basket" ? (
            <Link to="/basket">Basket</Link>
          ) : null}
        </Li>
      </Ul>
    </NavigationBar>
  );
};

export default NavBar;
