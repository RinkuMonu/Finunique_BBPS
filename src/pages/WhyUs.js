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

const WhyUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      icon: <FiPieChart className="feature-icon-lg" />,
      title: "Comprehensive BBPS Service Suite",
      desc: "From BBPS biller recharge systems to mobile and DTH recharge, credit card payments, and micro ATM services — ABDKS offers a single-window platform.",
    },
    {
      icon: <FiShield className="feature-icon-lg" />,
      title: "Strong & Safe Transaction Infrastructure",
      desc: "Security is at our core with robust encryption, enabling fraud prevention and real-time processing for all transactions.",
    },
    {
      icon: <FiUser className="feature-icon-lg" />,
      title: "Easy-to-use BBPS Retailer Dashboard",
      desc: "Intuitive dashboard built for both first-time users and experienced retailers, ensuring smooth workflow and easy tracking.",
    },
    {
      icon: <FiClock className="feature-icon-lg" />,
      title: "24x7 Support for BBPS & Retail Partners",
      desc: "Multilingual support team available round the clock to help with onboarding and transaction queries.",
    },
    {
      icon: <FiDollarSign className="feature-icon-lg" />,
      title: "Transparent & Competitive Commissions",
      desc: "Earn generous margins with real-time commissions and on-time payments to grow your business confidently.",
    },
    {
      icon: <FiTrendingUp className="feature-icon-lg" />,
      title: "Growing Network & Opportunities",
      desc: "Join our expanding network of partners and benefit from increasing transaction volumes and new services.",
    },
  ];

  return (
    <div className="why-us-page">
      {/* Hero Section */}
      <section className="hero-section hero-about overflow-hidden">
        <div className="container-fluid p-0 d-flex flex-column align-items-center">
          <div className="row align-items-center hero-content-wrapper">
            {/* Left Side Content */}
            <div className="col-lg-7 col-md-12 text-content px-4 px-lg-5">
              <motion.h1
                className="hero-headline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                India's Most Trusted{" "}
                <span className="highlight">BBPS Platform</span> for All Bill
                Payments
              </motion.h1>

              <motion.p
                className="hero-subheadline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Recharge mobile, DTH & pay electricity, gas, credit card bills –
                all in one secure platform
              </motion.p>

              <motion.div
                className="hero-features mb-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                  hidden: { opacity: 0 },
                }}
              >
                <motion.div className="feature-item" variants={fadeIn}>
                  <FiCheckCircle className="feature-icon" />
                  <span>Zero Maintenance Fees</span>
                </motion.div>
                <motion.div className="feature-item" variants={fadeIn}>
                  <FiCheckCircle className="feature-icon" />
                  <span>Instant Settlements</span>
                </motion.div>
                <motion.div className="feature-item" variants={fadeIn}>
                  <FiCheckCircle className="feature-icon" />
                  <span>24/7 Support</span>
                </motion.div>
                <motion.div className="feature-item" variants={fadeIn}>
                  <FiCheckCircle className="feature-icon" />
                  <span>99.9% Uptime</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link to="/createaccount">
                  <button className="btn text-warning-emphasis bg-body-secondary btn-lg me-3">
                    Get Started Now
                  </button>
                </Link>
                <Link to="/ContactUs">
                  <button className="btn bg-body-secondary btn-lg">
                    Learn More
                  </button>
                </Link>
              </motion.div>
            </div>
            <div className="col-lg-5 col-md-12 image-content hero-image-container">
              <motion.img
                src={img}
                alt="BBPS Platform"
                className="img-fluid hero-image"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-5 bg-light position-relative">
        <div className="container position-relative z-index-1">
          {/* Heading */}
          <div className="row mb-5 text-center">
            <div className="col-lg-10 mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="badge bg-warning text-dark mb-3">
                  <FiAward className="me-2" /> Trusted Platform
                </span>
                <h2 className="text-gradient mb-3">Why Choose ABDKS?</h2>
                <p className="lead text-muted">
                  Empowering India's BBPS-Integrated Digital Payment Ecosystem
                </p>
                <div className="divider mx-auto"></div>
                <p className="text-muted">
                  At <strong>ABDKS Solutions Private Ltd.</strong>, we are
                  transforming the digital finance landscape with safe,
                  scalable, and user-friendly BBPS recharge solutions. From
                  mobile recharges to utility bill collections, our goal is to
                  serve retailers, distributors, and customers across India
                  through reliable fintech infrastructure and smart automation.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Unique Value Propositions */}
          <div className="row gy-4">
            {features.map((feature, index) => (
              <motion.div
                className="col-md-6 col-lg-4"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-card p-4 h-100">
                  <div className="icon-wrapper mb-3">{feature.icon}</div>
                  <h5 className="mb-3">
                    <strong>{feature.title}</strong>
                  </h5>
                  <p className="text-muted">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row text-center">
            <motion.div
              className="col-md-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="stat-item">
                <FiZap className="stat-icon" />
                <h3 className="stat-value">10M+</h3>
                <p className="stat-label">Transactions</p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="stat-item">
                <FiUser className="stat-icon" />
                <h3 className="stat-value">50K+</h3>
                <p className="stat-label">Retail Partners</p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="stat-item">
                <FiGlobe className="stat-icon" />
                <h3 className="stat-value">500+</h3>
                <p className="stat-label">Cities</p>
              </div>
            </motion.div>
            <motion.div
              className="col-md-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="stat-item">
                <FiCheckCircle className="stat-icon" />
                <h3 className="stat-value">99.9%</h3>
                <p className="stat-label">Success Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <motion.div
                className="commitment-card p-4 p-lg-5 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="icon-wrapper-lg mb-4">
                  <FiAward className="icon-lg" />
                </div>
                <h4 className="mb-3 text-gradient">
                  Our Commitment to BBPS Excellence
                </h4>
                <p className="text-muted mb-4">
                  Since our launch in 2024, <strong>ABDKS</strong> has been
                  committed to democratizing access to BBPS-operated digital
                  services across India. Focusing on speed, innovation, and a
                  partner-first approach, we are a trusted choice for both small
                  retailers and national distributors.
                </p>
                <div className="trust-badges d-flex justify-content-center flex-wrap gap-3">
                  <span className="badge bg-light text-dark">
                    <FiShield className="me-2" /> RBI Compliant
                  </span>
                  <span className="badge bg-light text-dark">
                    <FiCheckCircle className="me-2" /> BBPS Certified
                  </span>
                  <span className="badge bg-light text-dark">
                    <FiZap className="me-2" /> Fast Settlements
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-4">Join the ABDKS Network Today</h2>
                <p className="lead text-muted mb-5">
                  Be a part of India's BBPS digital revolution. Partner with
                  ABDKS today to deliver secure, fast, and profitable financial
                  services — and empower your customers with every transaction.
                </p>
                <div className="d-flex justify-content-center flex-wrap gap-3">
                  <Link to="/createaccount">
                    <button className="btn btn-primary btn-lg px-4">
                      Become a BBPS Partner
                    </button>
                  </Link>
                  <Link to="/ContactUs">
                    <button className="btn btn-outline-secondary btn-lg px-4">
                      Contact Our Team
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
