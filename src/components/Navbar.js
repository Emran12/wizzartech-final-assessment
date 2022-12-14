import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/images/logo.jpg";
const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link to="#home">Home</Link>
      </li>
      <li>
        <Link to="#aboutus">About Us</Link>
      </li>
      <li>
        <Link to="#menu">Menu</Link>
      </li>
      <li>
        <Link to="#blog">Blog</Link>
      </li>
      <li>
        <Link to="#contactus">Contact Us</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="#home" className="btn btn-ghost normal-case text-xl">
            Restaurant
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
