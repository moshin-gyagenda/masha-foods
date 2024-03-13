import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/masha-logo.jpeg";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img
          src={Logo}
          alt="Masha Foods Logo"
          height="40"
          className="d-inline-block align-top mx-2"
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/menu">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/specials">
              Specials
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/reservations">
              Reservations
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/events">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/catering">
              Catering
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/online-ordering">
              Online Ordering
            </Link>
          </li>
        </ul>

        <div className="navbar-nav ml-auto">
          <Link
            className="nav-link btn card mx-2"
            to="/login"
            style={{ width: "80px", backgroundColor: "purple", color: "white" }}
          >
            Login
          </Link>
          <Link
            className="nav-link btn card mx-2"
            to="/signup"
            style={{
              width: "100px",
              backgroundColor: "purple",
              color: "white",
            }}
          >
            Sign Up
          </Link>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <div className="row">
            <div className="col-sm-8">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="col-sm-4">
              <button
                className="btn  my-2 my-sm-0"
                type="submit"
                style={{ borderColor: "purple", width: "120px" }}
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Nav;
