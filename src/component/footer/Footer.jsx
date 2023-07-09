import React from 'react'
import './Footer.css'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <section id='footer'>
      <div className="footer_container">
        <h1>PRATHAM DANGOL</h1>
        <div className="topics">
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#experience'>Experience</a>
          <a href='#services'>Services</a>
          <a href='#portfolio'>Portfolio</a>
          <a href='#certificates'>Certificates</a>
          <a href='#contact'>Contact</a>
        </div>
        <div className='apps'>
          <a href='https://www.facebook.com/prathamd'><BsFacebook/></a>
          <a href='https://www.instagram.com/pra.dxng/'><BsInstagram/></a>
          <a href='https://www.facebook.com/prathamd'><BsTwitter/></a>
        </div>
        <p>Pratham Dangol, All rights reserved.</p>
      </div>
    </section>
  )
}

export default Footer