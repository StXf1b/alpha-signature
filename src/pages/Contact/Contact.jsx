import {Input} from "../../ui/Input/Input";
import {Button} from "../../ui/Button/Button";
import "./Contact.css";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

export default function Contact() {


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    await axios.post("/api/contact", data)
      .then((res) => {
        console.log("Success:", res.data);
        toast.success("Your message has been sent successfully.");
        e.target.reset();
      })
      .catch((err) => {
        console.error("Error:", err);
        toast.error(err.response?.data?.message || "An error occurred");
      });
  } 

  return (
    <section className="contact">
      <div className="contact-container">
        {/* Left Side - Form */}
        <div className="contact-form-section">
          <h2 className="contact-title">Get in Touch</h2>
          <p className="contact-description">
            Have questions, feedback, or want to book an appointment? Fill out the form below and
            we’ll get back to you as soon as possible.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <Input name="firstName" type="text" placeholder="First name..." required />
              <Input name="lastName" type="text" placeholder="Last name..." required />
            </div>

            <Input style={{ marginTop: "1rem" }} name="email" type="email" placeholder="Email..." required />
            <Input style={{ marginTop: "1rem" }} name="phone" type="tel" placeholder="Phone..." />

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <Button type="submit" className="submit-button">
              Send Message
            </Button>
          </form>
        </div>

        {/* Right Side - Google Maps */}
        <div className="contact-map-section">
          <iframe
            title="Alpha Signature Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2743.7520040059853!2d-8.739723023271461!3d51.74507219331281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4844f5ee456acf55%3A0xdc3316744acbd34b!2sAlpha%20Signature!5e1!3m2!1sen!2sie!4v1761002265452!5m2!1sen!2sie"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <ToastContainer 
        pauseOnHover
        theme="dark" 
        />
    </section>
  );
}
