"use client"

import Modal from '@/components/modal/Modal'
import Header from '@/components/header/Header'
import Nav from '@/components/nav/Nav'
import About from '@/components/about/About'
import Experience from '@/components/experience/Experience'
import Service from '@/components/service/Service'
import Portfolio from '@/components/portfolio/Portfolio'
import Testimonial from '@/components/testimonials/Testimonial'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'
import {useState} from "react"
import "./globals.css"

export default function Home() {
  
  const [modal, setModal] = useState(true)

  return (

    <div>
      {/* Modal */}
      {modal && <Modal setModal={setModal}/>}
      {/* Header Section */}
      <Header/>
      {/* Navigation */}
      <Nav />
       {/* Main Content */}
        {/* About Section */}
      <About />
       {/* Experience Section  */}
      <Experience />
       {/* Service Section */}
      <Service />
       {/* Portfolio */}
      <Portfolio />
       {/* Testimonial Section */}
      <Testimonial/>
       {/* Contact Section */}
      <Contact/>
       {/* Footer */}
      <Footer/>
    </div>

  )
}
