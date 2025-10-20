import "./FeaturedServices.css";
import { Button } from "../../ui/Button/Button";

export default function FeaturedServices() {
  const services = [
    {
      title: "Regular Haircut",
      price: "Starting at €15",
      description: "A great haircut is the best accessory a man can have.",
    },
    {
      title: "Royal Shave",
      price: "Starting at €20",
      description: "Our three-step signature shave for a smooth finish.",
    },
    {
      title: "Haircut + Beard Trim",
      price: "Starting at €30",
      description: "Beard or shave, we bring the difference that makes you real.",
    },
    {
      title: "Men’s Color",
      price: "Starting at €20",
      description: "Enhance your look with this permanent color service.",
    },
  ];

  return (
    <section className="featured-services">
      <h1>Featured Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-header">
              <h2>{service.title}</h2>
              <span className="price">{service.price}</span>
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="see-more">
        <Button variant="secondary">See More</Button>
      </div>
    </section>
  );
}
