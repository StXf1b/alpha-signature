import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import "./Navbar.css";
import Logo from "../../assets/logo.svg"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      {/* Top Info Bar */}
      <div className="topbar">
        <div className="topbar-content">
          <div className="topbar-item">
            <FaPhoneAlt /> <span>(023) 884 1870</span>
          </div>
          <div className="topbar-item">
            <FaEnvelope /> <span>alpha_signature@hotmail.com</span>
          </div>
          <div className="topbar-item">
            <FaMapMarkerAlt /> <span>South Main St. Bandon, Co. Cork</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar`}>
        <div className="navbar-logo">
          <img src={Logo} alt="Barbershop Logo" />
        </div>

        <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Barbers</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#" className="book-btn">
              Book Now
            </a>
          </li>
        </ul>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>
      </nav>
    </>
  );
}
