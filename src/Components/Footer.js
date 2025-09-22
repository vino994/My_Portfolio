import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Footer.css";
import emailjs from "@emailjs/browser";

const CONTACT = {
  name: "Vinoth Sanjeevi",
  address: "162 Shop street, Aranthangi, TN 614616",
  phone: "+91 938033 4317",
  email: "vinodjayasudha@gmail.com",
  lat: 10.1725,
  lng: 78.9916,
};

export default function Footer() {
  const mapSrc = `https://www.google.com/maps?q=${CONTACT.lat},${CONTACT.lng}&z=14&output=embed`;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lilibt4",
        "template_oz519ja",
        form.current,
        "-ofppnO1dVjdcg5jI"
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <footer className="site-footer py-5">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* Left: Contact + Form */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="card glass flex-fill w-100">
              <div className="card-body">
                <h3 className="footer-title mb-3">Let’s Connect</h3>
                <p className="footer-info small mb-4">
                  Interested in working together or discussing opportunities?
                  Reach me directly below or drop a quick message.
                </p>

                {/* Contact Info */}
                <div className="contact-list mb-4">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt text-accent"></i>
                    <span>{CONTACT.address}</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone text-accent"></i>
                    <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope text-accent"></i>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </div>
                </div>

                {/* Form */}
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <div className="row g-3">
                    <div className="col-12 col-md-6">
                      <input
                        name="user_name"
                        className="form-control form-control-dark"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        type="email"
                        name="user_email"
                        className="form-control form-control-dark"
                        placeholder="Email address"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <textarea
                        name="message"
                        className="form-control form-control-dark"
                        rows="3"
                        placeholder="Message"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-danger w-100">
                        🚀 Hire Me / Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="card glass p-2 flex-fill w-100">
              <div className="map-wrap rounded-3 overflow-hidden">
                <iframe
                  title="My location map"
                  src={mapSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0, width: "100%", height: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom d-flex flex-column flex-md-row align-items-center justify-content-between mt-4 pt-3 text-center text-md-start">
          <div className="d-flex gap-3 mb-3 mb-md-0 flex-wrap justify-content-center">
            <a className="social" href="https://www.linkedin.com/in/vinothkumar-sanjeevi/"><i className="bi bi-linkedin" /></a>
            <a className="social" href="https://github.com/vino994"><i className="bi bi-github" /></a>
            <a className="social" href="https://www.facebook.com/vinothkumar.sanjeevi/"><i className="bi bi-facebook" /></a>
            <a className="social" href="#"><i className="bi bi-instagram" /></a>
          </div>
          <div className="text-muted small">
            <i className="bi bi-envelope me-1"></i>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <span className="mx-2">|</span>
            <i className="bi bi-telephone me-1"></i>
            <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
