import React from "react";
import "./AboutUs.css";
import img from "../../Assets/images/about-img.png";
import mission from "../../Assets/images/mission.png";
import vision from "../../Assets/images/vission.png";
import value from "../../Assets/images/values.png";
import {
  FiCheckCircle,
  FiArrowRight,
  FiEye,
  FiTarget,
  FiAward,
  FiUsers,
  FiZap,
  FiShield,
  FiUser,
} from "react-icons/fi";
import SEO from "../../components/SEO/SEO";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const{seo}=  useUser()
  return (
    <>
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
      <div style={{ marginTop: "-5px" }}>
        <section className="hero-section heroaabout overflow-hidden">
          <div className="container-fluid p-0 d-flex  flex-column align-items-center">
            <div className="row align-items-center hero-content-wrapper ">
              {/* Left Side Content */}
              <div className="col-lg-7 col-md-12 text-content px-4 px-lg-5 ">
                <h1 className="hero-headline">
                  Driving India's Digital Payment Future with{" "}
                  <span className="highlight">BBPS Innovation</span>
                </h1>
                <p className="hero-subheadline">
                  One platform for mobile recharges, bill payments, and card
                  transactions – powered by BBPS.
                </p>

                <div className="hero-features mb-4">
                  <div className="feature-item">
                    <FiCheckCircle className="feature-icon" />
                    <span>Zero Maintenance Fees</span>
                  </div>
                  <div className="feature-item">
                    <FiCheckCircle className="feature-icon" />
                    <span>Instant Settlements</span>
                  </div>
                  <div className="feature-item">
                    <FiCheckCircle className="feature-icon" />
                    <span>24/7 Support</span>
                  </div>
                </div>

                <div className="cta-buttons ">
                  <Link to={'/Services'} className="btn btn-primary cta-main">
                    Explore Our BBPS Services
                    <FiArrowRight className="cta-icon" />
                  </Link>
                  <Link to={'/createaccount?role=Retailer'} className="btn btn-outline-secondary cta-secondary">
                    Join the ABDKS Retailer Network
                  </Link>
                </div>
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
          <section className="py-5">
            <div className="container">
              <div className="row align-items-center">
                {/* Left Side Image */}
                <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                  <div className="shape-img-bg text-center">
                    <img
                      className="img-fluid"
                      src="/assets/WHO WE ARE.svg"
                      alt="About ABDKS"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>

                {/* Right Side Content */}
                <div className="col-lg-6 col-md-12">
                  <div className="abdk-story-section">
                    {/* Title */}
                    <h2 className="section-title mb-4">
                      From Vision to Fintech Powerhouse—
                      <br />
                      The ABDKS Story
                    </h2>

                    {/* Story */}
                    <p>
                      In 2024, fintech innovators{" "}
                      <strong>Mr. Dinesh Kumar</strong> and{" "}
                      <strong>Mr. Amit Balotia</strong> founded{" "}
                      <strong>ABDKS Solutions Private Limited.</strong> with a bold
                      mission: to simplify and scale BBPS-smooth digital
                      financial services across India.
                    </p>
                    <p>
                      The beginning that started in <strong>Jaipur</strong> as a
                      centered initiative has developed as a reliable platform,
                      offering Semales Utility <strong>Bill</strong> Payments,
                      Mobile and DTH Recharge BBPS, and Credit Card Swipe
                      Solutions.
                    </p>
                    <p>
                      <strong>ABDKS</strong> is rapidly expanding in Rajasthan
                      and beyond. Our
                      <strong> BBPS</strong> biller recharge system,
                      user-friendly interfaces, and fast onboarding have
                      empowered thousands of retailers and traders to make and
                      earn more smartly.
                    </p>
                    <p>
                      At ABDKS, we stand for <strong>innovation</strong>,{" "}
                      <strong>transparency</strong>, and <strong>impact</strong>
                      . Our vision is to lead India’s digital payment
                      revolution—one BBPS transaction at a time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section className="py-5 bg-light position-relative">
          <div className="container">
            <div className="row g-4">
              {/* Vision Card */}
              <div className="col-lg-4 col-md-6">
                <div className="vision-mission-card h-100 p-4 fade-in">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={vision}
                      alt="Vision"
                      className="img-fluid me-3"
                      style={{ width: "50px" }}
                    />
                    <h3 className="mb-0 text-warning-emphasis">Our Vision</h3>
                  </div>
                  <h4 className="mb-3 text-gradient">
                    Creating a digital future that works for everyone
                  </h4>
                  <p className="text-muted">
                    At <strong>ABDKS</strong>, we imagine a future where every
                    Indian retailer — from urban shopkeepers to remote consumers
                    — can access and benefit from{" "}
                    <strong>BBPS-operated digital services</strong>.
                  </p>
                  <div className="highlight-box p-3 bg-light-blue rounded mb-3">
                    <p className="mb-0">
                      <strong>Our long-term goal:</strong> By 2040, provide
                      fintech access nationwide and support India's rise as a
                      global economic leader through a scalable, BBPS-powered
                      platform.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-auto pt-2">
                    <div className="icon-circle bg-warning me-2">
                      <FiEye className="text-white" />
                    </div>
                    <small className="text-muted">
                      Envisioning a digitally empowered India
                    </small>
                  </div>
                </div>
              </div>

              {/* Mission Card - Highlighted */}
              <div className="col-lg-4 col-md-6">
                <div className="vision-mission-card h-100 p-4  text-gray rounded-4 fade-in delay-1"
                style={{backgroundColor:"lightblue"}}
                >
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={mission}
                      alt="Mission"
                      className="img-fluid me-3"
                      style={{
                        width: "45px",
                        filter: "brightness(0) invert(1)",
                      }}
                    />
                    <h3 className="mb-0 text-white">Our Mission</h3>
                  </div>
                  <h4 className="mb-3">
                    Empowering businesses with BBPS-operated Technology
                  </h4>
                  <p>
                    Our mission is to provide a strong, reliable, and
                    transparent <strong>BBPS recharge platform</strong> that
                    empowers Indian retailers, shop owners, and local traders.
                  </p>
                  <ul className="mission-list">
                    <li className="mb-2 d-flex align-items-start">
                      <FiCheckCircle className="me-2 mt-1 flex-shrink-0" />
                      <span>Mobile BBPS recharge solutions</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <FiCheckCircle className="me-2 mt-1 flex-shrink-0" />
                      <span>Utility bill payment infrastructure</span>
                    </li>
                    <li className="mb-2 d-flex align-items-start">
                      <FiCheckCircle className="me-2 mt-1 flex-shrink-0" />
                      <span>Safe credit transactions platform</span>
                    </li>
                  </ul>
                  <div className="d-flex align-items-center mt-auto pt-2">
                    <div className="icon-circle bg-white me-2">
                      <FiTarget className="text-primary" />
                    </div>
                    <small>Driving India's digital revolution</small>
                  </div>
                </div>
              </div>

              {/* Core Values */}
              <div className="col-lg-4 col-md-12">
                <div className="vision-mission-card h-100 p-4 fade-in delay-2">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={value}
                      alt="Values"
                      className="img-fluid me-3"
                      style={{ width: "40px" }}
                    />
                    <h3 className="mb-0 text-warning-emphasis">
                      Our Core Values
                    </h3>
                  </div>
                  <h4 className="mb-3 text-gradient">
                    The principles that power ABDKS
                  </h4>

                  <div className="values-container">
                    <div className="value-item">
                      <div className="value-icon bg-light-success">
                        <FiAward className="text-success" />
                      </div>
                      <div>
                        <h6 className="mb-1">Excellence</h6>
                        <p className="small text-muted mb-2">
                          BBPS-operated fintech solutions that set benchmarks
                          for speed and reliability.
                        </p>
                      </div>
                    </div>

                    <div className="value-item">
                      <div className="value-icon bg-light-primary">
                        <FiUsers className="text-primary" />
                      </div>
                      <div>
                        <h6 className="mb-1">Collaboration</h6>
                        <p className="small text-muted mb-2">
                          Partnering with retailers, distributors, and
                          stakeholders across India.
                        </p>
                      </div>
                    </div>

                    <div className="value-item">
                      <div className="value-icon bg-light-warning">
                        <FiZap className="text-warning" />
                      </div>
                      <div>
                        <h6 className="mb-1">Innovation</h6>
                        <p className="small text-muted mb-2">
                          Continuous upgrades using cutting-edge technology and
                          automation.
                        </p>
                      </div>
                    </div>

                    <div className="value-item">
                      <div className="value-icon bg-light-danger">
                        <FiShield className="text-danger" />
                      </div>
                      <div>
                        <h6 className="mb-1">Integrity</h6>
                        <p className="small text-muted mb-2">
                          Upholding transparency and data security in every
                          transaction.
                        </p>
                      </div>
                    </div>

                    <div className="value-item">
                      <div className="value-icon bg-light-info">
                        <FiUser className="text-info" />
                      </div>
                      <div>
                        <h6 className="mb-1">Customer Focus</h6>
                        <p className="small text-muted mb-2">
                          Intuitive dashboards, fast settlements, and true value
                          creation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="service-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 mb-5 mb-lg-0">
                <div className="theme-title">
                  <h6 className="fz40">Services</h6>
                  <p>
                    Services that we offer to our clients at a glance. We have
                    earned 3+ years of expertise in services. You just need to
                    tell us about your requirements, we will strictly take care
                    of that. You are just one click away!! Start your own
                    business with Abdks services and provide Recharge and Bill
                    Payment (BBPS) to your customers.
                  </p>
                </div>
                <div className="serviceImg">
                  <img
                    className="img-fluid rounded-lg mt-4 "
                    src="/assets/Home/SERVICE2.png"
                    alt="Our Services"
                  />
                </div>
              </div>
              <div className="col-lg-7 ps-lg-8">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="service-item style-1">
                      <div className="service-item-inner">
                        <div className="service-icon">
                          <img
                            src="/assets/Home/electricity-bill.svg"
                            width="50"
                            alt="electricity"
                          />
                        </div>
                        <div className="service-desc">
                          <div className="service-title">
                            <h4>Prepaid & Postpaid Recharge BBPS</h4>
                          </div>
                          <p>
                            Fast mobile recharge solutions for all telecom
                            providers with real-time confirmation
                          </p>
                          <a className="arrow-btn" href="/BBPS">
                            <i className="bi bi-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <div className="service-item style-1 service-active">
                      <div className="service-item-inner">
                        <div className="service-icon">
                          <img
                            src="/assets/Home/water-bill.svg"
                            width="50"
                            alt="pay-utility"
                          />
                        </div>
                        <div className="service-desc">
                          <div className="service-title">
                            <h4>DTH Recharge BBPS Platform</h4>
                          </div>
                          <p>
                            Recharge all major DTH services instantly using our
                            secure BBPS-powered platform.
                          </p>
                          <a className="arrow-btn" href="/recharge">
                            <i className="bi bi-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <div className="service-item style-1">
                      <div className="service-item-inner">
                        <div className="service-icon">
                          <img
                            src="/assets/Home/bbps.svg"
                            width="40"
                            alt="bbps1"
                          />
                        </div>
                        <div className="service-desc">
                          <div className="service-title">
                            <h4>BBPS Utility Bill Payments in Rajasthan</h4>
                          </div>
                          <p>
                            Pay electricity, gas, water, insurance, and
                            broadband bills through our unified BBPS system.
                          </p>
                          <a className="arrow-btn" href="/recharge">
                            <i className="bi bi-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mb-4">
                    <div className="service-item style-1">
                      <div className="service-item-inner">
                        <div className="service-icon"></div>
                        <div className="service-desclast">
                          <div className="service-title">
                            <a href="/Services">
                              <h4>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="80"
                                  height="50"
                                  fill="currentColor"
                                  class="bi bi-plus-square-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                                </svg>
                              </h4>
                            </a>
                          </div>
                          <p>View more service's</p>
                          <a className="arrow-btn" href="/Services">
                            <i className="bi bi-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* Testimonial 1 */}
                <div className="col-lg-4 mb-4">
                  <div className="testimonial-card bg-white p-4 h-100">
                    <div className="d-flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className="bi bi-star-fill text-warning me-1"
                        ></i>
                      ))}
                    </div>
                    <p className="mb-4">
                      " I started with ABDKS in 2024, and now I handle 300 BBPS
                      transactions daily. The stage is fast, and the support
                      team is excellent."
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="avatar bg-primary-emphasis text-white rounded-circle d-flex align-items-center justify-content-center">
                          RK
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-0">Ravi Kumar</h6>
                        <small className="text-muted">Retailer - Jaipur</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="col-lg-4 mb-4">
                  <div className="testimonial-card bg-white p-4 h-100">
                    <div className="d-flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className="bi bi-star-fill text-warning me-1"
                        ></i>
                      ))}
                    </div>
                    <p className="mb-4">
                      " BBPS recharge and utility bill payment setup was so
                      simple. My customers love instant service."
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="avatar bg-primary-emphasis text-white rounded-circle d-flex align-items-center justify-content-center">
                          NV
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-0">Neha Verma</h6>
                        <small className="text-muted">
                          Shop Owner - Jaipur
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="col-lg-4 mb-4">
                  <div className="testimonial-card bg-white p-4 h-100">
                    <div className="d-flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className="bi bi-star-fill text-warning me-1"
                        ></i>
                      ))}
                    </div>
                    <p className="mb-4">
                      " Android app is smooth, and commission is more satisfied
                      with others. Abdks is very satisfied."
                    </p>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0">
                        <div className="avatar bg-primary-emphasis text-white rounded-circle d-flex align-items-center justify-content-center">
                          MM
                        </div>
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h6 className="mb-0">Mohit Meena</h6>
                        <small className="text-muted">
                          Retail Merchant - Jaipur
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
