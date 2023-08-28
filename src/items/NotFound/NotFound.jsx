import React, { Component } from 'react';
import imge from './img/404-error-pana.svg';


export default class NotFound extends Component {
  render() {
    return (
      <div className='container text-center vh-100 d-flex justify-content-center align-items-center'><img src={imge} alt='a' width="500" height="500"/></div>
    )
  }
}
