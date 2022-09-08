import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark  navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          <span className="text-warning">
            <i className="fa-brands fa-vimeo-v me-1"></i>
          </span>
          Anime
          <span className="text-warning"> Verse</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex" role="search">
            <Link to={"/watchlist"} className="navbar-brand d-flex">
              <span className="nav-link fw-bold">
                Watch
                <span className="text-warning">
                  {" "}
                  List
                  <sup className="h5 fw-bold text-danger ms-1">
                    {props.watchListCount}
                  </sup>
                </span>
              </span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
