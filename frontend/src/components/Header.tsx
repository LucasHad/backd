import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <h1>logo</h1>
        <ul>
          <Link to="/newUser">Create</Link>
          <Link to="/deleteUser">Delete</Link>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
