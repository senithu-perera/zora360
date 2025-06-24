import React from "react";
import "./About.css";
import "./responsive-design.css";
import zoraLogo    from "./assets/logo.png";
import aboutBgImage from "./assets/about-bg.jpeg";

function About() {
  return (
    <div className="about">
      <div className="page-container about-page">
      {/* Blurred, slow-zoom background */}
      <div className="about-background-image">
        <img
          src={aboutBgImage}
          alt="About Background"
          className="about-bg-img"
        />
      </div>

      {/* Foreground content */}
      <div className="page-content">
        <img src={zoraLogo} alt="Zora360 Logo" className="about-logo" />

        <p className="page-description">
          Learn more about our 3D printing services and expertise.
        </p>

        <div className="about-box">
          <div className="about-content">
            <div className="about-section">
              <h2>Our Mission</h2>
              <p>
                We provide comprehensive 3D printing solutions for all your needs.
                From custom prototyping to large-volume production, our expert team
                ensures top-quality results that bring your ideas to life.
              </p>
            </div>
            <div className="about-section">
              <h2>Our Vision</h2>
              <p>
                To revolutionize manufacturing with accessible, sustainable, and
                innovative 3D printing services. We strive to empower creators
                and businesses worldwide by pushing the boundaries of what’s possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
