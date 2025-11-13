import React from "react";
import "./MapSection.css"; // CSS separate rakhenge

const MapSection = () => {
  return (
    <section className="map-section">
      <h2 className="section-title">Our Offices</h2>
      <div className="map-wrapper">
        <div className="map-container">
          <iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7619597516047!2d72.87145147520347!3d19.081481982124184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c85422e9cf77%3A0xb7b6c1ad4572d87!2sMarol%20MIDC%20Industry%20Estate%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1697280000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
