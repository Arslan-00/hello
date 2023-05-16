import React from 'react';
import "./About.css"
import Avtar from "../../assets/avatar.svg"
import { BsAward } from 'react-icons/bs'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { ImFilesEmpty } from 'react-icons/im'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2 style={{color:"white"}}>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Avtar} alt="" />
          </div>
        </div>
        <div className="about__content">

          <div className="about__cards">
            <div className="about__card" >
              <BsAward className='about__icon' />
              <h5>Experince</h5>
              <small> 1 year working</small>
            </div>
          </div>
          <div className="about__cards">
            <div className="about__card" >
              <AiOutlineUsergroupAdd className='about__icon' />
              <h5>Clients</h5>

              <small>200+ Worldwide</small>
            </div>
          </div>
          <div className="about__cards">
            <div className="about__card" >
              <ImFilesEmpty className='about__icon' />
              <h5>Projects</h5>
              <small> 10+</small>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam unde cumque dolor maiores ab. Earum reprehenderit et consectetur voluptatum distinctio maiores, adipisci aperiam. Quam expedita excepturi maxime nostrum, exercitationem est?</p>
          
        </div>
      </div>
    </section>
  )
}

export default About
