import React from 'react'
import './navigation.css'
import image from '../../images/hamburger.png'

function Navigation() {
  return (
  <>
   <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div className="container">
        <a className="navbar-brand brand" href="/">Just for Cricket</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);
}

export default Navigation;