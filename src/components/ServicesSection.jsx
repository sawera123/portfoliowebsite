import React from 'react';
import './ServicesSection.css'; // Import your custom CSS file for transitions/animations

const Services = () => {
  return (
    <main className="main">
      <section id="services" className="services section light-background">
        <div className="container">
          <h1 className="section-heading">
            Services
          </h1>
          <p>We provide high-standard clean websites for your business solutions.</p>

          {/* Bootstrap Grid for Cards */}
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <i className="fas fa-desktop"></i>
                <h2>UI/UX Design</h2>
                <p>
                  From wireframes to interactive prototypes, I design intuitive and visually compelling experiences that align with business goals.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <i className="fas fa-code"></i>
                <h2>Web Development</h2>
                <p>
                  I create responsive and high-performance websites with intuitive UI/UX, ensuring seamless user interactions and optimal functionality.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <i className="fas fa-mobile-alt"></i>
                <h2>Mobile Development</h2>
                <p>
                  I design sleek and user-friendly mobile interfaces, focusing on smooth navigation and engaging user experiences across all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
