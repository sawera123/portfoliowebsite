import React from "react";
import "./Certificates.css";

const certificates = [
  {
    title: "Power BI Certificate",
    tag: "Data Visualization",
    desc: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    year: "2023",
    url: "https://learn.microsoft.com/en-us/certifications/power-bi-data-analyst-associate/"
  },
  {
    title: "Excel Certificate",
    tag: "Spreadsheet",
    desc: "Excel Expert Certification",
    issuer: "Microsoft",
    year: "2022",
    url: "https://learn.microsoft.com/en-us/certifications/excel-2016-expert/"
  },
  {
    title: "SQL Certificate",
    tag: "Database",
    desc: "SQL Database Administration",
    issuer: "Oracle",
    year: "2021",
    url: "https://education.oracle.com/oracle-database-sql/"
  },
  {
    title: "Data Analysis Certificate",
    tag: "Data Analysis",
    desc: "Data Analysis Fundamentals",
    issuer: "DataCamp",
    year: "2021",
    url: "https://www.datacamp.com"
  },
];

const tools = [
  { name: "Microsoft Excel", level: "Expert", color: "#00B386" },
  { name: "Power BI", level: "Advanced", color: "#805AD5" },
  { name: "SQL", level: "Intermediate", color: "#A259FF" },
  { name: "Python", level: "Intermediate", color: "#FBBF24" },
  { name: "VBA", level: "Advanced", color: "#22C55E" },
  { name: "Tableau", level: "Beginner", color: "#3B82F6" },
];

const Certificates = () => {
  return (
    <div>
    <main className="main"> 
    <div className="custom-section-container">
      <h2 className="certificate-section-title">Certificates & Tools</h2>

      <h3 className="sub-title">Certificates</h3>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <a
            key={index}
            className="certificate-card"
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cert-tag">{cert.tag}</div>
            <div className="cert-title">{cert.title}</div>
            <div className="cert-details">
              <p>{cert.desc}</p>
              <span>
                {cert.issuer} • {cert.year}
              </span>
            </div>
          </a>
        ))}
      </div>

      <h3 className="sub-title">Tools & Technologies</h3>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div className="tool-card" key={index}>
            <span className="tool-name">{tool.name}</span>
            <span className="tool-level" style={{ backgroundColor: tool.color }}>
              {tool.level}
            </span>
          </div>
        ))}
      </div>
    </div>

    </main>
    </div>
  );
};

export default Certificates;