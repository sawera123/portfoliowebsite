import React, { useState } from "react";
import "./ResumeSection.css";

const ResumeSection = () => {
  const [open, setOpen] = useState({ experience: false, education: false, skills: false });

  const toggleSection = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <main className="main">
    <section className="resume-section py-5" id="resume">
      <div className="container">
        <h2 className="resume-heading text-center mb-5">My Resume</h2>
        <div className="row g-4 justify-content-center">

          {/* Experience */}
          <div className="col-md-6">
            <div className={`resume-box ${open.experience ? "open" : ""}`}>
              <div className="box-header" onClick={() => toggleSection("experience")}>
                <h4>Experience</h4>
                <span className="toggle-icon">{open.experience ? "−" : "+"}</span>
              </div>
              <div className={`dropdown-content ${open.experience ? "show" : ""}`}>
                <div className="item">
                  <h5>Senior Data Analyst <span>- XYZ Co</span> <small>(2020–Present)</small></h5>
                  <ul>
                    <li>Developed Power BI dashboards</li>
                    <li>Automated Excel reports using VBA</li>
                    <li>Collaborated cross-functionally</li>
                  </ul>
                </div>
                <div className="item">
                  <h5>BI Analyst <span>- ABC Inc</span> <small>(2017–2020)</small></h5>
                  <ul>
                    <li>Created reporting tools</li>
                    <li>SQL + Power BI driven insights</li>
                    <li>Enhanced operational analytics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="col-md-6">
            <div className={`resume-box ${open.education ? "open" : ""}`}>
              <div className="box-header" onClick={() => toggleSection("education")}>
                <h4>Education</h4>
                <span className="toggle-icon">{open.education ? "−" : "+"}</span>
              </div>
              <div className={`dropdown-content ${open.education ? "show" : ""}`}>
                <p><strong>Master’s in Data Analytics</strong> - Uni Name (2013–2015)</p>
                <p><strong>Bachelor’s in BBA</strong> - Uni Name (2009–2013)</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="col-md-10">
            <div className={`resume-box ${open.skills ? "open" : ""}`}>
              <div className="box-header" onClick={() => toggleSection("skills")}>
                <h4>Skills</h4>
                <span className="toggle-icon">{open.skills ? "−" : "+"}</span>
              </div>
              <div className={`dropdown-content ${open.skills ? "show" : ""}`}>
                <div className="row">
                  <div className="col-md-6">
                    <h6>Technical Skills</h6>
                    <ul>
                      <li>Excel (Advanced)</li>
                      <li>Power BI</li>
                      <li>SQL</li>
                      <li>Excel VBA</li>
                      <li>Data Analysis</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h6>Soft Skills</h6>
                    <ul>
                      <li>Problem Solving</li>
                      <li>Communication</li>
                      <li>Project Management</li>
                      <li>Collaboration</li>
                      <li>Attention to Detail</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    </main>
  );
};

export default ResumeSection;
