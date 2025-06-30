import { Link } from 'react-router-dom';
import './servicestyle.css'

function ConsultationServices() {
  return (
    <div className='custom-design-top-space'>
      <div className="page-container service-detail-page">
      <div className="page-content">
        <div className="service-detail-header">
          <div className="service-detail-icon">💡</div>
          <h1 className="page-title">Consultation Services</h1>
          <p className="page-description">
            Expert advice on 3D printing technologies, materials selection, and project optimization
          </p>
        </div>

        <div className="service-detail-content">
          <section className="detail-section">
            <h2>Professional Guidance</h2>
            <p>Get professional guidance to choose the best approach and materials for your specific project needs. Our consultation services help you make informed decisions about 3D printing technologies, processes, and strategies.</p>
          </section>

          <section className="detail-section">
            <h2>Consultation Areas</h2>
            <div className="consultation-areas">
              <div className="area-card">
                <h4>Technology Selection</h4>
                <p>Choose the right 3D printing technology for your application</p>
              </div>
              <div className="area-card">
                <h4>Material Advisory</h4>
                <p>Select optimal materials for performance and cost-effectiveness</p>
              </div>
              <div className="area-card">
                <h4>Design Optimization</h4>
                <p>Optimize designs for 3D printing manufacturability</p>
              </div>
              <div className="area-card">
                <h4>Cost Analysis</h4>
                <p>Detailed cost breakdowns and optimization strategies</p>
              </div>
              <div className="area-card">
                <h4>Quality Standards</h4>
                <p>Establish quality requirements and testing protocols</p>
              </div>
              <div className="area-card">
                <h4>Scalability Planning</h4>
                <p>Plan for production scaling and volume requirements</p>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Consultation Process</h2>
            <div className="process-flow">
              <div className="flow-step">
                <h4>Initial Assessment</h4>
                <p>Understanding your project goals and requirements</p>
              </div>
              <div className="flow-step">
                <h4>Technical Analysis</h4>
                <p>Evaluating design, materials, and manufacturing options</p>
              </div>
              <div className="flow-step">
                <h4>Recommendations</h4>
                <p>Detailed recommendations with pros, cons, and alternatives</p>
              </div>
              <div className="flow-step">
                <h4>Implementation Plan</h4>
                <p>Step-by-step roadmap for project execution</p>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Why Choose Our Consultation?</h2>
            <ul className="why-choose-list">
              <li>Over 10 years of 3D printing industry experience</li>
              <li>Deep knowledge of all major 3D printing technologies</li>
              <li>Proven track record with 500+ successful projects</li>
              <li>Unbiased recommendations focused on your success</li>
              <li>Ongoing support throughout your project lifecycle</li>
              <li>Cost-effective solutions that maximize ROI</li>
            </ul>
          </section>

          <div className="service-cta">
            <h3>Need Expert Advice for Your Project?</h3>
            <Link to="/contact" className="cta-button">Schedule Consultation</Link>
            <Link to="/" className="back-button">← Back to Services</Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ConsultationServices;