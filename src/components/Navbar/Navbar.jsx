import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";
import Logo from "../../assets/logo.svg";
import { Button } from "../../ui/Button/Button";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

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
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={Logo} alt="Barbershop Logo" />
        </div>

        <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/our-team">Our Team</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li>
            <Link to="/contact" className="book-btn">
              <Button style={{ marginTop: "-5px" }} className="book-btn">Contact Us</Button>
            </Link>
          </li>
        </ul>

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <IoClose /> : <FaBars />}
        </div>
      </nav>
    </>
  );
}
