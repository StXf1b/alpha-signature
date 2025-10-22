import "./Team.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import PageTransition from "../../components/PageTransition/PageTransition"
// Import team photos
// import Barber1 from "../assets/team1.jpg";
// import Barber2 from "../assets/team2.jpg";
// import Barber3 from "../assets/team3.jpg";
// import Barber4 from "../assets/team4.jpg";

export default function Team() {
  const team = [
    {
      name: "John Murphy",
      role: "Master Barber",
      bio: "With over 15 years of experience, John specializes in precision fades and modern cuts that define Alpha Signature’s style.",
      image: "https://picsum.photos/1000/600",
      instagram: "#",
      facebook: "#",
    },
    {
      name: "Michael O’Sullivan",
      role: "Senior Stylist",
      bio: "Expert in beard styling and classic cuts. Michael brings creativity and flair to every client experience.",
      image: "https://picsum.photos/1000/600",
      instagram: "#",
      facebook: "#",
    },
    {
      name: "David Kelly",
      role: "Hair Artist",
      bio: "Known for his detailed craftsmanship and contemporary designs. David ensures every haircut is a statement.",
      image: "https://picsum.photos/1000/600",
      instagram: "#",
      facebook: "#",
    },
    {
      name: "Sean Byrne",
      role: "Junior Barber",
      bio: "A rising talent with a passion for modern men’s grooming and fresh, clean looks.",
      image: "https://picsum.photos/1000/600",
      instagram: "#",
      facebook: "#",
    },
  ];

  return (
    <PageTransition>
    <section className="team-section">
      <div className="team-header">
        <h1>Meet Our Team</h1>
        <p>Our barbers combine skill, passion, and precision to bring out the best version of you.</p>
      </div>

      <div className="team-grid">
        {team.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-info">
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p>{member.bio}</p>
              <div className="team-socials">
                <a href={member.facebook}><FaFacebookF /></a>
                <a href={member.instagram}><FaInstagram /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </PageTransition>
  );
}
