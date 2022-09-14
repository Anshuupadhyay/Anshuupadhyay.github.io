import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import {AiTwotoneMail}  from "react-icons/ai"
import {AiFillGithub}  from  "react-icons/ai"
import {AiFillLinkedin}  from  "react-icons/ai"
function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
      <a
         href="mailto:anshuu131@gmail.com"
          className="contact whatsapp"
          
        >
        <AiTwotoneMail className="icon" />
          <h2>
          <span></span>
          </h2>
        </a>
<a
         href="https://www.linkedin.com/in/anshu-upadhyay28/"
          className="contact whatsapp"
          target={"blank"}
        >
        <AiFillLinkedin className="icon" />
          <h2>
             <span></span>
          </h2>
        </a>
        
      </div>
    </div>
  );
}

export default Contact;
