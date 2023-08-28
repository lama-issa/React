import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
export default class Navbar extends Component {
  render() {
    return (
       <nav className={`${style.navb} navbar navbar-expand-lg p-4`}>
  <div className="container">
    <a className="navbar-brand text-white fw-bold" href="#">START BOOTSTRAP</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className={`${style.link} nav-link`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`${style.link} nav-link`} aria-current="page" to="/portf">PORTFOLIO</Link>
        </li>
        <li className="nav-item">
          <Link className={`${style.link} nav-link`} to="/about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className={`${style.link} nav-link`} to="/contact">CONTACT</Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>

    )
  }
}
