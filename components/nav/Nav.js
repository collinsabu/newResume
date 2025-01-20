import "./nav.css"
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {RiBook2Line} from "react-icons/ri";
import {RiServiceLine} from "react-icons/ri";
import {MdOutlineContactPage} from "react-icons/md";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? "active" : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? "active" : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "active" : ''}><RiBook2Line/></a>
      <a href="#service" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? "active" : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? "active" : ''}><MdOutlineContactPage/></a>
    </nav>
  )
}

export default Nav