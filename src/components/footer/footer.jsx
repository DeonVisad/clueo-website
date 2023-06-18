import React from 'react';
import './FooterStyles.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';

function Footer() {
  return (
    <div className='footer-container'>

      <div className='signup-container'>
        <h1 className='signup-title'>Stay up to date</h1>
        <p className='signup-subtitle'>Subscribe to stay in the loop on new products and promotions!</p>
        <input className='email-input' placeholder='your@email.com'/>
        <button href='/' className='signup-btn'>SIGN UP</button>  
      </div>

      <div className='links-container1'>
        <p className='footer-link'>Our Story</p>
        <p className='footer-link'>Wholesale & Partnerships</p>
        <p className='footer-link'>Help & FAQ</p>
        <p className='footer-link'>Contact Us</p>
        <p className='footer-link'>Affiliate</p>
      </div>

      <div className='links-container2'>
        <p className='footer-link'>Ingredients</p>
        <p className='footer-link'>Candle Care</p>
        <p className='footer-link'>Blog</p>
        <p className='footer-link'>Refer-a-Friend</p>
        <p className='footer-link'>Privacy Notice</p>
      </div>

      <div className='links-container3'>
        <span><FaFacebookF className='socials' /></span>
        <span><FiInstagram className='socials' /></span>
      </div>

    </div>
  )
}

export default Footer