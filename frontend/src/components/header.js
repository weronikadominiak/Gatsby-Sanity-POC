import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" to="/">
          <img src="https://corgiorgy.com/corgiswimflip.gif" height="38" alt="Super cute corgi" />
        </Link>

        <Link
          to="/"
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            Home
          </Link>

          <div className="navbar-item has-dropdown is-hoverable">
            <Link to="/" className="navbar-link">
              More
            </Link>
            <div className="navbar-dropdown">
              <Link to="/" className="navbar-item">
                About
              </Link>
              <hr className="navbar-divider" />
              <Link to="/" className="navbar-item">
                Report an issue
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link to="/" className="button is-primary">
                <strong>Sign up</strong>
              </Link>
              <Link to="/" className="button is-light">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">{siteTitle}</h1>
          <h2 className="subtitle">Primary subtitle</h2>
        </div>
      </div>
    </section>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
