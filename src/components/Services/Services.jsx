import React from "react";
import Lottie from "lottie-react";
import dev from "../../Animation - 1729337835180.json";
import { FaLaptopCode } from "react-icons/fa6";
import "./Services.css";
export default function Services() {
  let services = [
    {
      name: "Web Development",
      icon: <FaLaptopCode size={50} />,
    },
    {
      name: "Web Design",
      icon: <FaLaptopCode size={50} />,
    },
    {
      name: "Discord Bots",
      icon: <FaLaptopCode size={50} />,
    },
  ];


  function animation() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            document.getElementById("services").style.animation = "show 1s forwards";
          }
    })
  }
  animation()

  const handleMove = () => {
    let elements = document.querySelectorAll(".servicesContent .theServices .service");
    elements.forEach(element => {
      element.addEventListener("mousemove", function(e) {
        let x = e.clientX - this.offsetLeft;
        let y = e.clientY - this.offsetTop;
        element.style.setProperty("--x", x + "px");
        element.style.setProperty("--y", y + "px");
      })
    })
  };
  handleMove()


  return (
    <section id="services">
        <div className="line"></div>
      <div className="head">
        <span></span>
        <span>Services</span>
        <span></span>
      </div>
      <div className="servicesContent">
        <Lottie id="anim" animationData={dev} style={{ width: "50%" }} />
        <div className="theServices">
          {services.map((service, index) => {
            return (
              <div className="service" key={index}>
                <span>{service.icon}</span>
                <h2>{service.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
