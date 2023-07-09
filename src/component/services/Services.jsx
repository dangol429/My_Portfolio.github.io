import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Strong passion for UI/UX design.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Created projects using Figma and designed them independently.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Deep understanding of user-centered design principles.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Ability to combine web development skills with design expertise for seamless user experiences.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Proficient in HTML, CSS, JavaScript, ReactJS, Node.js, PHP, and other web development technologies.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Created websites and web applications using a variety of frameworks and tools.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Strong problem-solving skills for troubleshooting and debugging code.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Familiarity with responsive design principles to ensure optimal user experience across devices.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Ability to work with databases and back-end technologies for dynamic web applications.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Continuous learning mindset to stay updated with the latest trends and advancements in web development.</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service_head'>
            <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Adept in content creation for various platforms, including websites, blogs, social media, and marketing materials.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Strong writing skills with a keen eye for grammar, style, and storytelling.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Proficient in conducting research and gathering information to create informative and engaging content.</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Experience in optimizing content for search engines (SEO) to enhance visibility and reach a wider audience.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>

  )
}

export default Services