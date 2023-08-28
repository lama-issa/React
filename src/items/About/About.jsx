import React, { Component } from 'react'
import style from './About.module.css';
export default class About extends Component {
  render() {
    return (
      <div className={`${style.about}  d-flex justify-content-center align-items-center `}>
        <div className='text-center text-white'>
        <h1 className='fw-bold'>About</h1>
        <h5><i className="fa-solid fa-star"></i></h5>
        <div className='d-flex text-start w-50 m-auto '>
        <p className='me-5'>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        <p className='mb-5'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        </div>
        <button className={`${style.btnn}  p-3`}><i className="fa-solid fa-download me-2"></i>Free Download!</button>
        </div>
        </div>
    )
  }
}
