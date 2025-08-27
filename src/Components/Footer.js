import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Footer.css";
import emailjs from '@emailjs/browser';

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
    emailjs.sendForm(
      'service_lilibt4',
      'template_oz519ja',
      form.current,
      '-ofppnO1dVjdcg5jI'
    ).then(
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
    <footer className="site-footer pt-5 pb-5">
      <div className="container">
        <div className="row g-4 align-items-stretch">
          {/* Contact Form */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="card glass flex-fill w-100">
              <div className="card-body">
                <h4 className="footer-title mb-3">Let’s work together</h4>
                <p className="footer-info small mb-4">
                  Have a project in mind? Drop a message or reach me at the details below.
                </p>

                <div className="row g-3 mb-4 contact-info-wrapper">
                  <div className="col-12 d-flex align-items-start gap-3 contact-info">
                    <i className="bi bi-geo-alt fs-5 text-accent"></i>
                    <div>
                      <div className="small text-muted">Address</div>
                      <div>{CONTACT.address}</div>
                    </div>
                  </div>
                  <div className="col-12 d-flex align-items-start gap-3 contact-info">
                    <i className="bi bi-telephone fs-5 text-accent"></i>
                    <div>
                      <div className="small text-muted">Phone</div>
                      <a className="link-light text-decoration-none" href={`tel:${CONTACT.phone}`}>
                        {CONTACT.phone}
                      </a>
                    </div>
                  </div>
                  <div className="col-12 d-flex align-items-start gap-3 contact-info">
                    <i className="bi bi-envelope fs-5 text-accent"></i>
                    <div>
                      <div className="small text-muted">Email</div>
                      <a className="link-light text-decoration-none" href={`mailto:${CONTACT.email}`}>
                        {CONTACT.email}
                      </a>
                    </div>
                  </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className="row g-3">
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
                    <button type="submit" className="btn btn-danger px-4 w-100 w-md-auto">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
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

        {/* Footer Bottom */}
        <div className="footer-bottom d-flex flex-column flex-md-row align-items-center justify-content-between mt-4 pt-3 mb-5 text-center text-md-start">
          <div className="d-flex align-items-center gap-3 mb-3 mb-md-0 justify-content-center justify-content-md-start flex-wrap">
            <a className="social" href="https://www.facebook.com/vinothkumar.sanjeevi/" aria-label="Facebook"><i className="bi bi-facebook" /></a>
            <a className="social" href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
            <a className="social" href="#" aria-label="Dribbble"><i className="bi bi-dribbble" /></a>
            <a className="social" href="https://www.linkedin.com/in/vinothkumar-sanjeevi/" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
            <a className="social" href="https://github.com/vino994" aria-label="GitHub"><i className="bi bi-github" /></a>
          </div>
          <div className="text-muted small">
            <i className="bi bi-envelope me-1"></i>
            <a className=" text-decoration-none" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <span className="mx-2">|</span>
            <i className="bi bi-telephone me-1"></i>
            <a className=" text-decoration-none" href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
