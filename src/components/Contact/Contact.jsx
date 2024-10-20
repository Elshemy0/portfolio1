import "./Contact.css";
import Lottie from "lottie-react";
import animation from "../../contact.json"
import {FaDiscord} from "react-icons/fa" 
export default function Contact() {
  return (
    <section id="contact">
      <div className="line"></div>
      <div className="head">
        <span></span>
        <span>Contact Me</span>
        <span></span>
      </div>

      <div className="contactCon">
        <div className="animation">
          <Lottie animationData={animation} style={{ width: "400px" }} />
        </div>
        <div className="contactNow">
          <button onClick={() => window.open("https://discord.com/users/629721249551089703")}><span className="contactSpan">Contact Now</span> <span><FaDiscord size={300} /></span></button>
        </div>
      </div>
    </section>
  );
}
