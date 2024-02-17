import React from 'react';
import "./Newsletter.css";
import { LuSend } from "react-icons/lu";

const Newletter = () => {
  return (
    <div className='News-letter__container'>
    <div className='news__heading'> <h1> Newsletter </h1></div>
    <div className='news__description'> <p> Get Our Timely Updates  and Exclusive  Offers  Delivered Right at your place!  </p></div>
    <div className='news__inputcontainer'>
    <input type="text" placeholder='Your Email'  />
    <button className='btn'>  <LuSend/> </button>
    
    
    </div>
    </div>
  )
}

export default Newletter