import { useState } from "react";
import zoraLogo from "./assets/logo.png";
import "./Contact.css";
import "./divider.css";
import "./button.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact">
      <div className="page-container contact-page">
        <div className="page-content">
          <div className="contact-background-image"></div>
          <img src={zoraLogo} alt="Zora360 Logo" className="contact-logo" />

          <p className="page-description">
            Get in touch with us for all your 3D printing needs
          </p>

          <div className="contact-container">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="custom-design">Custom 3D Design</option>
                      <option value="prototyping">Rapid Prototyping</option>
                      <option value="production">Production Printing</option>
                      <option value="consultation">
                        Consultation Services
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="stm-button">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h4>Address</h4>
                    <p>
                      123 Tech Street
                      <br />
                      Innovation City, IC 12345
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>info@zora360.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-details">
                    <h4>Business Hours</h4>
                    <p>
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="quick-contact">
                <h3>Quick Actions</h3>
                <div className="quick-contact-cards">
                  <div className="quick-card">
                    <div className="quick-icon">💬</div>
                    <h4>Live Chat</h4>
                    <p>Chat with our experts</p>
                    <button className="quick-btn">Start Chat</button>
                  </div>

                  <div className="quick-card">
                    <div className="quick-icon">📅</div>
                    <h4>Book Meeting</h4>
                    <p>Schedule a consultation</p>
                    <button className="quick-btn">Book Now</button>
                  </div>

                  <div className="quick-card">
                    <div className="quick-icon">💰</div>
                    <h4>Get Quote</h4>
                    <p>Request project pricing</p>
                    <button className="quick-btn">Get Quote</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
