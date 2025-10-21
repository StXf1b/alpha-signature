import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and tagline */}
        <div className="footer-section">
          <img src={Logo} alt="Alpha Signature Logo" className="footer-logo" />
          <p>Crafting confidence — where precision meets style.</p>
        </div>

        {/* Contact info */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p><FaMapMarkerAlt /> South Main St. Bandon, Co. Cork</p>
          <p><FaPhoneAlt /> (023) 884 1870</p>
          <p><FaEnvelope /> alpha_signature@hotmail.com</p>
        </div>

        {/* Opening hours */}
        <div className="footer-section">
          <h3><FaClock /> Opening Hours</h3>
          <ul className="footer-hours">
            <li>Mon – Thu: 9am – 6pm</li>
            <li>Fri: 9am – 7pm</li>
            <li>Sat: 9am – 6pm</li>
            <li>Bank Holiday: 11am – 4pm</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

        {/* Socials */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Alpha Signature. All rights reserved.</p>
      </div>
    </footer>
  );
}
