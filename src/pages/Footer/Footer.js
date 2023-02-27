import React from 'react';
 import img from '../../imgess/travelImg.png'
const Footer = () => {
    return (
        <div className='mx-4 mt-2'>
            <footer className="footer pt-2   bg-blue-300 text-base-content">
  <div className='ml-4'>
    <img className='w-10 ml-4' src={img} alt='#'></img>
    <p>Travel Industries Ltd.<br/>Providing reliable tech since 2023</p>
  </div> 
  <div>
    <span className="footer-title ">Services</span> 
    <a >Branding</a> 
    <a >Design</a> 
    <a >Marketing</a> 
    <a>Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a >About us</a> 
    <a >Contact</a> 
    <a >Jobs</a> 
    <a >Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a >Terms of use</a> 
    <a >Privacy policy</a> 
    <a >Cookie policy</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;