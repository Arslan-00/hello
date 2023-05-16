import React from 'react'
import "./Experience.css"
import { AiOutlineCheckCircle } from 'react-icons/ai'
const Experience = () => {
  return (
    <section id='experinece'>
      <h5>What Skills I Have</h5>
      <h2 style={{color:"white"}}>My Experience </h2>
      <div className="container experience__container">
        <div className="experience__Frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <div className='experience__details'>
              <AiOutlineCheckCircle  className='experience__details-icon'/>
              <div><h4>HTML</h4>
                </div>
            </div>
            <div className='experience__details'>
              <AiOutlineCheckCircle  className='experience__details-icon'/>
              <div><h4>CSS</h4>
               </div>
            </div>
            <div className='experience__details'>
              <AiOutlineCheckCircle  className='experience__details-icon'/>
              <div> <h4>JavaScript</h4>
                </div>
            </div>
            <div className='experience__details'>
              <AiOutlineCheckCircle  className='experience__details-icon'/>
              <div> <h4>React</h4>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  )
}

export default Experience
