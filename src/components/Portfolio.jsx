import React, { useEffect, useRef } from "react";
import "./Portfolio.css";
import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.css";

import portfolioimg1 from "../assets/img/portfolio/portfolio-1.webp";
import portfolioimg2 from "../assets/img/portfolio/portfolio-2.webp";
import portfolioimg5 from "../assets/img/portfolio/portfolio-5.webp";
import portfolioimg4 from "../assets/img/portfolio/portfolio-4.webp";
import portfolioimg7 from "../assets/img/portfolio/portfolio-7.webp";
import portfolioimg10 from "../assets/img/portfolio/portfolio-10.webp";
import portfolioimg11 from "../assets/img/portfolio/portfolio-11.webp"; // New image for 4D/5D Scheduling

function Portfolio() {
  const isotopeContainer = useRef(null);
  const iso = useRef(null);

  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox"
    });

    imagesLoaded(isotopeContainer.current, () => {
      iso.current = new Isotope(isotopeContainer.current, {
        itemSelector: ".isotope-item",
        layoutMode: "masonry",
        sortBy: "original-order"
      });
    });

    return () => {
      if (iso.current) iso.current.destroy();
      lightbox.destroy();
    };
  }, []);

  const handleFilterClick = (e, filter) => {
    e.preventDefault();
    const active = document.querySelector(".filter-active");
    if (active) active.classList.remove("filter-active");
    e.target.classList.add("filter-active");
    iso.current.arrange({ filter });
  };

  return (
    <div>
      <main className="main">
        <section id="portfolio" className="portfolio section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Portfolio</h2>
            <p>Some project highlights including images, YouTube and video uploads</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="portfolio-filters-container" data-aos="fade-up" data-aos-delay="200">
              <ul className="portfolio-filters isotope-filters">
                <li data-filter="*" className="filter-active" onClick={(e) => handleFilterClick(e, "*")}>All Work</li>                
                <li data-filter=".filter-ExcelVBA" onClick={(e) => handleFilterClick(e, ".filter-ExcelVBA")}>Excel VBA Automation</li>
                <li data-filter=".filter-PowerBI" onClick={(e) => handleFilterClick(e, ".filter-PowerBI")}>Power BI Dashboards</li>
                <li data-filter=".filter-PowerApps" onClick={(e) => handleFilterClick(e, ".filter-PowerApps")}>Power Apps</li>
                <li data-filter=".filter-PowerAutomation" onClick={(e) => handleFilterClick(e, ".filter-PowerAutomation")}>Power Automation</li>
                <li data-filter=".filter-4D5D" onClick={(e) => handleFilterClick(e, ".filter-4D5D")}>4D/5D Scheduling</li> {/* New Tab */}
              </ul>
            </div>

            <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300" ref={isotopeContainer}>

              {/* Power Automation Item */}
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-PowerAutomation">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={portfolioimg2} className="img-fluid" alt="" loading="lazy" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a
                          href="https://www.youtube.com/watch?v=QaXZJO1WlRA"
                          className="glightbox preview-link"
                          data-gallery="portfolio-gallery-web"
                          data-type="video"
                        >
                          <i className="bi bi-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Video Demo</span>
                    <h3>Power Automate</h3>
                  </div>
                </div>
              </div>

              {/* Power Apps */}
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-PowerApps">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={portfolioimg7} className="img-fluid" alt="" loading="lazy" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a
                          href="https://www.youtube.com/watch?v=QaXZJO1WlRA"
                          className="glightbox preview-link"
                          data-gallery="portfolio-gallery-web"
                          data-type="video"
                        >
                          <i className="bi bi-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Power Apps</span>
                    <h3>Creative Report Layout</h3>
                  </div>
                </div>
              </div>

              {/* Power BI Dashboards */}
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-PowerBI">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={portfolioimg10} className="img-fluid" alt="" loading="lazy" />
                     <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a
                          href="https://www.youtube.com/watch?v=QaXZJO1WlRA" // Replace with actual video or image URL
                          className="glightbox preview-link"
                          data-gallery="portfolio-gallery-excelvba"
                          data-type="video"
                        >
                          <i className="bi bi-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>           <div className="portfolio-content">
                    <span className="category">Power BI Dashboards</span>
                    <h3>Creative Report Layout</h3>
                  </div>
                </div>
              </div>

              {/* Excel VBA Automation */}
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-ExcelVBA">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={portfolioimg5} className="img-fluid" alt="Excel VBA Automation" loading="lazy" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a
                          href="https://www.youtube.com/watch?v=QaXZJO1WlRA" // Replace with actual video or image URL
                          className="glightbox preview-link"
                          data-gallery="portfolio-gallery-excelvba"
                          data-type="video"
                        >
                          <i className="bi bi-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <span className="category">Excel VBA Automation</span>
                    <h3>Automated Reporting & Macros</h3>
                  </div>
                </div>
              </div>

              {/* 4D/5D Scheduling (New Tab Content) */}
              <div className="col-lg-6 col-md-6 portfolio-item isotope-item filter-4D5D">
                <div className="portfolio-card">
                  <div className="portfolio-image">
                    <img src={portfolioimg11} className="img-fluid" alt="4D/5D Scheduling" loading="lazy" />
                    <div className="portfolio-overlay">
                      <div className="portfolio-actions">
                        <a
                          href="https://www.youtube.com/watch?v=QaXZJO1WlRA" // Replace with actual video or image URL
                          className="glightbox preview-link"
                          data-gallery="portfolio-gallery-excelvba"
                          data-type="video"
                        >
                          <i className="bi bi-eye"></i>
                        </a>
                      </div>
                    </div>
                  </div>            <div className="portfolio-content">
                    <span className="category">4D/5D Scheduling</span>
                    <h3>Integrated Time & Cost Visualization</h3>
                  </div>
                </div>
              </div>

            </div>
            {/* End isotope-container */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Portfolio;
