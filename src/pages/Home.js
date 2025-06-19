import React, { useContext } from "react";
import "./style/Home.css";
import PageContent from "./PageContent";
import img from "../Assets/images/HOME-BG.png";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import Context from "../components/services/context";

const Home = () => {
  const { setIsOpen } = useContext(Context);
  return (
    <>
      <section className="hero-section overflow-hidden">
        <div className="container-fluid p-0 d-flex  flex-column align-items-center">
          <div className="row align-items-center hero-content-wrapper ">
            {/* Left Side Content */}
            <div className="col-lg-7 col-md-12 text-content px-4 px-lg-5 ">
              <h1 className="hero-headline">
                India's Reliable BBPS platform for{" "}
                <span className="highlight">Recharge and bill payment</span>
              </h1>
              <p className="hero-subheadline">
                From Mobile Recharge to Electricity and Gas Bill Payment- Run
                your digital business on a safe, fast and BBPS- Authorized
                platform. Join 10,000 + Retailers Earning daily.
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
                <button
                  className="btn btn-primary cta-main"
                  onClick={() => setIsOpen(true)}
                >
                  Start your BBPS business
                  <FiArrowRight className="cta-icon" />
                </button>
                <button
                  className="btn btn-outline-secondary cta-secondary"
                  onClick={() => setIsOpen(true)}
                >
                  Be a BBPS Retail Partner
                </button>
              </div>

              <div className="trust-badge mt-4">
                <div className="trusted-by">
                  <div className="avatar-group">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="avatar">
                        {item}
                      </div>
                    ))}
                  </div>
                  <span>Trusted by 1000+ Retailers Across Rajasthan</span>
                </div>
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
      <PageContent />
    </>
  );
};

export default Home;
