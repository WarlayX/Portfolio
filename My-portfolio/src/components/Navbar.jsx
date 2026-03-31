import { Link } from "react-router-dom";
import 'boxicons/css/boxicons.min.css';

export default function Navbar () {
  return (
    <header>
      <nav>



        <h1>Adewole</h1>

        <div>
          <ul>
            <li><Link to="/">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>


        <div>
          <i className="bx bx-sun" />
          <i className="bx bx-moon" />
        </div>



      </nav>
    </header>
  )
}