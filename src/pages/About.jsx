import "./About.css"
import AboutImg from "../assets/about.jpg"
function About() {
  return (
    <section className="about">
    <div className="about-content">
      <h1>About Us</h1>
      <p>Alpha Signature presents the revolutionary transition between precision barbering and contemporary hairdressing. A fusion of technical skill and commitment to bridge the gap from the traditional barbers in Cork and the modern hair salon.</p>
    </div>
    <div className="about-image"><img src={AboutImg} alt="About" /></div>
    </section>
  )
}

export default About