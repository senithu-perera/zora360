import { Link } from "react-router-dom";
import "./servicestyle.css";

function CustomDesign() {
  return (
    <div className="custom-design-top-space">
      <div className="page-container service-detail-page">
      <div className="page-content">
        <div className="service-detail-header">
          <div className="service-detail-icon">🎨</div>
          <h1 className="page-title">Custom 3D Design</h1>
          <p className="page-description">
            Professional 3D modeling and design services tailored to your exact
            specifications
          </p>
        </div>

        <div className="service-detail-content">
          <section className="detail-section">
            <h2>What We Offer</h2>
            <p>
              Our expert designers work with you to create precise, innovative
              3D models for any application. We specialize in transforming your
              ideas into professional-grade 3D designs ready for printing or
              manufacturing.
            </p>
          </section>

          <section className="detail-section">
            <h2>Our Process</h2>
            <div className="process-steps">
              <div className="process-step">
                <h3>1. Consultation</h3>
                <p>
                  We discuss your requirements, specifications, and design goals
                  to understand your vision.
                </p>
              </div>
              <div className="process-step">
                <h3>2. Concept Development</h3>
                <p>
                  Our team creates initial concepts and sketches based on your
                  requirements.
                </p>
              </div>
              <div className="process-step">
                <h3>3. 3D Modeling</h3>
                <p>
                  We develop detailed 3D models using industry-standard software
                  and techniques.
                </p>
              </div>
              <div className="process-step">
                <h3>4. Review & Refinement</h3>
                <p>
                  You review the design and we make any necessary adjustments to
                  perfect the model.
                </p>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Applications</h2>
            <ul className="applications-list">
              <li>Product prototypes and development</li>
              <li>Architectural models and visualizations</li>
              <li>Custom parts and components</li>
              <li>Artistic and decorative objects</li>
              <li>Engineering and mechanical designs</li>
              <li>Educational and training models</li>
            </ul>
          </section>

          <section className="detail-section">
            <h2>Why Choose Our Design Service?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h4>Expert Team</h4>
                <p>
                  Our designers have years of experience in various industries
                  and applications.
                </p>
              </div>
              <div className="benefit-card">
                <h4>Latest Technology</h4>
                <p>
                  We use cutting-edge 3D modeling software and techniques for
                  superior results.
                </p>
              </div>
              <div className="benefit-card">
                <h4>Custom Solutions</h4>
                <p>
                  Every design is tailored to your specific needs and
                  requirements.
                </p>
              </div>
              <div className="benefit-card">
                <h4>Fast Turnaround</h4>
                <p>
                  Quick delivery without compromising on quality or attention to
                  detail.
                </p>
              </div>
            </div>
          </section>

          <div className="service-cta">
            <h3>Ready to Start Your Custom Design Project?</h3>
            <Link to="/contact" className="cta-button">
              Get Free Quote
            </Link>
            <Link to="/" className="back-button">
              ← Back to Services
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CustomDesign;
