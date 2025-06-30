import React from "react";
import "./Certifications.css";

import aws_cert from "../../assets/aws.png";
import redhat_cert from "../../assets/redhat.png";
import salesforce_cert from "../../assets/salesforce.png";
import automation_cert from "../../assets/rpa1.png";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    provider: "Amazon Web Services",
    image: aws_cert,
    link: "https://www.credly.com/badges/197166fa-5f80-4505-92fb-645c19904be8/linked_in_profile",
  },
  {
    title: "Red Hat Certified Application Developer",
    provider: "Red Hat",
    image: redhat_cert,
    link: "https://www.credly.com/badges/df86d241-c784-433f-95a0-3332799ae6d7/public_url",
  },
  {
    title: "Salesforce AI Associate",
    provider: "Salesforce",
    image: salesforce_cert,
    link: "https://drive.google.com/file/d/10UGh2nowu7BJs0EIy4fRthoLKC4ga_Sf/view?usp=sharing",
  },
  {
    title: "Certified Essentials Automation Professional",
    provider: "Automation Anywhere",
    image: automation_cert,
    link: "https://certificates.automationanywhere.com/d065bf8c-04e6-49e3-b4c6-e123a3523a72#acc.83tnEFDv", // replace with actual if available
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications">
      <div className="cert-title">
        <h1>My Certifications</h1>
        {/* The theme_pattern image was here and has been removed */}
      </div>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img src={cert.image} alt={cert.title} className="cert-thumbnail" />
            </a>
            <h2>{cert.title}</h2>
            <p>{cert.provider}</p>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              View Certificate →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;