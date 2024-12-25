import React, { Component } from 'react';
import style from './Header.module.css';
import Avater from './img/Avater.svg';

export default class Header extends Component {
  render() {
    return (
      <header className={`${style.header} vh-100 d-flex justify-content-center align-items-center`}>
        <div className="text-center">
          <img src={Avater} alt="a" width="250" height="250" />
          <h1 className={`${style.head} pb-3`}>START BOOTSTRAP</h1>
          <h5><i className="fa-solid fa-star"></i></h5>
          <p className="mt-4">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </header>
    );
  }
}

