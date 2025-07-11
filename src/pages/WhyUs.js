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
      icon: <FiPieChart />,
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
      <section className="hero-section text-white">
        <div className="container py-5 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-fill"
          >
            <h1 className="display-5 fw-bold mb-3">
              India's Most Trusted <span className="text-warning">BBPS Platform</span>
            </h1>
            <p className="lead text-black mb-4">
              Recharge mobile, DTH & pay all your bills in one secure, scalable platform.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/createaccount">
                <button className="btn btn-warning btn-md px-3">Get Started</button>
              </Link>
              <Link to="/ContactUs">
                <button className="btn btn-outline-light border text-black btn-md px-3">Learn More</button>
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
      <section className="py-5 bg-light">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge bg-warning text-dark mb-2">
              <FiAward className="me-2" /> Trusted Platform
            </span>
            <h2 className="fw-bold mb-3">Why Choose ABDKS?</h2>
            <p className="text-muted mb-4">
              Empowering India's digital finance ecosystem with reliable, secure, and scalable BBPS solutions.
            </p>
          </motion.div>

          <div className="row mt-4 g-4">
            {features.map((feature, index) => (
              <motion.div
                className="col-sm-6 col-lg-4"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-4 bg-white shadow-sm rounded h-100 d-flex flex-column align-items-center text-center">
                  <div className="fs-2 text-primary mb-3">{feature.icon}</div>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="text-muted">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 text-white" style={{background: "linear-gradient(135deg, rgb(255, 179, 0), rgb(255 111 0 / 60%))" }}>
        <div className="container">
          <div className="row text-center g-4">
            {[
              { icon: <FiZap />, value: "10M+", label: "Transactions" },
              { icon: <FiUser />, value: "50K+", label: "Retail Partners" },
              { icon: <FiGlobe />, value: "500+", label: "Cities" },
              { icon: <FiCheckCircle />, value: "99.9%", label: "Success Rate" },
            ].map((stat, index) => (
              <motion.div
                className="col-6 col-md-3"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="py-3">
                  <div className="fs-1 mb-2">{stat.icon}</div>
                  <h3 className="fw-bold text-black mb-1">{stat.value}</h3>
                  <p className="mb-0">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <motion.div
            className="mx-auto"
            style={{ maxWidth: 700 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="fs-1 text-warning mb-3"><FiAward /></div>
            <h3 className="fw-bold mb-3">Our Commitment to BBPS Excellence</h3>
            <p className="text-muted mb-4">
              Since 2024, ABDKS has been dedicated to democratizing access to BBPS-integrated services. With a focus on reliability, speed, and partner growth, we’re the preferred choice for both local retailers and national distributors.
            </p>
            <div className="d-flex justify-content-center flex-wrap gap-2">
              <span className="badge bg-light text-dark"><FiShield className="me-1" /> RBI Compliant</span>
              <span className="badge bg-light text-dark"><FiCheckCircle className="me-1" /> BBPS Certified</span>
              <span className="badge bg-light text-dark"><FiZap className="me-1" /> Fast Settlements</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
  className="py-5 text-white"
  style={{
    background: "linear-gradient(135deg, rgb(255, 179, 0), rgb(255 111 0 / 60%))",
  }}
>
  <div className="container text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="fw-bold mb-3 text-black display-5">Join the ABDKS Network Today</h2>
      <p className="lead mb-4" style={{ maxWidth: "700px", margin: "0 auto" }}>
        Deliver secure, fast, and profitable financial services. Empower your customers with every transaction.
      </p>
      <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
        <Link to="/createaccount">
          <button
            className="btn btn-light btn-md border-0 px-4 py-2"
            style={{
              color: "#ff6f00",
              fontWeight: "600",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.background = "#fff3cd";
              e.target.style.color = "#ff6f00";
            }}
            onMouseOut={(e) => {
              e.target.style.background = "#ffffff";
              e.target.style.color = "#ff6f00";
            }}
          >
            Become a BBPS Partner
          </button>
        </Link>
        <Link to="/ContactUs">
          <button
            className="btn btn-outline-light btn-md px-4 py-2"
            style={{
              fontWeight: "600",
              borderWidth: "2px",
              transition: "all 0.3s ease",
            }}
          >
            Contact Our Team
          </button>
        </Link>
      </div>
    </motion.div>
  </div>
</section>

    </>
  );
};

export default WhyUs;
