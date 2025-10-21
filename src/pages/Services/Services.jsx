import React from "react";
import "./Services.css";
import PageTransition from "../../components/PageTransition/PageTransition"

const services = [
  { name: "Gents Cut", desc: "Simple gents cut (30-40min)", price: "€17" },
  { name: "Wash and Cut", desc: "Wash and cut (30-40min)", price: "€17" },
  { name: "Cut & Beard Trim", desc: "Cut & beard trim (30-40min)", price: "€25" },
  { name: "Beard Trim", desc: "Beard trim (30-40min)", price: "€10" },
  { name: "Bleach-Up (toner & scalp protector)", desc: "Bleach-up (30-40min)", price: "€60" },
  { name: "Curly Perms", desc: "Curly perms (30-40min)", price: "€45" },
  { name: "Nose & Ear Waxing", desc: "Nose & ear waxing (30-40min)", price: "€3" },
  { name: "Head Shave", desc: "Clean & simple head shave (30-40min)", price: "€13" },
  { name: "Skin Fades", desc: "Skin fades (30-40min)", price: "€17" },
  { name: "Highlights", desc: "Highlights (30-40min)", price: "€60" },
];

export default function Services() {
  return (
    <PageTransition>
    <section className="services-page">
      <div className="services-header">
        <h1>Price List</h1>
        <div className="divider"></div>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-name">
              <h3>{service.name}</h3>
              <p>{service.desc}</p>
            </div>
            <div className="service-price">{service.price}</div>
          </div>
        ))}
      </div>
    </section>
  </PageTransition>
  );
}
