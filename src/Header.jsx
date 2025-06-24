import { Link } from "react-router-dom";
import "./Header.css";
import './responsive-design.css'; 
import zoraLogo from "./assets/logo.png";

function Header() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;