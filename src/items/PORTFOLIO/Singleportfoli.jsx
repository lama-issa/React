import React, { Component } from 'react'

export default class Singleportfoli extends Component {
  render() {
    let {img}= this.props.data;
    return (
      <div className='col-md-6 col-lg-4 mt-4'>
        <img src={`img/${img}`} alt='nn' className='img-fluid rounded'/>
        </div>
    )
  }
}
