import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "./ServiceSection.css";

const ServicesSection = ({ years, heading }) => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-grid">
          <div className="services-intro-wrapper">
            <div className="section-header1">
              <h2>{heading}</h2>
              <p>
                Services that we offer to our clients at a glance. We have
                earned {years}+ years of expertise in services. You just need to
                tell us about your requirements, we will strictly take care of
                that. You are just one click away!! Start your own business
                with Finunique services and provide Recharge and Bill Payment
                (BBPS) to your customers.
              </p>
            </div>
            <div className="d-flex justify-content-center">
              <img
                className="services-img-side"
                src="/assets/Home/SERVICE2.png"
                alt="Our Services"
              />
            </div>
          </div>
          <div className="services-list-wrapper">
            <div className="service-card">
              <div className="service-icon">
                <img
                  src="/assets/Home/electricity-bill.svg"
                  width="45"
                  alt="electricity"
                />
              </div>
              <div className="service-content">
                <h4>Prepaid & Postpaid Recharge BBPS</h4>
                <p>
                  Fast mobile recharge solutions for all telecom providers
                  with real-time confirmation.
                </p>
              </div>
              <Link className="arrow-link" to="/BBPS">
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="service-card active">
              <div className="service-icon">
                <img
                  src="/assets/Home/water-bill.svg"
                  width="45"
                  alt="pay-utility"
                />
              </div>
              <div className="service-content">
                <h4>DTH Recharge BBPS Platform</h4>
                <p>
                  Recharge all major DTH services instantly using our secure
                  BBPS-powered platform
                </p>
              </div>
              <Link className="arrow-link" to="/recharge">
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <img src="/assets/Home/bbps.svg" width="40" alt="bbps1" />
              </div>
              <div className="service-content">
                <h4>BBPS Utility Bill Payments in Rajasthan</h4>
                <p>
                  Pay electricity, gas, water, insurance, and broadband bills
                  through our unified BBPS system.
                </p>
              </div>
              <Link className="arrow-link" to="/recharge">
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="service-card view-more">
              <Link to="/Services">
                <div className="view-more-icon">
                  <i className="bi bi-plus-lg"></i>
                </div>
                <h4>View More Services</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ServicesSection.propTypes = {
  years: PropTypes.number.isRequired,
  experience: PropTypes.string.isRequired
};

ServicesSection.defaultProps = {
  years: 7,
  experience: 'services'
};

export default ServicesSection;