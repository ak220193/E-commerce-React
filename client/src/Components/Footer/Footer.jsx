import React from 'react'
import "./Footer.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { ImPinterest } from "react-icons/im";


const Footer = () => {
  return (
    <div> 
   
    <div className='Footer__container'>
    <div className='Footer__left'>
    <div className='Footer__Logo'>
    <h1 className='Logo'> Luxe Divas </h1>
    <p className='desc'> Luxe Divas is online E-commerce store that  specializes  in providing high quality products at your Doorstep , Refer your Friends get welcome bonus of 20% on your First order
  </p>
  <div className='Social__Container'> 
  <div className='social-icon'> <FaFacebookSquare/></div>
  <div className='social-icon'><FaInstagram/></div>
  <div className='social-icon'><RiTwitterXLine/></div>
  <div className='social-icon'><ImPinterest/></div>
  </div>
    </div>
    </div>
    <div className='Footer__Center'>
    <div className='Title'> <h3> Quick Links </h3></div>
    <div className='List'>  
    <ul> 
      <li> Home </li>
      <li> Cart </li>
      <li> Mens Fashion  </li>
      <li> Women's Fashion </li>
      <li> Accesories </li>
      <li> My Account  </li>
      <li> My Orders  </li>
      <li> Wishlist  </li>
      <li> Terms & Conditons </li>
      <li> Contact Us </li>
    </ul>
    </div>
    
    </div>
    <div className='Footer__right'>
    
    </div>
    
    </div>
    </div>
  )
}

export default Footer