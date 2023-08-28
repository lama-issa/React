import React, { Component } from 'react';
import Singleportfoli from "./Singleportfoli";
import style from './Portfoile.module.css';
export default class PORTFOLIO extends Component {
  state={
    movies: [
      { id: 0,  img: "cake.png" },
      { id: 1,  img: "cabin.png" },
      { id: 2,  img: "circus.png" },
      { id: 3,  img: "game.png" },
      { id: 4,  img: "submarine.png" },
      { id: 5,  img: "safe.png" },
    ],
  }
  render() {
    let {movies}=this.state;
    return (

      <div className={`${style.port} `}>
        <h1 className='text-center pt-4 fw-bold'>PORTFOLIO</h1>
        <h5 ><i className="fa-solid fa-star"></i></h5>
        <div className='row'>
          {movies.map((ele)=>{
            return <Singleportfoli key={ele.id} data={ele}/>;
          
          })}

        </div>
        </div>
    );
  }
}
