import React from "react";
import "./OurValues.css";
import { FaStar, FaUsers } from "react-icons/fa";
import { GiRazor, GiHairStrands } from "react-icons/gi";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function OurValues() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section className="our-values">
      <div className="value-box" ref={ref}>
        <div className="icon-box">
          <FaStar />
        </div>
        <div className="value-text">
          <h1>{inView ? <CountUp start={0} end={5} duration={2.75} separator="," /> : 0}</h1>
          <p>Star Reviews</p>
        </div>
      </div>

      <div className="value-box">
        <div className="icon-box">
          <GiRazor />
        </div>
        <div className="value-text">
          <h1>{inView ? <CountUp start={0} end={500} duration={2.75} separator="," /> : 0}</h1>
          <p>Precision Cuts</p>
        </div>
      </div>

      <div className="value-box">
        <div className="icon-box">
          <GiHairStrands />
        </div>
        <div className="value-text">
          <h1>{inView ? <CountUp start={0} end={300} duration={2.75} separator="," /> : 0}</h1>
          <p>Styled Clients</p>
        </div>
      </div>

      <div className="value-box">
        <div className="icon-box">
          <FaUsers />
        </div>
        <div className="value-text">
          <h1>{inView ? <CountUp start={0} end={1000} duration={2.75} separator="," /> : 0}</h1>
          <p>Happy Customers</p>
        </div>
      </div>
    </section>
  );
}
