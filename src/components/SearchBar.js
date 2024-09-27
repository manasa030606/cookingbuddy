import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import './SearchBar.css'; 

const SearchBar = () => {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const toSearchPage = (e) => {
    e.preventDefault();
    history.push(`/search/q=${search}`);
    closeSidenav(); // Close sidenav after search
  };

  const navigateTo = (path) => {
    history.push(path);
    closeSidenav(); // Close sidenav after navigation
  };

  const closeSidenav = () => {
    const sidenav = document.querySelector(".sidenav");
    const overlay = document.querySelector(".sidenav-overlay");
    sidenav.classList.remove("open");
    overlay.classList.remove("show");
  };

  useEffect(() => {
    M.AutoInit(); // Initialize Materialize components, including sidenav
  }, []);

  const toggleSidenav = () => {
    const sidenav = document.querySelector(".sidenav");
    const overlay = document.querySelector(".sidenav-overlay");

    if (sidenav.classList.contains("open")) {
      closeSidenav(); // Use the close function to handle closing
    } else {
      sidenav.classList.add("open");
      overlay.classList.add("show");
    }
  };

  return (
    <>
      <nav>
        <div className="nav-wrapper grey darken-2 custom-nav">
          <div className="container">
            <Link to="/" className="brand-logo left no-space">
              <span>Cooking Buddy</span>
            </Link>

            {/* Hamburger menu for mobile */}
            <a href="#" className="sidenav-trigger right" onClick={toggleSidenav}>
              <i className="material-icons">menu</i>
            </a>

            {/* Search and Links aligned to the right */}
            <ul className="right nav-items">
              <li>
                <form onSubmit={toSearchPage}>
                  <input
                    className="input-field search-field"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search for a Meal..."
                  />
                </form>
              </li>
              <li>
                <Link to="/" onClick={() => navigateTo("/")}>Home</Link>
              </li>
              <li>
                <Link to="/ingredients/1" onClick={() => navigateTo("/ingredients/1")}>Ingredients</Link>
              </li>
              <li>
                {/* <button
                  className="btn gradient-btn"
                  onClick={() => navigateTo("/signin")}
                >
                  Sign In
                </button> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile */}
      <div className="sidenav-overlay" id="overlay" onClick={closeSidenav}></div>

      {/* Sidenav for mobile */}
      <ul className="sidenav" id="mobile-demo">
        <li>
          <span className="sidenav-close-btn" onClick={closeSidenav}>
            <i className="material-icons">close</i>
          </span>
        </li>
        <li>
          <form onSubmit={toSearchPage}>
            <input
              className="mobile-input input-field"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search for a Meal..."
            />
          </form>
        </li>
        <li>
          <Link to="/" onClick={() => navigateTo("/")}>Home</Link>
        </li>
        <li>
          <Link to="/ingredients/1" onClick={() => navigateTo("/ingredients/1")}>Ingredients</Link>
        </li>
        <li>
          {/* <button
            className="btn grey lighten-1"
            onClick={() => navigateTo("/signin")}
          >
            Sign In
          </button> */}
        </li>
      </ul>
    </>
  );
};

export default SearchBar;
