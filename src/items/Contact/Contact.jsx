import React, { Component } from 'react';
import style from './Contact.module.css';

export default class Contact extends Component {
  render() {
    return (
      <div className={`${style.contact}  `}>
        <h1 className='text-center fw-bold'>CONTACT ME</h1>
        <h5 className={`${style.hh}`}><i className="fa-solid fa-star"></i></h5>
        <form >
            
            <div className='mb-5'>
            <label>Full name</label><br></br>
            <input type="text"/>    
            </div>
            <div className='mb-5'>
            <label>Email address</label><br></br>
            <input type="text"/>    
            </div>
            <div className='mb-5'>
            <label>Phone number</label><br></br>
            <input type="text"/>
            </div>
            <div className='mb-5'>
            <label>Message</label><br></br>
            <textarea />
            </div>
            <button className={`${style.contbtn}`}>Send</button>
        </form>
      </div>
    )
  }
}
