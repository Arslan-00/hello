import React from 'react'
import "./Service.css"
import { BsCheckLg } from 'react-icons/bs'

const Service = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2 style={{ color: "white" }}>Services</h2>
      <div className="container services__container">
        <article className='services'>
          <div className='services__head'>
            <h3>Ui/Ux Design</h3>
          </div>
          <ul className='service__lis'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className='services__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__lis'>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Service
