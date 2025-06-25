import { Link } from "react-router-dom";
import "./servicestyle.css";

function RapidPrototyping() {
  return (
    <div className="page-container service-detail-page">
      <div className="page-content">
        <div className="service-detail-header">
          <div className="service-detail-icon">⚡</div>
          <h1 className="page-title">Rapid Prototyping</h1>
          <p className="page-description">
            Fast and efficient prototyping services to test your concepts
            quickly before full production
          </p>
        </div>

        <div className="service-detail-content">
          <section className="detail-section">
            <h2>What is Rapid Prototyping?</h2>
            <p>
              Get your prototypes in days, not weeks. Perfect for product
              development and design validation. Our rapid prototyping service
              allows you to quickly iterate on designs, test functionality, and
              validate concepts before committing to full-scale production.
            </p>
          </section>

          <section className="detail-section">
            <h2>Technologies We Use</h2>
            <div className="tech-grid">
              <div className="tech-card">
                <h4>FDM Printing</h4>
                <p>
                  Cost-effective solution for functional prototypes and concept
                  models.
                </p>
              </div>
              <div className="tech-card">
                <h4>SLA Printing</h4>
                <p>
                  High-resolution printing for detailed prototypes and precision
                  parts.
                </p>
              </div>
              <div className="tech-card">
                <h4>SLS Printing</h4>
                <p>Strong, functional prototypes without support structures.</p>
              </div>
              <div className="tech-card">
                <h4>Multi-Jet Fusion</h4>
                <p>
                  Professional-grade prototypes with excellent surface finish.
                </p>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Turnaround Times</h2>
            <div className="timeline">
              <div className="timeline-item">
                <h4>24-48 Hours</h4>
                <p>Simple prototypes and concept models</p>
              </div>
              <div className="timeline-item">
                <h4>3-5 Days</h4>
                <p>Complex geometries and multi-part assemblies</p>
              </div>
              <div className="timeline-item">
                <h4>1 Week</h4>
                <p>Large-scale prototypes and specialized materials</p>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Benefits</h2>
            <ul className="benefits-list">
              <li>Accelerated product development cycles</li>
              <li>Cost-effective design validation</li>
              <li>Early detection of design flaws</li>
              <li>Improved stakeholder communication</li>
              <li>Reduced time to market</li>
              <li>Multiple iterations at low cost</li>
            </ul>
          </section>

          <div className="service-cta">
            <h3>Need a Prototype Fast?</h3>
            <Link to="/contact" className="cta-button">
              Start Your Project
            </Link>
            <Link to="/" className="back-button">
              ← Back to Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RapidPrototyping;
