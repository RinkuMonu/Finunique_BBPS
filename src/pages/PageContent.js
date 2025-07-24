import React from "react";
import "./style/new.css";
import { Link } from "react-router-dom";
import Testinomials from "../components/Testinomials/Testinomials";
import ServicesSection from "../components/sevicesSection/ServicesSection";

function PageContent() {
  return (
    <>
      <div className="new-page-content">
        {/* About Section */}
        <section className="about-section py-5" >
          <div className="container">
            <div className="row align-items-center g-5">
              {/* Image Column */}
              <div className="col-lg-6">
                <div className="about-image-wrapper position-relative">
                  <img
                    className="about-img rounded-4 shadow-lg img-fluid"
                    src="/assets/Home/01.jpg"
                    alt="Team working on digital solutions"
                    data-aos="zoom-in"
                  />
                  <div className="position-absolute bottom-0 start-0 m-4">
                    <div className="bg-white p-3 rounded-3 shadow-sm d-inline-block">
                      <div className="d-flex align-items-center">
                        <div className="pe-3 border-end border-2 border-ffb200-20">
                          <h3 className="text-ffb200 mb-0">7+</h3>
                          <p className="small mb-0">Years Experience</p>
                        </div>
                        <div className="ps-3">
                          <h3 className="text-ffb200 mb-0">1000+</h3>
                          <p className="small mb-0">Happy Retailers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="col-lg-6">
                <div className="ps-lg-4">
                  <span className="badge bg-ffb200-10 text-ffb200-800 rounded-pill px-3 py-2 mb-3 d-inline-block">
                    About Us
                  </span>
                  <h2 className="display-5 fw-bold mb-4">
                    Fast <span className="text-ffb200">BBPS</span> Recharge Solutions<br />
                    for Your <span className="text-dark">Digital Business</span>
                  </h2>

                  <div className="mb-4">
                    <p className="lead" style={{ color: "#5a5a5a" }}>
                      ABDKS is revolutionizing retail BBPS distribution with our cutting-edge fintech platform based in Jaipur.
                    </p>
                    <p style={{ color: "#666" }}>
                      We provide lightning-fast DTH recharge, prepaid/postpaid mobile solutions, and seamless utility bill payment software - empowering traders with smarter tools for the digital age.
                    </p>
                  </div>

                  {/* Features Grid */}
                  <div className="row g-3 mb-4">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start mb-3">
                        <div className="icon-sm bg-ffb200-10 text-ffb200 rounded-circle me-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                          <i className="bi bi-award-fill"></i>
                        </div>
                        <div>
                          <h6 className="mb-0" style={{ color: "#333" }}>Industry Veterans</h6>
                          <p className="small" style={{ color: "#777" }}>7+ Years of Proven Legacy</p>
                        </div>
                      </div>

                      <div className="d-flex align-items-start mb-3">
                        <div className="icon-sm bg-ffb200-10 text-ffb200 rounded-circle me-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                          <i className="bi bi-people-fill"></i>
                        </div>
                        <div>
                          <h6 className="mb-0" style={{ color: "#333" }}>Trusted Partner</h6>
                          <p className="small" style={{ color: "#777" }}>1000+ Retailers in Jaipur</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="d-flex align-items-start mb-3">
                        <div className="icon-sm bg-ffb200-10 text-ffb200 rounded-circle me-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                          <i className="bi bi-headset"></i>
                        </div>
                        <div>
                          <h6 className="mb-0" style={{ color: "#333" }}>Always Available</h6>
                          <p className="small" style={{ color: "#777" }}>24x7 Multilingual Support</p>
                        </div>
                      </div>

                      <div className="d-flex align-items-start mb-3">
                        <div className="icon-sm bg-ffb200-10 text-ffb200 rounded-circle me-3 flex-shrink-0 d-flex align-items-center justify-content-center">
                          <i className="bi bi-graph-up-arrow"></i>
                        </div>
                        <div>
                          <h6 className="mb-0" style={{ color: "#333" }}>Easy Onboarding</h6>
                          <p className="small" style={{ color: "#777" }}>Transparent Commissions</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="d-flex flex-wrap gap-3">
                    <Link to="/contactus" className="btn btn-ffb200 px-4 py-2 rounded-3 fw-medium">
                      Get Started
                    </Link>
                    {/* <Link to="/register" className="btn btn-outline-ffb200 px-4 py-2 rounded-3 fw-medium">
              Learn More
            </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step Process Section */}
        <section className="steps-section">
          <div className="container">
            <div className="section-header text-center">
              <h4>The Next Generation Payment Method</h4>
              <p>
                Accept Payments easily & globally. The one single integration
                platform that you control in your new life.
              </p>
              <h4>Growth Is Our Only Obsession</h4>
              <p>
                Abdks makes your work easier and faster. Our strongest motive is
                to provide the best possible services to our customers.
              </p>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <div className="step-icon ">
                  <img src="/assets/Home/identity.png " className="bg-circle-image rounded-circle" alt="IDENTITY CARD" />
                </div>
                <h4 className="text-black">IDENTITY CARD</h4>
                <span>1st Step</span>
              </div>
              <div className="step-card">
                <div className="step-icon">
                  <img src="/assets/Home/pancard.png" className="bg-circle-image  rounded-circle" alt="VALID PAN CARD" />
                </div>
                <h4 className="text-black">Register with PAN & Aadhaar</h4>
                <span>2nd Step</span>
              </div>
              <div className="step-card">
                <div className="step-icon">
                  <img src="/assets/Home/secure.png" className="bg-circle-image  rounded-circle" alt="SECURE PAYMENT" />
                </div>
                <h4 className="text-black">Get Activated in 24 Hours</h4>
                <span>3rd Step</span>
              </div>
              <div className="step-card">
                <div className="step-icon">
                  <img
                    src="/assets/Home/quality.png"
                    alt="100% QUALITY ASSURANCE"
                    className="bg-circle-image  rounded-circle"
                  />
                </div>
                <h4 className="text-black">Start Earning via BBPS Today</h4>
                <span>4th Step</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <div className="features-grid1">
              <div className="features-image-wrapper">
                <img
                  className="features-img"
                  src="/assets/Home/SERVICE1.png"
                  alt="Team Support"
                />
              </div>
              <div className="features-content-wrapper ">
                <div className="feature-item p-4">
                  <div className="feature-icon-box style-1">
                    <img
                      src="/assets/Home/moniter.png"
                      width={33}
                      alt="Business Opportunities"
                    />
                  </div>
                  <div className="feature-text">
                    <h4>Explore Unlimited Business Opportunities</h4>
                    <p>
                      Abdks is easy to operate and it also makes your work easier
                      and faster. We will always have a wide variety of options as
                      per your needs. You are always privileged to choose how to
                      go forward. After all, You are Important to us.
                    </p>
                  </div>
                </div>
                <div className="feature-item p-4">
                  <div className="feature-icon-box style-2 ">
                    <img
                      src="/assets/Home/advertisements.png"
                      width={33}
                      alt="Supportive Team"
                    />
                  </div>
                  <div className="feature-text">
                    <h4>Supportive Team</h4>
                    <p>
                      Our customer service is best in class and committed to serve
                      you 24x7 for your queries and questions. We're just one call
                      away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection years={7} heading="Our Core BBPS & Fintech Services in Jaipur" />



        <Testinomials />

      </div>
      <div className="cta-premium-banne  py-5 position-relative overflow-hidden">
        {/* Floating particles */}
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>

        {/* Glow effect */}
        <div className="cta-glow"></div>

        {/* Main content */}
        <div className="position-relative z-3 text-center px-3">
          <h3 className="display-5 fw-bold mb-4 text-gradient">
            <span>Start Your Digital BBPS Journey</span><br />
            <span className="text-primary">In Jaipur With ABDKS</span>
          </h3>

          <p className="lead mb-5 opacity-75">
            Join Jaipur's fastest-growing BBPS network with<br />
            <span className="highlight-text">zero upfront costs</span> and
            <span className="highlight-text"> instant activation</span>
          </p>

          <Link
            to="/createaccount?role=Retailer"
            className="btn btn-premium btn-lg px-5 py-3 fw-bold shadow-hover"
          >
            <span className="btn-content">
              Become a BBPS Retailer Today
            </span>
            <span className="btn-glow"></span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PageContent;