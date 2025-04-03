/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import "./styles/contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      const response = await fetch("https://finpay-b2c-backend.onrender.com/api/query/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setResponseMessage({ type: "success", text: "Message sent successfully!" });
        setFormData({ fullName: "", email: "", number: "", message: "" });
      } else {
        setResponseMessage({ type: "error", text: result.message || "Something went wrong!" });
      }
    } catch (error) {
      setResponseMessage({ type: "error", text: "Failed to send message. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="page-title pb-0 border-0">
        <img src="/assets/contact us-01.svg" alt="Contact Us" className="full-width-image" />
      </section>

      <div className="page-content">
        <section className="pb-lg-0 z-index-1 pt-0">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-7 col-md-12 ps-lg-10 order-lg-1">
                <div className="theme-title">
                  <h2>Get In Touch</h2>
                </div>
                {responseMessage && (
                  <div className={`alert ${responseMessage.type === "success" ? "alert-success" : "alert-danger"}`}>
                    {responseMessage.text}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="text"
                          name="fullName"
                          className="form-control"
                          placeholder="Name"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="number"
                          className="form-control"
                          placeholder="Phone"
                          required
                          value={formData.number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Write Message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" className="themeht-btn primary-btn mt-4" disabled={loading}>
                    <span>{loading ? "Sending..." : "Submit"}</span>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </form>
              </div>

              <div className="col-lg-5 col-md-12 mt-6 mt-lg-0">
                <div className="contact-box">
                  <div className="theme-title">
                    <h2>Contact Details</h2>
                  </div>
                  <ul className="contact-info list-unstyled">
                    <li>
                      <i className="bi bi-globe-americas fs-3"></i>
                      <div>
                        <span>Visit Our Location</span>
                        <b>ABDKS Solutions Private Limited</b>
                        <p>
                          Plot No 97, Dakshinpuri - I, Shrikishan, Sanganer, Jagatpura, Jaipur Rajasthan, India, 302017
                        </p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-envelope fs-3"></i>
                      <div>
                        <span>Send Us Email</span>
                        <a href="mailto:info@abdks.com" className="text-decoration-none">
                          info@abdks.com
                        </a>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-telephone-outbound fs-3"></i>
                      <div>
                        <span>Phone No.</span>
                        <a
                          href="tel:+91 72970 26119"
                          className="text-decoration-none"
                        >
                          +91 72970 26119
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row my-4">
              <div className="col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3561.264701407029!2d75.869785!3d26.799699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ3JzU4LjkiTiA3NcKwNTInMTEuMiJF!5e0!3m2!1sen!2sin!4v1724749044503!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
