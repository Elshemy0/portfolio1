import "./Skills.css";
import js from "../../../public/assest/js.svg";
import ts from "../../../public/assest/ts.svg";
import html from "../../../public/assest/html.svg";
import css from "../../../public/assest/css.svg";
import Bootstrap from "../../../public/assest/Bootstrap.svg";
import next from "../../../public/assest/next.svg";
import react from "../../../public/assest/react.svg";
import mongo from "../../../public/assest/mongo.svg";
import matirial from "../../../public/assest/matrial ui.svg";
import tailwind from "../../../public/assest/tailwind css.svg";

let arrOfSkills = [
  {
    img: js,
    title: "JavaScript",
  },
  {
    img: ts,
    title: "TypeScript",
  },
  {
    img: html,
    title: "HTML",
  },
  {
    img: css,
    title: "CSS",
  },
  {
    img: Bootstrap,
    title: "Bootstrap",
  },
  {
    img: next,
    title: "Next JS",
  },
  {
    img: react,
    title: "React JS",
  },
  {
    img: mongo,
    title: "Mongo DB",
  },
  {
    img: matirial,
    title: "Material UI",
  },
  {
    img: tailwind,
    title: "Tailwind CSS",
  },
];

let willMap = [
  ...arrOfSkills,
  ...arrOfSkills,
  ...arrOfSkills,
  ...arrOfSkills,
  ...arrOfSkills,
  ...arrOfSkills,
];

export default function Skills() {
  function animation() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        document.getElementById("skills").style.animation =
          "show 1s forwards";
      }
    });
  }
  animation();

  return (
    <section id="skills">
      <div className="line"></div>
      <div className="main">
        <div className="addre">
          <span></span>
          <span>Skills</span>
          <span></span>
        </div>
        <div className="skillsCont">
          {willMap.map((item, index) => {
            return (
              <div className="skill">
                <div className="topLine"></div>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={item.img}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
