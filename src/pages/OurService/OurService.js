import React from "react";
import ServiceItem from "./ServiceItem";
import "./OurService.css";
import img from "../../Assets/images/services.png";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import { useUser } from "../../context/UserContext";
import { motion } from "framer-motion";

function OurService() {
  const { seo } = useUser();

  const services = [
    {
      imgSrc: "/assets/BBPS.png",
      title: "Bharat Bill Payment System (BBPS)",
      description: "Enable real-time bill payments securely with NPCI-approved BBPS platform.",
      features: [
        "Electricity bills", "Water supply", "Gas bills", "Broadband & landline", "Insurance premium", "EMI collection", "Municipal taxes", "Fastag recharge"
      ],
    },
    {
      imgSrc: "/assets/DTH.png",
      title: "Mobile & DTH Recharges",
      description: "Offer seamless prepaid & postpaid mobile recharges plus DTH services via BBPS.",
      features: ["Prepaid recharge", "Postpaid bill payment", "DTH recharge"],
    },
    {
      imgSrc: "/assets/Utility.png",
      title: "Credit Card Payments",
      description: "Accept credit card payments safely through integrated payment gateway solutions.",
      features: ["Real-time processing", "Fraud protection", "Digital receipts"],
    },
    {
      imgSrc: "/assets/Mobile.png",
      title: "Micro ATM Services",
      description: "Enable banking services in low-access areas via micro ATMs.",
      features: ["Cash withdrawal", "Balance inquiry", "Mini statement"],
    },
    {
      imgSrc: "/assets/Utility.png",
      title: "Aadhaar Enabled Payment System (AEPS)",
      description: "Provide secure Aadhaar-based transactions without debit cards or internet.",
      features: ["Withdrawals", "Balance checks", "Fund transfers"],
    },
    {
      imgSrc: "/assets/Utility.png",
      title: "PAN Card Services",
      description: "Help customers with new PAN applications or updates, paperless and fast.",
      features: ["Paperless applications", "Status tracking", "Full support"],
    },
    {
      imgSrc: "/assets/Utility.png",
      title: "Insurance Services",
      description: "Partner with insurers to offer health, motor, and general insurance schemes.",
      features: ["Life insurance", "Health plans", "Motor insurance"],
    },
    {
      imgSrc: "/assets/Mobile.png",
      title: "Credit Services",
      description: "Enable customers to apply for various loans directly from your platform.",
      features: ["Personal loans", "Business loans", "Home loans"],
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
      <section
        className="hero-section text-white"
        // style={{ background: "linear-gradient(135deg, #ffb300, #ff6f00)" }}
      >
        <div className="container py-5 d-flex flex-column flex-lg-row align-items-center  justify-content-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-fill"
          >
            <h1 className=" text-black fw-bold mb-3 hero-headline">
              Driving India's Digital Future with <span className="highlight">BBPS Innovation</span>
            </h1>
            <p className="lead text-black mb-4">
              One platform for mobile recharges, bill payments, and card transactions — all powered securely by BBPS.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/billpayment">
                <button className="btn btn-primary btn-md text-dark fw-semibold">
                  Explore BBPS Services <FiArrowRight className="ms-1" />
                </button>
              </Link>
              <Link to="/createaccount?role=Retailer"
                className="btn border-radius btn-outline-secondary cta-secondary">Join as Retailer
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-fill text-center"
          >
            <img src={img} alt="Retail Partner" className="img-fluid rounded " style={{ maxHeight: 500, width: 500,  }} />
          </motion.div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="py-5 bg-light">
  <div className="container">
    <div className="row justify-content-center text-center mb-5">
      <div className="col-lg-10">
        <motion.h2
          className="fw-bold mb-3 display-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Empower India's Digital Transactions with <span className="text-warning">Finunique</span>
        </motion.h2>
        <p className="lead text-muted mb-0">
          We offer a robust suite of BBPS-based and digital financial services to help retailers and customers transact securely, confidently, and seamlessly across India.
        </p>
      </div>
    </div>

    <div className="row g-4">
      {services.map((service, index) => (
        <motion.div
          className="col-sm-6 col-lg-4"
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="service-card h-100 d-flex flex-column">
            <div className="service-card-img-wrapper">
              <img
                src={service.imgSrc}
                alt={service.title}
                className="img-fluid service-card-img"
              />
            </div>
            <div className="p-4 d-flex flex-column flex-grow-1">
              <h5 className="fw-bold mb-2">{service.title}</h5>
              <p className="text-muted flex-grow-1">{service.description}</p>
              <ul className="list-unstyled mb-3">
                {service.features.slice(0, 3).map((feat, i) => (
                  <li key={i}>
                    <FiCheckCircle className="me-1 text-success" /> {feat}
                  </li>
                ))}
              </ul>
              <Link to="/billpayment" className="btn btn-outline-warning btn-sm mt-auto fw-semibold">
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}

export default OurService;
