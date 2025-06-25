import { Link } from "react-router-dom";
import "./servicestyle.css";

function ProductionPrinting() {
  return (
    <div className="page-container service-detail-page">
      <div className="page-content">
        <div className="service-detail-header">
          <div className="service-detail-icon">🏭</div>
          <h1 className="page-title">Production Printing</h1>
          <p className="page-description">
            High-volume 3D printing for manufacturing needs with
            industrial-grade quality and consistency
          </p>
        </div>

        <div className="service-detail-content">
          <section className="detail-section">
            <h2>Industrial-Scale Manufacturing</h2>
            <p>
              Scale your production with our advanced printing capabilities and
              quality assurance processes. We offer high-volume 3D printing
              services for end-use parts, production runs, and manufacturing
              applications.
            </p>
          </section>

          <section className="detail-section">
            <h2>Production Capabilities</h2>
            <div className="capabilities-grid">
              <div className="capability-card">
                <h4>Volume Range</h4>
                <p>From 100 to 10,000+ parts per order</p>
              </div>
              <div className="capability-card">
                <h4>Material Options</h4>
                <p>Engineering-grade plastics, metals, and composites</p>
              </div>
              <div className="capability-card">
                <h4>Quality Control</h4>
                <p>ISO certified processes and inspection protocols</p>
              </div>
              <div className="capability-card">
                <h4>Consistency</h4>
                <p>Repeatable results across large production runs</p>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Industries We Serve</h2>
            <div className="industries-list">
              <div className="industry-item">
                <h4>Automotive</h4>
                <p>Custom parts, fixtures, and end-use components</p>
              </div>
              <div className="industry-item">
                <h4>Aerospace</h4>
                <p>Lightweight components and complex geometries</p>
              </div>
              <div className="industry-item">
                <h4>Medical</h4>
                <p>Biocompatible devices and surgical instruments</p>
              </div>
              <div className="industry-item">
                <h4>Consumer Goods</h4>
                <p>Mass customization and short-run production</p>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Production Process</h2>
            <div className="production-steps">
              <div className="step">
                <h4>1. Quote & Planning</h4>
                <p>
                  We analyze your requirements and provide detailed production
                  planning.
                </p>
              </div>
              <div className="step">
                <h4>2. Pre-Production</h4>
                <p>
                  File preparation, material selection, and quality planning.
                </p>
              </div>
              <div className="step">
                <h4>3. Production Run</h4>
                <p>
                  Continuous monitoring and quality control throughout
                  production.
                </p>
              </div>
              <div className="step">
                <h4>4. Quality Assurance</h4>
                <p>
                  Final inspection, testing, and certification before delivery.
                </p>
              </div>
            </div>
          </section>

          <div className="service-cta">
            <h3>Ready for Production-Scale Manufacturing?</h3>
            <Link to="/contact" className="cta-button">
              Request Quote
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

export default ProductionPrinting;
