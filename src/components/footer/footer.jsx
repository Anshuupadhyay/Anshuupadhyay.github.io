import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import {TiSocialLinkedin} from "react-icons/ti"

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a  target="_blank" href="https://github.com/Anshuupadhyay">
          <TiSocialGithub className="social" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/anshu-upadhyay28/">
          <TiSocialLinkedin className="social" />
        </a>
       
      </div>
    </div>
  );
}
export default Footer;
