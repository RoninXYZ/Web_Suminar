
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="dropdown">

        <div className="brand">
          <span>☰</span>
          <h2>SUMINAR<small>®</small></h2>
        </div>

        <div className="dropdown-list">

          <Link to="/">HOME</Link>
          <Link to="/wash"> CAR WASH</Link>
          <Link to="/detailing"> DETAILING</Link>
          <Link to="/gallery"> GALLERY</Link>
          <Link to="/about"> ABOUT</Link>

        </div>

      </div>

      <p>EST. 2013</p>

    </nav>
  );
}

export default Navbar;
