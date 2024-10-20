import "./Hero.css";
import {
  FaGithub,
  FaDiscord,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaUserCheck,
  FaCloudDownloadAlt,
} from "react-icons/fa";
import img from "./download.svg";
export default function Hero() {
  return (
    <section id="home" style={{ animation: "view 1s forwards" }}>
      <img src={img} alt="img" />
      <div className="container">
        <div className="content">
          <div className="text">
            <h1>
              Hello,
              <br />
              This is{" "}
              <span style={{ color: "var(--accent-500)" }}>ELSHEMY</span> , I'm
              a <br />
              Professional{" "}
              <span style={{ color: "var(--secondary-400)" }}>Web</span> <br />
              <span style={{ color: "var(--secondary-400)" }}>Developer</span>.
            </h1>
          </div>
          <div className="socials">
            <a
              href="https://discord.com/users/629721249551089703"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord
                size={30}
                color="var(--accent-500)"
                style={{ marginRight: "15px" }}
              />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={30}
                color="var(--accent-500)"
                style={{ marginRight: "15px" }}
              />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                size={30}
                color="var(--accent-500)"
                style={{ marginRight: "15px" }}
              />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook
                size={30}
                color="var(--accent-500)"
                style={{ marginRight: "15px" }}
              />
            </a>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={30}
                color="var(--accent-500)"
                style={{ marginRight: "15px" }}
              />
            </a>
          </div>
          <div className="buttons">
            <button onClick={() => window.open("https://discord.com/users/629721249551089703")}>
              Contact Me
              <span>
                <FaUserCheck size={25} style={{ marginLeft: "10px" }} />
              </span>
            </button>
            <button>
              Download CV
              <span>
                <FaCloudDownloadAlt size={25} style={{ marginLeft: "10px" }} />
              </span>
            </button>
          </div>
        </div>
        <div className="code">
          <code>
            <div>
              <span style={{ color: "var(--accent-400)" }}>const </span>
              <span>coder </span>
              <span style={{ color: "var(--accent-400)" }}>= </span>
              <span>{`{`}</span>
            </div>
            <div className="willMargin">
              <span> name: </span>"
              <span style={{ color: "yellow" }}>ELSHEMY</span>",
            </div>
            <div className="willMargin">
              <span> skills: </span>
              <span>
                ['<span style={{ color: "yellow" }}>React</span>', '
                <span style={{ color: "yellow" }}>Next JS</span>','
                <span style={{ color: "yellow" }}>Discord.JS</span>', "
                <span style={{ color: "yellow" }}>Node JS</span>", "
                <span style={{ color: "yellow" }}>JS</span>", "
                <span style={{ color: "yellow" }}>HTML</span>", "
                <span style={{ color: "yellow" }}>CSS</span>", "
                <span style={{ color: "yellow" }}>Express JS</span>"],
              </span>
            </div>
            <div className="willMargin">
              <span> hardWorker: </span>
              <span style={{ color: "orange" }}>true</span>,
            </div>
            <div className="willMargin">
              <span> quickLearner: </span>
              <span style={{ color: "orange" }}>true</span>,
            </div>
            <div className="willMargin">
              <span> problemSolver: </span>
              <span style={{ color: "orange" }}>true</span>,
            </div>
            <div>
              <span>{`}`}</span>
            </div>
          </code>
        </div>
      </div>
    </section>
  );
}
