import React from "react";
import ServiceItem from "./ServiceItem";
import "./OurService.css";
import img from "../../Assets/images/services.png";
import { FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import SEO from "../../components/SEO/SEO";
import { useUser } from "../../context/UserContext";

function OurService() {
  const {seo} = useUser()
  const services = [
    {
      imgSrc: "/assets/BBPS.png",
      title: "Bharat Bill Payment System (BBPS)",
      description:
        "Enable your customers to pay bills in real time with our safe, NPCI-demonstrated BBPS recharge system.",
      features: [
        "Electricity bill",
        "Water supply bill",
        "Gas (PNG/LPG) bill",
        "Broadband and landline bill",
        "Insurance premium payment",
        "Loan EMI collection",
        "Municipal tax payment",
        "Fastag recharge",
      ],
    },
    {
      imgSrc: "/assets/DTH.png",
      title: "Mobile & DTH recharge services",
      description:
        "Provide prepaid and postpaid mobile recharge and DTH services in all major networks through our fast BBPS-supported backend.",
      features: [
        "Prepaid mobile recharge",
        "Postage bill payment",
        "DTH Recharge BBPS",
      ],
    },
    {
      imgSrc: "/assets/Utility.png",
      title: "Credit card payment Acceptance",
      description:
        "Accept the credit card payment from customers safely through our integrated payment gateway.",
      features: [
        "Real time payment processing",
        "End-to-end encryption & fraud protection",
        "Digital receipts & transactions report",
      ],
    },
    {
      imgSrc: "/assets/Mobile.png",
      title: "Micro ATM Services",
      description:
        "With our micro ATM solutions, distribute banking services to low financial access areas.",
      features: ["Cash withdrawal", "Balance inquiry", "Mini statement"],
    },
    {
      imgSrc: "/assets/Utility.png",
      title: "Aadhaar Enabled Payment System (AEPS)",
      description:
        "Use AEPS authentication to provide secure transactions to users without debit cards or internet access.",
      features: [
        "Aadhaar-Based Withdrawals",
        "Balance Checks",
        "Interbank Fund Transfers",
      ],
    },
    {
      imgSrc: "/assets/Utility.png",
      title: "PAN Card Services",
      description:
        "Help customers with new PAN card applications or corrections.",
      features: [
        "Paperless PAN Card Applications",
        "Status Tracking and Support",
        "Full Customer Assistance from Start to Finish",
      ],
    },
    {
      imgSrc: "/assets/Utility.png",
      title: "Insurance services",
      description:
        "Participate with top insurers to offer several schemes from your local store.",
      features: [
        "Insurance",
        "Health insurance",
        "Motor and general insurance",
      ],
    },
    {
      imgSrc: "/assets/Mobile.png",
      title: "Credit services",
      description:
        "Enable your customers to apply for a loan directly from your platform.",
      features: ["Individual debt", "Trade loan", "Home loan"],
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
      <section className="hero-section heroaabout overflow-hidden">
        <div className="container-fluid p-0 d-flex flex-column align-items-center">
          <div className="row align-items-center hero-content-wrapper">
            <div className="col-lg-7 col-md-12 text-content px-4 px-lg-5">
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

              <div className="cta-buttons">
                <Link className="btn btn-primary cta-main" to="/ContactUs">
                  Explore Our BBPS Services
                  <FiArrowRight className="cta-icon" />
                </Link>
                <Link className="btn btn-outline-secondary cta-secondary" to="/createaccount">
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

      {/* Service Overview Section */}
      <section className="page-content text-col marginTop">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8 col-md-12">
              <div className="theme-title">
                <h2 className="fw-400">
                  Empower digital transactions across India at{" "}
                  <span>ABDKS Solutions Private Ltd.</span>
                  <br />
                  We offer a comprehensive suite of BBPS-based and digital
                  financial services designed to streamline daily transactions
                  for retailers, distributors, and customers across India. Our
                  platform is safe, scalable, and designed for India's digital
                  economy's development needs.
                </h2>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="row gy-5">
            {services.map((service, index) => (
              <ServiceItem
                key={index}
                imgSrc={service.imgSrc}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default OurService;
