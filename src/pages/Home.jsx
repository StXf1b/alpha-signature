import React from 'react'
import "./Home.css"
import Hero from "../assets/hero.png"
import {Button} from "../components/Button/Button"
export default function Home() {
  return (
    <section className="hero">
    <div className="hero-content">
        <h1>Alpha Signature Crafting Confidence</h1>
        <p>Alpha Signature presents the revolutionary transition between precision barbering and contemporary hairdressing.</p>
        <div className="hero-buttons">
        <Button variant='primary'>Book Appointment</Button>
        <Button style={{marginLeft: '1rem'}} variant='secondary'>View Services</Button>
        </div>
    </div>
    <div className="hero-image"><img src={Hero} alt="Hero" /></div>
    </section>
  )
}
