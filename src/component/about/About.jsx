import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {BsFillAwardFill} from 'react-icons/bs'
import {AiFillFolderOpen} from 'react-icons/ai'
import {LuNewspaper} from 'react-icons/lu'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <BsFillAwardFill className='about_icon'/>
              <h5>Experience</h5>
              <small> 6 months of Internship and A year of bulding websites</small>
            </article>
            <article className='about_card'>
              <LuNewspaper className='about_icon'/>
              <h5>Certificates</h5>
              <small>Completed courses on Python, Web Development, Internships etc.</small>
            </article>
            <article className='about_card'>
              <AiFillFolderOpen className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          I am a 2023 graduate in B.E. Computer Science with a strong web development background. I have experience in HTML, CSS, JavaScript, ReactJS, Node.js, PHP, and more. Through courses and an internship in full-stack development, I am eager to secure a developer's job to further enhance my skills and contribute to impactful projects.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About