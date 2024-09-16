import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import './SearchBar.css'; // Assuming you'll add custom CSS here

const SearchBar = () => {
  const [search, setSearch] = useState("");
  let history = useHistory();

  const toSearchPage = (e) => {
    e.preventDefault();
    history.push(`/search/q=${search}`);
  };

  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <>
      <nav>
        <div className="nav-wrapper grey darken-2 custom-nav">
          <div className="container">
            {/* Cooking Buddy aligned to left */}
            <Link to="/" className="brand-logo left no-space">
              <span>Cooking Buddy</span>
            </Link>
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ingredients/1">Ingredients</Link>
              </li>
              <li>
                {/* Button with blue-violet gradient */}
                <button
                  className="btn gradient-btn"
                  onClick={() => history.push("/signin")}
                >
                  Sign In
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <form onSubmit={toSearchPage}>
            <input
              className="mobile-input input-field"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search for a Meal..."
              style={{ paddingLeft: 25 }}
            />
          </form>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ingredients/1">Ingredients</Link>
        </li>
        <li>
          <button
            className="btn grey lighten-1"
            onClick={() => history.push("/signin")}
          >
            Sign In
          </button>
        </li>
      </ul>
    </>
  );
};

export default SearchBar;
