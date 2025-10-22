import "./Home.css"
import Hero from "../../assets/hero.png"
import {Button} from "../../ui/Button/Button"
import About from "../../components/About/About"
import Review from "../../components/Review/Review"
import OurValues from '../../components/OurValues/OurValues'
import FeaturedServices from "../../components/FeaturedServices/FeaturedServices"
import PageTransition from "../../components/PageTransition/PageTransition"
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <>
      <PageTransition>
        <section className="hero">
          <div className="hero-content">
              <h1>Alpha Signature Crafting Confidence</h1>
              <p>Alpha Signature presents the revolutionary transition between precision barbering and contemporary hairdressing.</p>
              <div className="hero-buttons">
              <Link to="/contact">
                <Button variant='primary'>Book Appointment</Button>
              </Link>
              <Link to="/services">
                <Button variant='secondary'>View Services</Button>
              </Link>
              </div>
          </div>
          <div className="hero-image"><img src={Hero} alt="Hero" /></div>
        </section>
        <OurValues /> 
        {/* ff */}
        <About />
        <FeaturedServices />
        <Review />
      </PageTransition>
    </>
  )
}
