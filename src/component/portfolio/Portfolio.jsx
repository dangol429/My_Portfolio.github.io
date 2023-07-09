import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Travel Website, a personal project',
    github: 'https://github.com/dangol429/Travel-Website',
    demo: 'https://dangol429.github.io/Travel-Website/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'BookExplorer, : Seamless Book Browsing and Search using',
    github: 'https://github.com/dangol429/Frontend-internship-assigment.github.io',
    demo: 'https://frontend-internship-assigment-github-io.vercel.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Clothing Website, Internshala Trainings Project',
    github: 'https://github.com/dangol429/Clothing-Website.github.io',
    demo: 'https://dangol429.github.io/Clothing-Website.github.io/index.html'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio