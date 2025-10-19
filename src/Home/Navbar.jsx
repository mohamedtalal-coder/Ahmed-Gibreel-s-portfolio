import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar nav-home m-auto w-75 fixed-top">
      <div className="container-fluid d-flex justify-content-center">
        <ul className="navbar-nav d-flex flex-row flex-wrap justify-content-center align-items-center m-0 p-0">
          <li className="nav-item mx-2 mx-sm-2 mx-md-3 mx-lg-4 my-1">
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
              className="nav-link text-white px-2 px-md-3"
            >
              الرئيسية
            </Link>
          </li>
          <li className="nav-item mx-2 mx-sm-2 mx-md-3 mx-lg-4 my-1">
            <Link
              to="work"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
              className="nav-link text-white px-2 px-md-3"
            >
              أعمالي
            </Link>
          </li>
          <li className="nav-item mx-2 mx-sm-2 mx-md-3 mx-lg-4 my-1">
            <Link
              to="clients"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
              className="nav-link text-white px-2 px-md-3"
            >
              أبرز العملاء
            </Link>
          </li>
          <li className="nav-item mx-2 mx-sm-2 mx-md-3 mx-lg-4 my-1">
            <Link
              to="reviews"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
              className="nav-link text-white px-2 px-md-3"
            >
              تقييمات العملاء
            </Link>
          </li>
          <li className="nav-item mx-2 mx-sm-2 mx-md-3 mx-lg-4 my-1">
            <Link
              to="contactus"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="active"
              className="nav-link text-white px-2 px-md-3"
            >
              تواصل معي
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
