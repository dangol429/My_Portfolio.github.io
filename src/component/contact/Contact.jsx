import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai';
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n9r3iwr', 'template_fzuz1uq', form.current, 'iNuu0DMK2HhHIC-yX')
  };

  
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='apps'>
          <article className='app_box'>
            <span><AiOutlineMail className='icons'/></span>
            <h3>Email</h3>
            <small>prathamdangol@gmail.com</small>
            <a href="mailto:prathamdangol@gmail.com">Send a message</a>
          </article>
          <article className='app_box'>
            <span><BsMessenger className='icons'/></span>
            <h3>Messenger</h3>
            <small>Pratham Dangol</small>
            <a href="https://www.m.me/prathamd/">Send a message</a>
          </article>
          <article className='app_box'>
            <span><AiOutlineWhatsApp className='icons'/></span>
            <h3>WhatsApp</h3>
            <small>953-503-0958</small>
            <a href="https://api.whatsapp.com/send?phone=919535030958">Send a message</a>
          </article>
        </div>
        <article className='form'>
          <form ref={form} onSubmit={sendEmail}>
            <input type='text' name='name' placeholder='Your Full Name' className='form_box' required></input>
            <input type='email' name='email' placeholder='Your Email' className='form_box' required></input>
            <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>
              Send Message
            </button>
          </form>
        </article>
      </div>
    </section>
  )
}

export default Contact
