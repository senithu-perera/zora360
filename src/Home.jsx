import { useState } from "react";
import "./Home.css"; // Import your CSS file for styling\

import heroImage from "./assets/home.png";
import zoraLogo from "./assets/logo.png";

function Home() {
  const services = [
    {
      title: 'Custom 3D Design',
      description: 'We create custom 3D models tailored to your specific requirements and bring your ideas to life.',
      icon: '🎨',
      details: 'Expert designers work with you to create precise, innovative 3D models for any application.'
    },
    {
      title: 'Rapid Prototyping',
      description: 'Fast and efficient prototyping services to test your concepts quickly before full production.',
      icon: '⚡',
      details: 'Get your prototypes in days, not weeks. Perfect for product development and design validation.'
    },
    {
      title: 'Production Printing',
      description: 'High-volume 3D printing for manufacturing needs with industrial-grade quality and consistency.',
      icon: '🏭',
      details: 'Scale your production with our advanced printing capabilities and quality assurance processes.'
    },
    {
      title: 'Consultation Services',
      description: 'Expert advice on 3D printing technologies, materials selection, and project optimization.',
      icon: '💡',
      details: 'Get professional guidance to choose the best approach and materials for your specific project needs.'
    }
  ];

  return (
    <div className="home">
      {/* Full Screen Hero Section */}
      <section className="hero-fullscreen">
        <div className="hero-image-container">
          <img src={heroImage} alt="Tech Landscape" className="hero-image" />
        </div>
        <img src={zoraLogo} alt="Zora360 Logo" className="hero-logo" />
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Zora360</h1>
          <p className="hero-description">
            ALL 3D Printing needs in one place
          </p>
          <button className="cta-button">Get Free Consultation</button>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
          <p>Scroll to explore our services</p>
        </div>
      </section>

      {/* Services Section - Appears after scroll */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="services-heading">Our Services</h2>
          <div className="services-static">
            {services.map((service, index) => (
              <div key={index} className="service-card-static">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-overlay">
                  <p className="service-details">{service.details}</p>
                  <button className="service-button">More Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;