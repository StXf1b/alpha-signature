import "./Careers.css";
import { Button } from "../../ui/Button/Button";
import { Link } from "react-router-dom";
import { FaEnvelopeOpenText, FaUserTie } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import PageTransition from "../../components/PageTransition/PageTransition"

export default function Careers() {
  return (
    <PageTransition>
      <Helmet>
        <title>Careers at Alpha Signature | Join Our Team</title>
        <meta
          name="description"
          content="Join the Alpha Signature team in Bandon and take your barbering career to the next level."
        />
      </Helmet>
        <section className="careers">
        <div className="careers-container">
            <div className="careers-content">
            <h1>Join Our Team</h1>
            <p className="intro">
                We’re always on the lookout for passionate and skilled barbers to join our growing family at <strong>Alpha Signature</strong>.
                If you take pride in your craft and love delivering great experiences — we’d love to hear from you!
            </p>

            <div className="careers-info">
                <div className="careers-card">
                <FaUserTie className="careers-icon" />
                <h3>Who We’re Looking For</h3>
                <p>
                    • Experienced or apprentice barbers <br />
                    • Passionate about style and precision <br />
                    • Team players who care about clients <br />
                </p>
                </div>

                <div className="careers-card">
                <FaEnvelopeOpenText className="careers-icon" />
                <h3>How to Apply</h3>
                <p>
                    Email us your CV and a short introduction about yourself to  

                    <a href="mailto:alpha_signature@hotmail.com"> alpha_signature@hotmail.com</a>
                    <br />
                    or use our <a href="/contact">contact form</a> to reach out.
                </p>
                <Link to="/contact">
                    <Button variant="primary" style={{ marginTop: "1rem" }}>
                    Contact Us
                    </Button>
                </Link>
                </div>
            </div>
            </div>
        </div>
        </section>
    </PageTransition>
  );
}
