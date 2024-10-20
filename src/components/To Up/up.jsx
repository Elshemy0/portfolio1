import { FaArrowUp } from "react-icons/fa" 
import "./up.css"
export default function up() {



    function animation() {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
          document.getElementById("up").style.opacity = "1";
        } else {
          document.getElementById("up").style.opacity = "0";
        }
      });
    }
    animation()


  return (
    <div id="up" className='up'>
      <a href="#home"><FaArrowUp color="var(--text-100)" /></a>
    </div>
  )
}
