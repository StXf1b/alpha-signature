import React from "react";
import "./FeaturedServices.css";
import { FaScissors, FaChair } from "react-icons/fa6";
import { GiRazor, GiHairStrands } from "react-icons/gi";
import { Button } from "../components/Button/Button";

export default function FeaturedServices() {
  return (
    <section className="featured-services">
      <div className="featured-header">
        <h1>Featured Services</h1>
        <p>
          Experience the perfect blend of traditional craftsmanship and
          contemporary style with our premium grooming services.
        </p>
      </div>

      <div className="services-container">
        <div className="service-box">
          <span className="icon">
            <FaScissors />
          </span>
          <h2>Precision Haircuts</h2>
          <p className="price">From €25</p>
          <p className="desc">
            Tailored cuts designed to complement your personal style and facial
            structure.
          </p>
        </div>

        <div className="service-box">
          <span className="icon">
            <GiRazor />
          </span>
          <h2>Hot Towel Shaves</h2>
          <p className="price">From €20</p>
          <p className="desc">
            Relax and unwind with a luxurious shave using traditional straight
            razors and hot towels.
          </p>
        </div>

        <div className="service-box">
          <span className="icon">
            <GiHairStrands />
          </span>
          <h2>Hair Styling</h2>
          <p className="price">From €30</p>
          <p className="desc">
            From classic looks to modern trends — we’ll make sure your hair
            stands out.
          </p>
        </div>

        <div className="service-box">
          <span className="icon">
            <FaChair />
          </span>
          <h2>Beard Grooming</h2>
          <p className="price">From €15</p>
          <p className="desc">
            Professional trimming and shaping for a sharp, clean, and confident
            appearance.
          </p>
        </div>
      </div>

      <div className="services-button">
        <Button variant="primary">See More</Button>
      </div>
    </section>
  );
}
