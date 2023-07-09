import React from 'react'
import resume from '../../assets/cv.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href={resume} download className='btn'>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Chat!</a>
    </div>
  )
}

export default CTA