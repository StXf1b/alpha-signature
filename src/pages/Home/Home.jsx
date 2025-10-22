import "./Home.css"
import Hero from "../../assets/hero.png"
import {Button} from "../../ui/Button/Button"
import About from "../../components/About/About"
import Review from "../../components/Review/Review"
import OurValues from '../../components/OurValues/OurValues'
import FeaturedServices from "../../components/FeaturedServices/FeaturedServices"
import PageTransition from "../../components/PageTransition/PageTransition"
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"
export default function Home() {
  return (
    <>
    <Helmet>
        <title>Alpha Signature Barbershop | Precision & Style</title>
        <meta
          name="description"
          content="Alpha Signature Barbershop in Bandon, Cork — modern cuts, fades, beard trims and premium grooming in a relaxing environment."
        />
        <meta property="og:title" content="Alpha Signature Barbershop" />
        <meta property="og:description" content="Precision barbering meets modern style. Book your appointment today." />
        <meta property="og:image" content="/assets/hero.png" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Alpha Signature Barbershop",
            "image": "https://alphasignature.ie/assets/hero.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "South Main St.",
              "addressLocality": "Bandon",
              "addressRegion": "Cork",
              "addressCountry": "Ireland"
            },
            "telephone": "+353238841870",
            "openingHours": "Tu-Fr 09:00-18:00, Sa 09:00-17:00",
            "priceRange": "€€",
            "url": "https://alphasignature.ie"
          }
          `}
        </script>
      </Helmet>


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
        <About />
        <FeaturedServices />
        <Review />
      </PageTransition>
    </>
  )
}
