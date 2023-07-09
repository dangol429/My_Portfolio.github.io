import React from 'react'
import './Experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {BiLogoCss3} from 'react-icons/bi'
import {RiBootstrapFill} from 'react-icons/ri'
import {DiJavascript1} from 'react-icons/di'
import {BiLogoReact} from 'react-icons/bi'
import {BiLogoNodejs} from 'react-icons/bi'
import {BiLogoPython} from 'react-icons/bi'
import {DiMysql} from 'react-icons/di'



const Experience = () => {
  return (
    <section id='experience'>
      <h5 id="top">What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience_container'>
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className='frontend_skills'>
            <article className='experience_details'>
              <AiOutlineHtml5 className='icon'/>
              <div>
                <h3>HTML</h3>
                <h5>Advanced</h5>
              </div>
            </article>
            <article className='experience_details'>
              <BiLogoCss3 className='icon'/>
              <div>
                <h3>CSS</h3>
                <h5>Advanced</h5>
              </div>
            </article>
            <article className='experience_details'>
              <RiBootstrapFill className='icon'/>
              <div>
                <h3>Bootstrap</h3>
                <h5>Advanced</h5>
              </div>
            </article>
            <article className='experience_details'>
              <DiJavascript1 className='icon'/>
              <div>
                <h3>JavaScript</h3>
                <h5>Intermediate</h5>
              </div>
            </article>
            <article className='experience_details'>
              <BiLogoReact className='icon'/>
              <div>
                <h3>React</h3>
                <h5>Advanced</h5>
              </div>
            </article>
          </div>

        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className='frontend_skills'>
            <article className='experience_details'>
              <BiLogoNodejs className='icon'/>
              <div>
                <h3>NodeJS</h3>
                <h5>Intermediate</h5>
              </div>
            </article>
            <article className='experience_details'>
              <BiLogoPython className='icon'/>
              <div>
                <h3>Python</h3>
                <h5>Adequate</h5>
              </div>
            </article>
            <article className='experience_details'>
              <DiMysql className='icon'/>
              <div>
                <h3>SQL</h3>
                <h5>Intermediate</h5>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience