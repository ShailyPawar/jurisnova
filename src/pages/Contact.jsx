

import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">CONTACT US</h1>
          <p className="hero-subtitle">Let's discuss your legal needs</p>
        </div>
      </section>
             
      <div className="contact-content">
        <div className="contact-wrapper">
          {/* Contact Information Section */}
          <div className="contact-page-info">
            <h2>Get In Touch</h2>
            <p className="info-subtitle">We're here to help with all your legal requirements</p>
            
            <div className="contact-page-details">
              <div className="contact-page-item">
                <div className="contact-page-icon email-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div className="contact-page-text">
                  <h4>Email</h4>
                  <p>info@jurisnovalegal.com</p>
                </div>
              </div>

              <div className="contact-page-item">
                <div className="contact-page-icon phone-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-page-text">
                  <h4>Phone</h4>
                  <p>+91 7310505387</p>
                  
                </div>
              </div>

              <div className="contact-page-item">
                <div className="contact-page-icon location-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="contact-page-text">
                  <h4>Office Address</h4>
                  <p>Near Civil Court, Society Road, Laksar – 247663, Uttarakhand</p>
                </div>
              </div>

              {/* <div className="contact-page-item whatsapp-item">
                <div className="contact-page-icon whatsapp-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="contact-page-text">
                  <h4>WhatsApp</h4>
                  <p>Chat with us instantly</p>
                  <a href="https://wa.me/917310505387" target="_blank" rel="noopener noreferrer" className="item-link">Start Chat →</a>
                </div>
              </div> */}
            </div>
          </div>

          {/* Query Form Section */}
          {/* <div className="contact-page-form-section">
            <h2>Send Us a Message</h2>
            <p className="form-subtitle">Fill out the form and we'll get back to you within 24 hours</p>
            <form className="contact-page-form-container">
              <div className="contact-page-input-group">
                <label htmlFor="name">Your Name *</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="contact-page-input-group">
                <label htmlFor="email">Your Email *</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="contact-page-input-group">
                <label htmlFor="phone">Contact Number *</label>
                <input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div className="contact-page-input-group">
                <label htmlFor="message">Your Message *</label>
                <textarea id="message" placeholder="Tell us about your legal requirements..." required></textarea>
              </div>
              <button type="submit" className="contact-page-submit-btn">
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                </svg>
              </button>
            </form>
          </div> */}

          <div className="contact-page-form-section">
            <h2>Reach out if any querry</h2>
            <div className="contact-page-form-container">
              <div className="contact-page-input-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="contact-page-input-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="contact-page-input-group">
                <input type="text" placeholder="Your contact number" required />
              </div>
              <div className="contact-page-input-group">
                <textarea placeholder="Your querry" required></textarea>
              </div>
              <button type="submit" className="contact-page-submit-btn">
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22,2 15,22 11,13 2,9 22,2"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
  );
}

export default Contact;