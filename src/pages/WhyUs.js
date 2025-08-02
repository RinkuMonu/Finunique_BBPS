import React from "react";
import "./styles/whyUs.css";
import img from "../Assets/images/why-choose-us.png";
import {
  FiCheckCircle,
  FiShield,
  FiPieChart,
  FiUser,
  FiDollarSign,
  FiClock,
  FiAward,
  FiGlobe,
  FiTrendingUp,
  FiZap,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "../components/SEO/SEO";
import { useUser } from "../context/UserContext";

const WhyUs = () => {
  const { seo } = useUser();

  const features = [
    {
      icon: <FiPieChart className=""/>,
      title: "Comprehensive Service Suite",
      desc: "One platform for BBPS billers, recharge, credit card payments, micro ATM & more.",
    },
    {
      icon: <FiShield />,
      title: "Robust Security",
      desc: "Advanced encryption & fraud prevention, ensuring every transaction is secure.",
    },
    {
      icon: <FiUser />,
      title: "Retailer Friendly",
      desc: "Simple, intuitive dashboards designed for both beginners & experienced retailers.",
    },
    {
      icon: <FiClock />,
      title: "24/7 Partner Support",
      desc: "Round-the-clock multilingual assistance for smooth onboarding & operations.",
    },
    {
      icon: <FiDollarSign />,
      title: "Transparent Commissions",
      desc: "Competitive, real-time margins so you can grow confidently.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Rapid Growth Opportunities",
      desc: "Expand your reach and join our growing network across India.",
    },
  ];

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
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-fill"
          >
            <h1 className="display-5 fw-bold mb-3 hero-heading">
              India's Most Trusted <span className="highlight">BBPS Platform</span>
            </h1>
            <p className="lead text-black mb-4">
              Recharge mobile, DTH & pay all your bills in one secure, scalable platform.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/createaccount">
                <button className="btn btn-primary cta-main">Get Started</button>
              </Link>
              <Link to="/AboutUs">
                <button className="btn border-radius btn-outline-secondary  cta-secondary">Learn More</button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-fill text-center"
          >
            <img src={img} alt="BBPS Platform" className="img-fluid rounded" style={{ maxHeight: 400 }} />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <span className="badge">
              <FiAward className="me-2" /> Trusted Platform
            </span>
            <h2>Why Choose ABDKS?</h2>
            <p className="subtitle">
              Empowering India's digital finance ecosystem with reliable, secure, and scalable BBPS solutions.
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                className="feature-card"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="feature-icon-container accordion-icon">
                  {feature.icon}
                </div>
                <span  className="highlight fs-5 fw-bold">{feature.title}</span>
                <p>{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
     <section className="stats-section">
  <div className="container">
    <div className="stats-grid">
      {[
        { icon: <FiZap className="stat-icon" />, value: "10M+", label: "Transactions" },
        { icon: <FiUser className="stat-icon" />, value: "50K+", label: "Retail Partners" },
        { icon: <FiGlobe className="stat-icon" />, value: "500+", label: "Cities" },
        { icon: <FiCheckCircle className="stat-icon" />, value: "99.9%", label: "Success Rate" },
      ].map((stat, index) => (
        <motion.div
          className="stat-card"
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="icon-wrapper">{stat.icon}</div>
          <motion.h3 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          >
            {stat.value}
          </motion.h3>
          <p>{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Commitment Section */}
      <section className="commitment-section">
        <div className="container">
          <motion.div
            className="commitment-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="commitment-icon">
              <FiAward />
            </div>
            <h2>Our Commitment to BBPS Excellence</h2>
            <p>
              Since 2024, ABDKS has been dedicated to democratizing access to BBPS-integrated services. With a focus on reliability, speed, and partner growth, we're the preferred choice for both local retailers and national distributors.
            </p>
            <div className="badges-container">
              <span className="badge"><FiShield className="me-1" /> RBI Compliant</span>
              <span className="badge"><FiCheckCircle className="me-1" /> BBPS Certified</span>
              <span className="badge"><FiZap className="me-1" /> Fast Settlements</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
<div className="cta-premium-banner py-5 position-relative overflow-hidden">
  {/* Floating particles */}
  <div className="particle particle-1"></div>
  <div className="particle particle-2"></div>
  <div className="particle particle-3"></div>

  {/* Glow effect */}
  <div className="cta-glow"></div>

  {/* Main content */}
  <div className="position-relative z-3 text-center px-3">
    <h3 className="display-5 fw-bold mb-4 text-gradient">
      Join the <span className="text-primary">ABDKS</span> Network Today
    </h3>

    <p className="lead mb-5 opacity-75">
      Deliver secure, fast, and profitable financial services.<br />
      Empower your customers with every transaction.
    </p>

    <div className="d-md-flex gap-3 justify-content-center">
      <Link
        to="/createaccount"
        className="btn btn-premium btn-lg px-5 py-3 fw-bold shadow-hover border-radius"
      >
        <span className="btn-content">
          Become a BBPS Partner
        </span>
        <span className="btn-glow"></span>
      </Link>
      <Link
        to="/ContactUs"
        className="btn border-radius btn-outline-secondary d-flex align-items-center cta-secondary"
      >
        
          Contact Our Team
       
      </Link>
    </div>
  </div>
</div>

    </>
  );
};

export default WhyUs;
