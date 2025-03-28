import React from "react";

const Header = ({ setQuery }) => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Navbar
          </a>
          <form className="d-flex" role="search">
            <input
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
