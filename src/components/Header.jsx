import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import "./header.css"

function Header() {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo">
          <img src={logo} alt="Navbar Logo" />
        </Link>
        <ul className="nav__menu">
          <li>
            <Link to="/profile">Isuru Sandaruwan</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/authors">Authors</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <button className="nav__toggle-btn">
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

export default Header;
