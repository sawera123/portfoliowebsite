import React, { useState, useEffect } from "react";
import "./Hero.css";
import heroimg from "../assets/img/hero-section.png";
import About from "./About"
import Portfolio from "./Portfolio";
import ResumeSection from "./ResumeSection"
import ServicesSection from "./ServicesSection";
import ContactForm from "./ContactForm"


function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const titles = ["Planning Engineer", "Project Planner", "Project Control and Monitoring"];

  useEffect(() => {
    let typing;
    if (!deleting && text.length < titles[index].length) {
      typing = setTimeout(() => {
        setText(titles[index].substring(0, text.length + 1));
      }, 120);
    } else if (!deleting && text.length === titles[index].length) {
      typing = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && text.length > 0) {
      typing = setTimeout(() => {
        setText(titles[index].substring(0, text.length - 1));
      }, 50);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    }
    return () => clearTimeout(typing);
  }, [text, deleting, index]);

  return (
    <div> 
    <section className="hero-section d-flex align-items-center mt-8" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h5 className="subtitle mb-3">Hi! This is Karthikeyan PMP® FSBI®</h5>
            <h1 className="fw-bold mb-3">
              I'm <span className="typing-text">{text}</span>
            </h1>
            <p className=" mb-4 description-text">
             Planning Engineer with 4+ years of experience in offshore oil and gas projects, 
             expert in creating detailed schedules using Primavera P6. Skilled at presenting complex data 
             through clear visuals and easy-to-understand formats. Proficient in transforming data into clear 4D/5D 
             simulations with Syncro 4D and Twinmotion, optimizing project timelines and delivering actionable insights.

            </p>

            <div className="d-flex flex-wrap gap-3">
              <a href="/Karthikeyan_Resume.pdf" download className="btn hero-section-custom-btn primary-btn">
                <i className="bi bi-download me-2"></i> Download Resume
              </a>
              <a href="#contact" className="btn hero-section-custom-btn secondary-btn">
                <i className="bi bi-envelope-fill me-2"></i> Contact Me
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 text-center">
            <img src={heroimg} alt="hero" className="img-fluid floating-img" />
          </div>
        </div>
      </div>
    </section>
    <About />
    <Portfolio/>
    <ResumeSection/>
    <ServicesSection/>
    <ContactForm />
    </div>
  );
}

export default Hero;
