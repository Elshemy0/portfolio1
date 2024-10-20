import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
export default function Navbar() {

  const handleMenu = () => {
    const menu = document.querySelector("nav .navMobile .menu .links");
    menu.classList.toggle("active");
  }

  return (
    <nav>
      <div className="navPC">
        <div className="logo">
          <a href="/">ELSHEMY</a>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navMobile">
        <div className="logo">
          <a href="/">ELSHEMY</a>
        </div>
        <div className="menu">
          <button onClick={handleMenu} style={{ border: "none", backgroundColor: "transparent" }}>
            {" "}
            <IoMenu size={50} color="var(--text-100)" />
          </button>
          <div className="links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
