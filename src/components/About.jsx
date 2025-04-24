import React from "react";
import "./About.css"
import portfolioimg from "../assets/img/portfolio/portfolio-1.webp"
import Certificates from './Certificates'
function About() {
 
  return (
    <div>
        <main className="main"> 
        <section id="about" className="about section light-background">

          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <div className="title-shape">
              <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10" fill="none" stroke="currentColor" stroke-width="2"></path>
              </svg>
            </div>
            <p>hello i'm project manger </p>
          </div>
       {/* <!-- End Section Title --> */}

        <div className="container" data-aos="fade-up" data-aos-delay="100">

          <div className="row align-items-center">
            <div className="col-lg-6 position-relative" data-aos="fade-right" data-aos-delay="200">
              <div className="about-image">
                <img src={portfolioimg } alt="Profile Image" className="img-fluid rounded-4"/>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
              <div className="about-content">
                <span className="subtitle">About Karthikeyan</span>

                <h2>Project Engineer &amp; Web Developer</h2>

                <p className="lead mb-4"> I'm a passionate Project Engineer having 4+ years of experience in oil and gas as Project/Planning Engineer (Offshore).
        Diligent worker with good communication and task prioritization skills, eager to contribute to team success through
        smart work..</p>

                <div className="personal-info">
                  <div className="row g-4">
                    <div className="col-6">
                      <div className="info-item">
                        <span className="label">Name</span>
                        <span className="value">Karthikeyan P</span>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="info-item">
                        <span className="label">Phone</span>
                        <span className="value">+123 456 7890</span>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="info-item">
                        <span className="label">Age</span>
                        <span className="value">26 Years</span>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="info-item">
                        <span className="label">Email</span>
                        <span className="value">email@example.com</span>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="info-item">
                        <span className="label">Occupation</span>
                        <span className="value">Project Engineer</span>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="info-item">
                        <span className="label">Nationality</span>
                        <span className="value">India</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="social">
                                <a href="#"><i class="fas fa-globe"></i></a>
                                <a href="https://www.facebook.com/codersgyan"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/CoderGyan"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-pinterest"></i></a>
                            </div>
              </div>
            </div>
          </div>

        </div>

        </section>
                </main>
                <Certificates/>
            </div>
  );
}

export default About;
