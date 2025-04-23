import React from 'react';
import './ServicesSection.css';
import { Star, Brush, Code2, Smartphone, Globe, PenTool, ShoppingCart, MonitorCheck } from 'lucide-react';

const Services = () => {
  return (
    <main className="main">
      <section id="services" className="services section light-background">
        <div className="container">
          <h1 className="services-section-heading">Services</h1>
          <p>We provide high-standard clean websites for your business solutions.</p>

          <div className="row">
            {/* UI/UX Design - Basic */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <i className="fas fa-desktop"></i>
                <h2><Star className="star-icon" /> Basic - UI/UX Design</h2>
                <ul className="service-list">
                  <li><Brush size={18} /> Wireframing and Prototyping</li>
                  <li><PenTool size={18} /> Figma & Adobe XD Designs</li>
                  <li><MonitorCheck size={18} /> Responsive Design</li>
                  <li><Globe size={18} /> Website Redesign</li>
                </ul>
              </div>
            </div>

            {/* Web Development - Standard */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <i className="fas fa-code"></i>
                <h2 className='card-title'><Star className="star-icon" /> Standard - Web Development</h2>
                <ul className="service-list">
                  <li><Code2 size={18} /> React.js / Next.js Development</li>
                  <li><Globe size={18} /> SEO-Friendly Websites</li>
                  <li><ShoppingCart size={18} /> E-commerce Functionality</li>
                  <li><MonitorCheck size={18} /> Landing Pages</li>
                </ul>
              </div>
            </div>

            {/* Mobile Development - Premium */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card">
                <i className="fas fa-mobile-alt"></i>
                <h2><Star className="star-icon" /> Premium - Mobile Development</h2>
                <ul className="service-list">
                  <li><Smartphone size={18} /> Flutter / React Native Apps</li>
                  <li><MonitorCheck size={18} /> Play Store & App Store Launch</li>
                  <li><Globe size={18} /> API Integration</li>
                  <li><PenTool size={18} /> Modern UI Implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
