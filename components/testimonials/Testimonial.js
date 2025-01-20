import "./testimonials.css"

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import for tesimonial images
 

const Testimonial = () => {

 const data = [
      {
         avatar: "https://i.postimg.cc/7LCvSf9x/img-test.jpg",
        name: 'Earnest Okafor',
        review: "Working with Collins Abu has been an absolute pleasure. As a company in the solid mineral industry, it was essential for us to have a website that not only looked professional but also effectively communicated our services and capabilities to potential clients. Collins delivered exactly that. He designed a user-friendly, visually appealing website using WordPress that has significantly improved our online presence. His expertise in HTML/CSS ensured that the site was both responsive and fast-loading, which is critical for our business. We highly recommend Collins for any business looking to enhance their digital presence"
      },

      {
        avatar: "https://i.postimg.cc/0NhTnPX7/img-test2.jpg",
        name: 'Ibrahim Rapheal',
        review: "I had the pleasure of working with Collins on a web development project, and I couldn't be happier with the results. His expertise in frontend development and eye for design truly impressed me. He seamlessly translated our requirements into a visually stunning and user-friendly website. His attention to detail, professionalism, and ability to meet deadlines made the entire process a breeze. I highly recommend Collins Abu for anyone seeking a talented and reliable frontend developer"   
      },

      {
        avatar: "https://i.postimg.cc/QCWtqwKH/img3.jpg",
        name: 'Taofik Elebute',
        review: "As a fellow frontend developer, I have had the opportunity to collaborate with Mr. Collins Abu on several projects over the last past one year+. His skills in both frontend development and graphic design are exceptional. Collins has a keen eye for aesthetics and a deep understanding of user experience principles. He consistently deliver clean, well-structured code and have a knack for solving complex design challenges. It's a pleasure working with him, and I highly recommend him to anyone in need of a skilled frontend developer"   
      },
      {
        avatar: "https://i.postimg.cc/tTPLmw8w/img4.jpg", 
        name: 'Samson Aruhi',
        review: "I recently visited a website developed by Collins, and I must say it was a delightful experience. The user interface was intuitive, visually appealing, and responsive across different devices. Navigating through the website was a breeze, and the attention to detail was evident in every aspect. Collins Abu has truly created a seamless and enjoyable user experience. I highly recommend his expertise to anyone looking for a top-notch frontend developer"   
      }
 ]


  return (
    <section id="testimonials" className="">
    <h5 className="text-[12px]">Review from Clients</h5>
    <h2 className="text-2xl">Testimonials</h2>

    <Swiper className="container testimonials_container"
    
          // install Swiper modules
          modules={[ Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
    
    >
    {
        data.map((item, index) => {
        return (
          <SwiperSlide key={index} className="testimonial">
       <div className="client_avatar">
          <img src={item.avatar} alt="" />
        </div>

        <h5>{item.name}</h5>
          <small className="client_review">
            {item.review}
          </small>
        </SwiperSlide> 
          )
        })

}
    </Swiper>
  </section>
  )
}

export default Testimonial