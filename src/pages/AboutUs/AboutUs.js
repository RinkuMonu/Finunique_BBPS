import React from "react";
import "./AboutUs.css";
import img from "../../Assets/images/about-img.png";
import mission from "../../Assets/images/mission.png";
import vision from "../../Assets/images/vission.png";
import value from "../../Assets/images/values.png";
import ServicesSection from "../../components/sevicesSection/ServicesSection"
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
import Testinomials from "../../components/Testinomials/Testinomials";

const AboutUs = () => {
    const storyItems = [
    {
      content: "In 2024, fintech innovators Mr. Dinesh Kumar and Mr. Amit Balotia founded ABDKS Solutions Private Limited. with a bold mission: to simplify and scale BBPS-smooth digital financial services across India.",
      icon: "bi bi-lightbulb"
    },
    {
      content: "The beginning that started in Jaipur as a centered initiative has developed as a reliable platform, offering Semales Utility Bill Payments, Mobile and DTH Recharge BBPS, and Credit Card Swipe Solutions.",
      icon: "bi bi-geo-alt"
    },
    {
      content: "ABDKS is rapidly expanding in Rajasthan and beyond. Our BBPS biller recharge system, user-friendly interfaces, and fast onboarding have empowered thousands of retailers and traders to make and earn more smartly.",
      icon: "bi bi-graph-up-arrow"
    },
    {
      content: "At ABDKS, we stand for innovation, transparency, and impact. Our vision is to lead India's digital payment revolution—one BBPS transaction at a time.",
      icon: "bi bi-flag"
    }
  ];
   const values = [
    {
      icon: <FiAward style={{ color: 'var(--color-ffb200)' }} />,
      title: "Excellence",
      description: "BBPS-operated fintech solutions that set benchmarks for speed and reliability."
    },
    {
      icon: <FiUsers style={{ color: 'var(--color-ffb200)' }} />,
      title: "Collaboration",
      description: "Partnering with retailers, distributors, and stakeholders across India."
    },
    {
      icon: <FiZap style={{ color: 'var(--color-ffb200)' }} />,
      title: "Innovation",
      description: "Continuous upgrades using cutting-edge technology and automation."
    },
    {
      icon: <FiShield style={{ color: 'var(--color-ffb200)' }} />,
      title: "Integrity",
      description: "Upholding transparency and data security in every transaction."
    },
    {
      icon: <FiUser style={{ color: 'var(--color-ffb200)' }} />,
      title: "Customer Focus",
      description: "Intuitive dashboards, fast settlements, and true value creation."
    }
  ];
  const { seo } = useUser()
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
      <section className="about-section">
        <div className="about-decoration"></div>
        
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row align-items-center g-5">
            {/* Left Side Image */}
            <div className="col-lg-6 col-md-12">
              <div className="about-image-container">
                <div className="about-image-bg"></div>
                <img
                  className="about-image"
                  src="/assets/WHO WE ARE.svg"
                  alt="About ABDKS"
                />
              </div>
            </div>

            {/* Right Side Content */}
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2 className="about-title">
                  From Vision to Fintech Powerhouse—
                  <br />
                  The ABDKS Story
                </h2>

                <div className="story-content">
                  {storyItems.map((item, index) => (
                    <div key={index} className="story-item">
                      <div className="story-icon">
                        <i className={item.icon}></i>
                      </div>
                      <div className="story-text">
                        <p>
                          {item.content.split(/(<strong>.*?<\/strong>)/).map((part, i) => {
                            if (part.match(/<strong>.*?<\/strong>/)) {
                              const text = part.replace(/<\/?strong>/g, '');
                              return (
                                <strong key={i}>{text}</strong>
                              );
                            }
                            return part;
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
          <section className="vm-page">
      <div className="container">
        <div className=" g-4">
          {/* Vision Card */}
          <div className="">
            <div className="vm-card card">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="vm-icon-wrapper">
                    <img
                      src={vision}
                      alt="Vision"
                      className="img-fluid me-3"
                      style={{ width: "50px" }}
                    />
                  </div>
                  <h3 className="vm-title mb-0">Our Vision</h3>
                </div>
                <h4 className="vm-subtitle">
                  Creating a digital future that works for everyone
                </h4>
                <p className="vm-text mb-4">
                  At <strong className="vm-accent-text">ABDKS</strong>, we imagine a future where every
                  Indian retailer — from urban shopkeepers to remote consumers
                  — can access and benefit from{" "}
                  <strong className="vm-accent-text">BBPS-operated digital services</strong>.
                </p>
                <div className="vision-highlight">
                  <p className="vm-text mb-0">
                    <strong className="vm-title">Our long-term goal:</strong> By 2040, provide
                    fintech access nationwide and support India's rise as a
                    global economic leader through a scalable, BBPS-powered
                    platform.
                  </p>
                </div>
                <div className="d-flex align-items-center mt-auto pt-2">
                  <div className="vm-icon-circle" style={{ background: 'var(--color-ffb200)', marginRight: '0.5rem' }}>
                    <FiEye className="text-white" />
                  </div>
                  <small className="vm-text-light">
                    Envisioning a digitally empowered India
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="vm-card mission-card">
  <div className="card-body p-4">
    <div className="d-flex align-items-center mb-3">
      <div className="vm-icon-wrapper mission-icon-wrapper">
        <img
          src={mission}
          alt="Mission"
          className="img-fluid"
          style={{ width: "40px" }}
        />
      </div>
      <h3 className="vm-title mb-0">Our Mission</h3>
    </div>
    <h4 className="vm-subtitle">
      Empowering businesses with BBPS-operated Technology
    </h4>
    <p className="vm-text mb-4">
      Our mission is to provide a strong, reliable, and
      transparent <strong className="vm-accent-text">BBPS recharge platform</strong> that
      empowers Indian retailers, shop owners, and local traders.
    </p>
    <ul className="mission-list">
      <li className="d-flex align-items-start">
        <FiCheckCircle className="icon me-2 mt-1 flex-shrink-0" />
        <span>Mobile BBPS recharge solutions</span>
      </li>
      <li className="d-flex align-items-start">
        <FiCheckCircle className="icon me-2 mt-1 flex-shrink-0" />
        <span>Utility bill payment infrastructure</span>
      </li>
      <li className="d-flex align-items-start">
        <FiCheckCircle className="icon me-2 mt-1 flex-shrink-0" />
        <span>Safe credit transactions platform</span>
      </li>
    </ul>
    <div className="d-flex align-items-center mt-3 pt-2">
      <div className="vm-icon-circle me-2">
        <FiTarget />
      </div>
      <small className="vm-muted-text">Driving India's digital revolution</small>
    </div>
  </div>
</div>

          {/* Values Card */}
          <div className="">
            <div className="vm-card card">
              <div className="card-body p-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="vm-icon-wrapper">
                   <img
                      src={value}
                      alt="Values"
                      className="img-fluid me-3"
                      style={{ width: "40px" }}
                    />
                  </div>
                  <h3 className="vm-title mb-0">Our Core Values</h3>
                </div>
                <h4 className="vm-subtitle">
                  The principles that power ABDKS
                </h4>

                <div className="d-grid">
                  {values.map((value, index) => (
                    <div key={index} className="value-item">
                      <div className="value-icon-wrapper">
                        {value.icon}
                      </div>
                      <div>
                        <h6 className="vm-title mb-1">{value.title}</h6>
                        <p className="small vm-text mb-0">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <ServicesSection years={3} heading=" Services " />
        <Testinomials />
      </div>
    </>
  );
};
export default AboutUs;
