import React from 'react'
import "./Testimonials.css"
import AVTR1 from "../../assets/ironman.jpg"
import AVTR2 from "../../assets/joker.jpg"
import AVTR3 from "../../assets/batman.jpg"
import AVTR4 from "../../assets/dr strang.jpg"
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
const data = [
  {
    avatar: AVTR1,
    name: 'ironman',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellat labore nulla nihil consequatur voluptates molestiae veniam, modi temporibus quo veritatis illum magnam eligendi. Porro nam modi molestiae dolor fuga.'


  },
  {
    avatar: AVTR2,
    name: 'ironman',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellat labore nulla nihil consequatur voluptates molestiae veniam, modi temporibus quo veritatis illum magnam eligendi. Porro nam modi molestiae dolor fuga.'


  },
  {
    avatar: AVTR3,
    name: 'ironman',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellat labore nulla nihil consequatur voluptates molestiae veniam, modi temporibus quo veritatis illum magnam eligendi. Porro nam modi molestiae dolor fuga.'


  },
  {
    avatar: AVTR4,
    name: 'ironman',
    review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repellat labore nulla nihil consequatur voluptates molestiae veniam, modi temporibus quo veritatis illum magnam eligendi. Porro nam modi molestiae dolor fuga.'


  },
]


const Testimonials = () => {
  return (
    <section id='testimonls'>
      <h5>Review from clients</h5>
      <h2 style={{ color: "white" }}>Testimonals</h2>
      <Swiper className="container .testimonals__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}

        pagination={{ clickable: true }}

      >
        {
          data.map(({ avatar, name, review }, index) => {

            <SwiperSlide key={index} className='testimonal'>
              <div className="client__avtar">
                <img src={avatar} alt="" />

              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>

          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials
