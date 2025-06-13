import React from "react";
import "./style/Home.css";

function PageContent() {
  return (
    <div className="page-content">
      {/* About div */}
      <div className="about-section" style={{ background: "#f5f5f5" }}>
        <div className="container ">
          <div className="row align-items-center pt-5">
            <div className="col-lg-6 col-md-12">
              <div className="shape-img-bg">
                <img
                  className="mask-img img-fluid"
                  src="/assets/Home/01.jpg"
                  alt="About"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-5 mt-lg-0 ps-lg-10 ">
              <div className="theme-title mb-3">
                <h6>About Us</h6>
                <h2>
                  Fast <span>BBPS</span> recharge solution to provide Your
                  digital business in India
                </h2>
                <p className="mt-2">
                  ABDKS is a Jaipur-based Fintech platform that is changing how
                  retail vendors have distributed the BBPS biller recharge
                  system. We offer fast DTH recharge BBPS platform, prepaid and
                  postpaid recharge BBPS, and Seamless Utility Bill Payment
                  Software - to empower traders to operate smartly.
                </p>
                <p>
                  We are dedicated to the creation of BBPS solutions with
                  secure, scalable and intuitive BBPS solutions for digital
                  financial development all over India.
                </p>
              </div>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <ul className="list-unstyled list-icon style-1">
                    <li>
                      <i className="bi bi-check2"></i>7+ Years of Industry
                      Legacy
                    </li>
                    <li>
                      <i className="bi bi-check2"></i> Trusted by 1000+
                      Retailers in Jaipur
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 mb-3 ">
                  <ul className="list-unstyled list-icon style-1">
                    <li>
                      <i className="bi bi-check2"></i> 24x7 Multilingual
                      Customer Support
                    </li>
                    <li>
                      <i className="bi bi-check2"></i> Fast Onboarding &
                      Transparent Commissions
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Step Process div */}
      <div className="step-process-area position-relative MB50 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 MB40 text-center">
              <h4 className="mb-3">The Next Generation Payment Method</h4>
              <p className="mb-4">
                Accept Payments easily & globally. The one single integration
                platform that you control in your new life.
              </p>
              <h4 className="mb-3">Growth Is Our Only Obsession</h4>
              <p>
                Abdks makes your work easier and faster. Our strongest motive is
                to provide the best possible services to our customers.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mb-4">
              <div className="step-item style-1 text-white">
                <div className="step-icon">
                  <img src="/assets/Home/identity.png" alt="IDENTITY CARD" />
                </div>
                <h4>IDENTITY CARD</h4>
                <span>1st Step</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mb-4">
              <div className="step-item style-1 text-white step-bg">
                <div className="step-icon">
                  <img src="/assets/Home/pancard.png" alt="VALID PAN CARD" />
                </div>
                <h4>Register with PAN & Aadhaar</h4>
                <span>2nd Step</span>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mb-4">
              <div className="step-item style-1 text-white">
                <div className="step-icon">
                  <img src="/assets/Home/secure.png" alt="SECURE PAYMENT" />
                </div>
                <h4>
                  Get Activated in 24 Hours
                </h4>
                <span>3rd Step</span>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-4 mt-lg-0 mb-4">
              <div className="step-item style-1 text-white step-bg">
                <div className="step-icon">
                  <img
                    src="/assets/Home/quality.png"
                    alt="100% QUALITY ASSURANCE"
                  />
                </div>
                <h4>Start Earning via BBPS Today</h4>
                <span>4th Step</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team div */}
      <div className="bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 order-lg-1 serviceImg">
              <img
                className="img-fluid rounded-lg"
                src="/assets/Home/SERVICE1.png"
                alt="Team Support"
              />
            </div>
            <div className="col-lg-6 col-md-12 mt-5 mt-lg-0 ps-lg-10">
              <div className="featured-item style-3 mb-5 ms-lg-7">
                <div className="featured-icon grediant-bg3">
                  <img
                    src="/assets/Home/moniter.png"
                    width={33}
                    alt="Business Opportunities"
                  />
                </div>
                <div className="featured-desc">
                  <div className="featured-title">
                    <h4>Explore Unlimited Business Opportunities</h4>
                  </div>
                  <p>
                    Abdks is easy to operate and it also makes your work easier
                    and faster. We will always have a wide variety of options as
                    per your needs. You are always privileged to choose how to
                    go forward. After all, You are Important to us.
                  </p>
                </div>
              </div>

              <div className="featured-item style-3 mb-5 me-lg-7">
                <div className="featured-icon grediant-bg2">
                  <img
                    src="/assets/Home/advertisements.png"
                    width={33}
                    alt="Supportive Team"
                  />
                </div>
                <div className="featured-desc">
                  <div className="featured-title">
                    <h4>Supportive Team</h4>
                  </div>
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
      </div>
      {/* Service div */}
      <div className="service-section mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="theme-title">
                <h6 className="fz40">
                  Our Core BBPS & Fintech Services in Jaipur
                </h6>
                <p>
                  Services that we offer to our clients at a glance. We have
                  earned 7+ years of expertise in services. You just need to
                  tell us about your requirements, we will strictly take care of
                  that. You are just one click away!! Start your own business
                  with Abdks services and provide Recharge and Bill Payment
                  (BBPS) to your customers.
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
                          providers with real-time confirmation.
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
                          secure BBPS-powered platform
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
                          Pay electricity, gas, water, insurance, and broadband
                          bills through our unified BBPS system.
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
          </div>
        </div>
      </div>
      {/* review section */}
      <section className="testimonial-section bg-light py-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center mb-60">
              <h2 className="mb-3">Trusted by Retailers Across Jaipur</h2>
              <p className="lead text-muted">
                What our Jaipur retailers say about ABDKS
              </p>
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
                  transactions daily. The stage is fast, and the support team is
                  excellent."
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
                  " BBPS recharge and utility bill payment setup was so simple.
                  My customers love instant service."
                </p>
                <div className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar bg-primary-emphasis text-white rounded-circle d-flex align-items-center justify-content-center">
                      NV
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h6 className="mb-0">Neha Verma</h6>
                    <small className="text-muted">Shop Owner - Jaipur</small>
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
                  " Android app is smooth, and commission is more satisfied with
                  others. Abdks is very satisfied."
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

          {/* CTA Section */}
          <div className="row mt-60">
            <div className="col-lg-8 mx-auto text-center">
              <div className="cta-box ctajoinaciton p-5 rounded-3">
                <h3 className="text-white mb-4">
                  Start your digital BBPS Journey in Jaipur with ABDKS
                </h3>
                <p className="text-white-50 mb-4">
                  Become a part of Jaipur's Fastest growing BBPS and utility
                  bill payment network. Easily, activate fast, and start earning
                  today.
                </p>
                <button className="btn btn-light btn-lg px-5">
                  Now join as a BBPS Retailer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageContent;
