import React, { Component } from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      
      <footer>
        <div className={`${style.topfooter} `}>
          <div className={`${style.location} `}>
          <h3 >LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
          </div>

          <div className={`${style.location} `}>
          <h3 >AROUND THE WEB</h3>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-solid fa-globe"></i>
          </div>

          <div className={`${style.location} `}>
          <h3 >ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, MIT licensed</p>
          <p>Bootstrap theme created by <Link to="/" >Start Bootstrap .</Link></p>
          </div>
          
        </div>

        <div className={`${style.footer} text-center text-white py-3`}>
        <p>Copyright © Your Website 2022</p>
        </div>
      </footer>
    )
  }
}
