import React from 'react'
import './navigation.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About'
import Services from '../../pages/Services/Services';
import Shop from '../../pages/Shop/Shop';
import Footer from '../footer/Footer';
import $ from 'jquery';



function Navigation() {
  return (
  <>
  <Router>
  <nav className="navbar nav fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div className="container">
      <Link className="navbar-brand brand" to="/">Just For Cricket</Link>
        
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
            <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white" to="/about">About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white" to="/services">Services</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/contact' element={<Footer/>}></Route>
      </Routes>
    </div>

  </Router>
  
  </>
);
}

$(document).ready(function(){
  var navbar = $(".nav");
  $(window).scroll(function(){
     var scrollPosition = $(window).scrollTop();
     if (scrollPosition === 0){
        navbar.css("background-color", "rgba(32, 52, 74, 0");
     }else {
        navbar.css("background-color", "rgba(32, 52, 74, 1");
    }
 });
});

export default Navigation;
