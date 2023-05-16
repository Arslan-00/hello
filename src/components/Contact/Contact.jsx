import React from 'react'
import "./Contact.css"
import { AiOutlineMail } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {

  const send = (e) => {
    e.preventDefault();
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2 style={{ color: "white" }}>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ak1736345@gmail.com</h5>
            <a href="">Send a message</a>
          </article>
         
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 8114430201</h5>
            <a href="https://api.whatsapp.com/send?phone">Send a message</a>
          </article>
        </div>
        {/* End Of Contact Option */}
        <form action="">

          <input type="text" name="name" id="" placeholder='Your name' required />
          <input type="email" name="email" id="" placeholder='your email' required />
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button onClick={send} type='submit' className='btn btn-primary' >Send Message</button>

        </form>
      </div>


    </section>
  )
}

export default Contact
