import "./About.css"
import AboutImg from "../../assets/about.jpg"
import { FaScissors } from "react-icons/fa6";
import { GiHairStrands } from "react-icons/gi";
import { Button } from "../../ui/Button/Button"
import { Link } from "react-router-dom";
function About() {
  return (
    <section className="about">
        <div className="about-content">
            <h1>About Us</h1>
            <p>Alpha Signature presents the revolutionary transition between precision barbering and contemporary hairdressing. A fusion of technical skill and commitment to bridge the gap from the traditional barbers in Cork and the modern hair salon.</p>
            <div className="about-box-container">
                <div className="about-box">
                    <h2><span><FaScissors /></span>Our Mission</h2>
                    <p>To provide a unique grooming experience that blends traditional barbering with modern techniques, ensuring every client leaves feeling confident and refreshed.</p>
                </div>
                <div className="about-box">
                    <h2><span><GiHairStrands /></span>Our Vision</h2>
                    <p>To be the leading barbershop in Cork, known for our exceptional service, skilled barbers, and commitment to customer satisfaction.</p>
                </div>
            </div>
            <Link to="/our-team">
                <Button variant="primary" style={{marginTop: "20px"}}>Our Team</Button>
            </Link>
        </div>
        <div className="about-image"><img src={AboutImg} alt="About" /></div>
    </section>
    
  )
}

export default About