import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
     <header>
       <div className="container header_container">
         <h5>Hello I'm</h5>
         <h1>Collins Abu</h1>
         <h5 className="text-light">Full Stack Developer | UI & Graphics Designer </h5>
         <CTA/>
         <HeaderSocials/>

         <div className="me">
           <img src="https://i.postimg.cc/SQnHnj3K/collins-Abu-Resume.png" alt="collins Image" />
       </div>

       <a href="#contact" className="scroll__down">Scroll Down</a>

       </div>
     </header>
  )
}

export default Header