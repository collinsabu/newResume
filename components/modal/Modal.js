import { useEffect } from 'react'
import "./modal.css"
import {AiFillCloseCircle} from "react-icons/ai"
import { motion } from "framer-motion"



const Modal = ({ setModal }) => {

;

  useEffect(() =>{
    return setModal(true)
  },[])


  return (
    <motion.div

    initial={{ y: -1000, opacity: 0 }} 
      animate={{y: 90, opacity: 1}} 
      transition={{ type: "spring", stiffness:150, duration: "500ms", delay: 6 }}
    
    className='modal-container-section'>
      <div className='modal-container'>
    
        <div className='modal-image'><img src="https://i.postimg.cc/j5hQy979/graphics-giraph.jpg" /></div>
        <div className='content'>
        <AiFillCloseCircle className='modal-close' onClick={(e) => setModal(false)}/>
          <h2>Hi, Would you like to see my </h2>
          <p>Graphics | UI Designs?</p>
          <a href="https://grahics-design.vercel.app/" className='uidesign'>Graphics</a>
          <a href="https://www.graphics.collinsabu.tech/" target="_blank" className='graphics'>UI Designs</a>
        </div>
      </div>
    </motion.div>
  )
}

export default Modal