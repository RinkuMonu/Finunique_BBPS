/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useState } from "react";
import "./styles/contact.css";
import img from "../Assets/images/contact-us.png";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import axios from "axios";
import SEO from "../components/SEO/SEO";
import { useUser } from "../context/UserContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ContactUs = () => {
  const { seo } = useUser();
  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [contactDetails, setContactDetails] = useState(null);
 const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "number") {
    const numericValue = value.replace(/\D/g, "");
    setFormData((prev) => ({
      ...prev,
      [name]: numericValue,
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setResponseMessage(null);

  //   try {
  //     const response = await fetch(
  //       "https://finpay-b2c-backend.onrender.com/api/query/submit-form",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );

  //     const result = await response.json();
  //     if (response.ok) {
  //       setResponseMessage({
  //         type: "success",
  //         text: "Message sent successfully!",
  //       });
  //       setFormData({ fullName: "", email: "", number: "", message: "" });
  //     } else {
  //       setResponseMessage({
  //         type: "error",
  //         text: result.message || "Something went wrong!",
  //       });
  //     }
  //   } catch (error) {
  //     setResponseMessage({
  //       type: "error",
  //       text: "Failed to send message. Try again later.",
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const postData = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.number,
      message: formData.message,
      service: "N/A",
      website_id: 5,
    };
  
    try {
      const response = await axios.post(
        "https://cms.sevenunique.com/apis/contact-query/set-contact-details.php",
        postData,
        {
          headers: {
            Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
            "Content-Type": "application/json",
          },
        }
      );
  
      console.log("Response:", response.data);
  
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your message has been sent successfully.",
        confirmButtonColor: "#ffb300",
      });
  
      setFormData({
        fullName: "",
        number: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
  
      Swal.fire({
        icon: "error",
        title: "Oops!",
        text: "Failed to send message. Please try again later.",
        confirmButtonColor: "#ffb300",
      });
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await axios.get(
          "https://cms.sevenunique.com/apis/contact/get-contact-details.php?website_id=5",
          {
            headers: {
              Authorization: "Bearer jibhfiugh84t3324fefei#*fef",
            },
          }
        );
        const result = response.data;
        if (result.status === "success") {
          setContactDetails(result.data);
        }
      } catch (error) {
        console.error("Error fetching contact details:", error);
      }
    };
    fetchContactDetails();
  }, []);

  return (
    <div>
      <SEO
        meta_title={seo?.meta_title}
        meta_description={seo?.meta_description}
        meta_keywords={seo?.meta_keywords}
        og_title={seo?.og_title}
        og_description={seo?.og_description}
        og_type={seo?.og_type}
        og_url={seo?.og_url}
        og_image={seo?.og_image}
        og_site_name={seo?.og_site_name}
        canonical_tag={seo?.canonical_tag}
      />
      <section className="hero-section heroaabout overflow-hidden">
        <div className="container-fluid p-0 d-flex  flex-column align-items-center">
          <div className="row align-items-center hero-content-wrapper ">
            <div className="col-lg-7 col-md-12 text-content px-4 px-lg-5 ">
              <h1 className="hero-headline">
                Contact <span className="highlight">Us</span>
              </h1>
              <p className="hero-subheadline">
                We are here to help - anytime, anywhere
              </p>
              <p className="hero-subheadline">
                Whether you're a retailer ready to join our BBPS network, a
                distributor seeking a fintech partnership, or a customer needing
                support — the Finunique team is available 24/7 with fast and
                reliable service.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 image-content hero-image-container">
              <img
                src={img}
                alt="Retail Partner"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="pb-lg-0 z-index-1 pt-0">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-7 col-md-12 ps-lg-10 order-lg-1">
                <div className="theme-title">
                  <h2>Stay in Touch</h2>
                  <p>
                    Fill out the form, and our team will get back to you
                    shortly.
                  </p>
                </div>
                {responseMessage && (
                  <div
                    className={`alert ${
                      responseMessage.type === "success"
                        ? "alert-success"
                        : "alert-danger"
                    }`}
                  >
                    {responseMessage.text}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  {/* Row 1: Name and Mobile Number */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          name="fullName"
                          className="form-control"
                          placeholder="Full Name"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <input
                          type="tel"
                          name="number"
                          className="form-control"
                          placeholder="Mobile Number"
                          required
                          pattern="[0-9]*"
                          inputMode="numeric"
                          value={formData.number}
                          onChange={handleChange}
                          maxLength={10}
                          onKeyPress={(e) => {
                            if (!/[0-9]/.test(e.key)) {
                              e.preventDefault();
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Email */}
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group mb-3">
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
                  </div>

                  {/* Row 3: Message / Query */}
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group mb-4">
                        <textarea
                          name="message"
                          className="form-control"
                          placeholder="Message / Query"
                          rows="4"
                          required
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="themeht-btn primary-btn mt-4"
                    disabled={loading}
                  >
                    <span>{loading ? "Sending..." : "Send Message"}</span>
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
                        <span>Head Office</span>
                        <b>Finunique Small Private Limited</b>
                        <p>{contactDetails?.address || "Loading address..."}</p>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-envelope fs-3"></i>
                      <div>
                        <span>Email</span>
                        <a
                          href={`mailto:support@finuniques.in`}
                          className="text-decoration-none"
                        >
                         <span>support@finuniques.in</span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <i className="bi bi-telephone-outbound fs-3"></i>
                      <div>
                        <span>Phone</span>
                        <a
                          href={`tel:${contactDetails?.phone}`}
                          className="text-decoration-none"
                        >
                          {contactDetails?.phone || "Loading phone..."}
                        </a>
                      </div>
                    </li>
                    {/* <li>
                      <i className="bi bi-whatsapp fs-3"></i>
                      <div>
                        <span>WhatsApp</span>
                        <a
                          href="https://wa.me/91XXXXXXXXXX"
                          className="text-decoration-none"
                        >
                          +91-XXXXXXXXXX
                        </a>
                      </div>
                    </li> */}
                    <li>
                      <i className="bi bi-clock fs-3"></i>
                      <div>
                        <span>Professional Hours</span>
                        <p>24/7 assistance for all BBPS partners</p>
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

            <div className="row my-5">
              <div className="col-lg-12 text-center">
                <div className="partner-box p-5 rounded shadow-sm">
                  <h2 className="fw-bold mb-3 text-gradient">Partner With Us</h2>
                  <p className="lead text-muted mb-4">
                    Interested in becoming a BBPS retailer, distributor, or service partner with Finunique? Let’s shape India’s digital payment future together.
                  </p>
                  <Link to={"/createaccount?role=Retailer"} className="btn btn-warning text-dark fw-semibold d-inline-flex align-items-center px-4 py-2 shadow-sm">
                    Be a Partner <FiArrowRight className="ms-2" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
