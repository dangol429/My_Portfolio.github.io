import React, { useEffect } from 'react';
import './certificates.css';
import IMG1 from '../../assets/certificate1.png';
import IMG2 from '../../assets/certificate2.png'

const Certificates = () => {
  useEffect(() => {
    document.querySelectorAll('.certificate_image img').forEach((image) => {
      image.onclick = () => {
        document.querySelector('.popup_image').style.display = 'block';
        document.querySelector('.popup_image img').src = image.getAttribute('src');
      };
    });

    document.querySelector('.popup_image span').onclick = () => {
      document.querySelector('.popup_image').style.display = 'none';
    };
  }, []);

  return (
    <section id='certificates'>
      <h5>What I've Learned</h5>
      <h2>Certificates</h2>
      <div className='container certificates_container'>
        <article>
          <article className='certificate_image'>
            <img className='certificates' alt="Certificate" src={IMG1}/>
          </article>
          <div className='certificate_info'>
            <article>
            <h2>Front-end Web Development Course,<br/><span>Internshala Trainings</span></h2>
            </article>
          </div>
        </article>
        <article>
          <article className='certificate_image'>
            <img className='certificates' alt="Certificate" src={IMG2}/>
          </article>
          <div className='certificate_info'>
            <article>
            <h2>Full Stack Development Internship<br/><span>Solar Secure</span></h2>
            </article>
          </div>
        </article>
      </div>
      
      <div className='popup_image'>
        <span>&times;</span>
        <img id='FullImage' src={IMG1} alt='what' />
      </div>
    </section>
  );
};

export default Certificates;
