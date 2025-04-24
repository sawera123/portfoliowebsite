import React, { useState } from "react";
import { ChevronDown, ChevronRight, CheckCircle } from "lucide-react";
import "./ResumeSection.css";

const ProjectItem = ({ title, client, details }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="project-item">
      <div className="project-header" onClick={() => setOpen(!open)}>
        <h5>
          {title} <span>- {client}</span>
        </h5>
        {open ? (
          <ChevronDown size={18} className="icon" />
        ) : (
          <ChevronRight size={18} className="icon" />
        )}
      </div>

      <div className={`project-details ${open ? "open" : ""}`}>
        {open && (
          <ul>
            {details.map((item, i) => (
              <li key={i}>
                <CheckCircle size={14} className="list-icon" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const ResumeSection = () => {
  return (
    <section className="resume-section py-5" id="resume">
      <div className="container">
        <h2 className="resume-heading text-center mb-4">Experience</h2>

        <div className="resume-box mb-4">
          <h4 className="section-title">Current Role</h4>
          <p className="company">
            Adarsh Solution Pvt Ltd, Bangalore (Aug 2024 - Present)
          </p>
          <ul>
           
            <li>
              <CheckCircle size={14} className="list-icon" />
              Plan, schedule, manage and monitor work packages and reports.
            </li>
            <li>
              <CheckCircle size={14} className="list-icon" />
              Verify & update project milestones, KPIs, S-curves & procurement plans.
            </li>
            <li>
              <CheckCircle size={14} className="list-icon" />
              Weekly updates and client status meetings.
            </li>
          </ul>
        </div>

      {/* project section */}
        <div className="resume-box mb-4">
          <h4 className="section-title">Projects</h4>

          <ProjectItem
            title="BH F&P Offshore Support"
            client="Bakers Hughes, USA"
            details={[
              "Tools: Primavera P6, MS Office",
              "Role: Project Scheduling & Monitoring",
            ]}
          />
          <ProjectItem
            title="Database Migration"
            client="Bakers Hughes, USA"
            details={[
              "Tools: Primavera P6, MS Office",
              "Task: Data migration from Oracle to SAP",
            ]}
          />
          <ProjectItem
            title="Spare Part List Creation"
            client="Bakers Hughes, USA"
            details={[
              "Tools: MS Project Plan 3, MS Office",
              "Task: Spare part list generation & documentation",
            ]}
          />
        </div>
        {/* skills section */}
        <div className="resume-box mb-4">
          <h4 className="section-title">Skills</h4>
          <div className="row">
            <div className="col-md-6">
              <h6>Functional & Technical</h6>
              <ul>
                <li>
                  <CheckCircle size={14} className="list-icon" />
                  Primavera P6, MS Project, SAP ECTR, Excel VBA
                </li>
                <li>
                  <CheckCircle size={14} className="list-icon" />
                  Project Scheduling & Documentation
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <h6>Management & Soft Skills</h6>
              <ul>
                <li>
                  <CheckCircle size={14} className="list-icon" />
                  Problem Solving, Training, Team Leadership
                </li>
                <li>
                  <CheckCircle size={14} className="list-icon" />
                  Process Optimization, Planning for OTD
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;
