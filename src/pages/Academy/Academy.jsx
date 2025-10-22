import "./Academy.css";
import { motion } from "framer-motion";
import { FaGraduationCap, FaChalkboardTeacher, FaUsers } from "react-icons/fa";
import { Button } from "../../ui/Button/Button";
import academyBg from "../../assets/academy.png"
import { Link } from "react-router-dom";
import PageTransition from "../../components/PageTransition/PageTransition"

export default function Academy() {
  return (
    <>
    <PageTransition>
        <section className="academy-page">

        {/* 🎓 Hero Section */}
        <div
            className="academy-hero"
            style={{ backgroundImage: `url(${academyBg})` }}
        >
            <div className="hero-overlay" />
            <motion.div
            className="hero-content2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            >
            <h1>Alpha Signature Academy</h1>
            <p>
                Unlock your potential and master the craft of modern barbering with our hands-on, professional training courses.
            </p>
            <Button variant="primary" as="a" href="/contact">
                Contact us
            </Button>
            </motion.div>
        </div>

        {/* 📚 Academy Main Content */}
        <div className="academy">
            <div className="academy-container">
            <div className="academy-header">
                <h2>Learn. Create. Inspire.</h2>
                <p>
                Our Introductory course does not require any previous experience or qualifications — we welcome anyone with a passion for barbering.
                The Alpha Signature Academy is designed to unlock students' potential through structured learning and mentorship.
                </p>
            </div>

            <div className="academy-highlights">
                <div className="highlight-card">
                <FaGraduationCap className="highlight-icon" />
                <h3>Comprehensive Learning</h3>
                <p>Live demonstrations, theory classes, and hands-on sessions to master modern techniques.</p>
                </div>
                <div className="highlight-card">
                <FaChalkboardTeacher className="highlight-icon" />
                <h3>Expert Mentorship</h3>
                <p>Learn directly from experienced professionals passionate about the art of barbering.</p>
                </div>
                <div className="highlight-card">
                <FaUsers className="highlight-icon" />
                <h3>Small Class Sizes</h3>
                <p>Our low teacher-to-student ratio ensures personal guidance and faster skill development.</p>
                </div>
            </div>

            <div className="academy-details">
                <p>
                Our courses cover modern techniques used in the fast-growing men’s hairdressing market.
                With live demonstrations, practical sessions, and theory exams, Alpha Signature provides the in-depth
                knowledge to motivate and inspire barbers of all levels.
                </p>
            </div>

            <h2 className="table-title">What You Will Learn</h2>

            <div className="academy-table">
                <div className="academy-category">
                <h3>Salon Practices</h3>
                <ul>
                    <li>Consultation & Customer Service</li>
                    <li>Building & Maintaining Clients</li>
                    <li>Salon Health and Safety</li>
                    <li>Understanding Men’s Hair Products</li>
                    <li>Product Styling & Sales Techniques</li>
                    <li>End Of Service Procedures</li>
                </ul>
                </div>

                <div className="academy-category">
                <h3>Scissor & Comb Control</h3>
                <ul>
                    <li>In-Depth Understanding Of Long Hair</li>
                    <li>Layering, Graduation, and Lines</li>
                    <li>Lectures, Demonstrations, and Practice</li>
                </ul>
                </div>

                <div className="academy-category">
                <h3>Fading & Clipper Control</h3>
                <ul>
                    <li>Clipper Mastery and Fading Techniques</li>
                    <li>Line Outs, Beard Trimming, and Designs</li>
                    <li>Guard Skipping & Descending Graduation</li>
                </ul>
                </div>
            </div>

            <div className="academy-cta">
                <h3>Ready to Begin Your Barbering Journey?</h3>
                <p>Get in touch to learn more about our upcoming courses and enrollment details.</p>
                <Link to="/contact">
                <Button variant="primary">Contact Us</Button>
                </Link>
            </div>
            </div>
        </div>
        </section>
        </PageTransition>
    </>
  );
}
