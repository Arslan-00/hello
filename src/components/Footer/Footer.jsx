import React from 'react'
import "./Footer.css"
import {AiFillFacebook,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Arslan</a>
      <ul className="permalinks">
        <li><a href="#"></a>Home</li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonals">Testimonals</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><AiFillFacebook/></a>
        <a href="https://instagram.com"><AiOutlineInstagram/></a>
        <a href="https://twitter.com"><AiOutlineTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Arslan All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
