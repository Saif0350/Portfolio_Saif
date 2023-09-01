import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import {  Pagination, } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: "Saif Alam",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quia nesciunt ratione, possimus placeat est porro, nostrum accusamus velit sapiente cumque. Iusto, repellat nemo beatae quia magni ab vel nobis!"
  },


  {
    avatar: AVTR2,
    name: "Kaif Alam",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quia nesciunt ratione, possimus placeat est porro, nostrum accusamus velit sapiente cumque. Iusto, repellat nemo beatae quia magni ab vel nobis!"
  },


  {
    avatar: AVTR3,
    name: "Arbaz Alam",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quia nesciunt ratione, possimus placeat est porro, nostrum accusamus velit sapiente cumque. Iusto, repellat nemo beatae quia magni ab vel nobis!"
  },

  {
    avatar: AVTR4,
    name: "Sarwar Alam",
    review: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis quia nesciunt ratione, possimus placeat est porro, nostrum accusamus velit sapiente cumque. Iusto, repellat nemo beatae quia magni ab vel nobis!"
  }
]




const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Cleints</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
      {
        data.map(({avatar, name, review}, index) =>{
          return(

            <SwiperSlide key={index} className="testimonial">
           <div className="client__avatar">
            <img src={avatar} />
           </div>
           <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{review}</small>
            </SwiperSlide>

          )
        })
      }


          
      </Swiper>
    </section>
  )
}

export default Testimonials