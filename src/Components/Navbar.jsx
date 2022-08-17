import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            <span className="text-warning">
              <i className="fa-solid fa-video me-2"></i>
            </span>
            Anime
            <span className="text-warning"> Verse</span>
          </a>
          
              <NavLink to={"/watchlist"} className="navbar-brand">
                <span className="nav-link fw-bold">
                  Watch<span className="text-warning"> List</span>
                </span>
              </NavLink>
           
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
