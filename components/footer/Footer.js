import "./footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="" className="footer_log">
          <h1 className="font-semibold ">Collins Abu</h1>
        </a>
        <ul className="permalinks">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#service">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="https://grahics-design.vercel.app/">GraphicsDesign</a>
          </li>
        </ul>

        <div className="footer_socials">
          <a href="https://www.instagram.com/dev_collinsabu/" target="_blank">
            <AiFillInstagram />
          </a>
          <a href="https://twitter.com/dev_collins1" target="_blank">
            <IoLogoTwitter />
          </a>
          <a href="https://github.com/collinsabu" target="_blank">
            <BsGithub />
          </a>
        </div>
        <div className="footer_copyright">
          <small>&copy; Collins Abu. All rights reserved.</small>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
