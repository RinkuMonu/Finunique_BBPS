import React from "react";
import "./styles/ourpartner.css";
import img from "../Assets//images/partners.png";
import { FiCheckCircle } from "react-icons/fi";

const OurPartener = () => {
  const reasonsToPartner = [
    "Earn recurring income from every financial transaction",
    "Easy setup — just a smartphone and internet connection",
    "RBI and NPCI-regulated BBPS & AEPS platform",
    "Smart dashboard to track earnings and transactions",
    "24x7 support from our Jaipur-based team",
  ];

  const whoCanJoin = [
    "Retail shop owners",
    "Cyber Café Operators",
    "Public Service Center Agents",
    "Kirana & Grocery Shops",
    "Recharge and Mobile Shops",
    "Small Business Owners",
    "First-Time Entrepreneurs",
    "Village-level NGOs & Rural Service Centers",
  ];

  const servicesOffered = [
    "Mobile Recharge & Postpaid Bill Payment",
    "DTH Recharge (BBPS Platform)",
    "BBPS Utility Bill Payments",
    "Credit Card Bill Collection",
    "AEPS Services",
    "Micro ATM Services",
    "PAN Card Application & Correction",
    "Life, Health, and General Insurance Services",
  ];

  const partnershipModels = [
    {
      title: "Retail Partner",
      description:
        "Offer services directly to end users and earn commission on every transaction.",
    },
    {
      title: "Distributor",
      description:
        "Build your own network of ABDKS retailers and earn on each of their transactions.",
    },
    {
      title: "API Partner",
      description:
        "Integrate ABDKS BBPS and AEPS services into your own app or platform.",
    },
  ];

  return (
    <div>
      <section className="hero-section heroaabout overflow-hidden">
        <div className="container-fluid p-0 d-flex flex-column align-items-center">
          <div className="row align-items-center hero-content-wrapper">
            <div className="col-lg-7 col-md-12 text-content px-4 px-lg-5">
              <h1 className="hero-headline">
                Together, we are building India's{" "}
                <span className="highlight">digital future</span>
              </h1>
              <p className="hero-subheadline">
                One platform for mobile recharges, bill payments, card
                transactions – powered by BBPS. From local shopkeepers in Jaipur
                to distributors across Rajasthan, our success is driven by
                thousands of committed entrepreneurs.
              </p>
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

      <section className="partner-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Partner with{" "}
              <span
                className="fw-bolder highlight"
                style={{
                  color: "rgb(238, 162, 20)",
                }}
              >
                ABDKS Solutions Private Ltd.
              </span>
            </h2>
            <p className="text-muted lead">
              Empowering thousands of retailers and distributors to deliver
              BBPS, AEPS, and digital services across India.
            </p>
          </div>

          <div className="row">
            <div className="col-md-6 mb-4">
              <h4>Why Partner with ABDKS?</h4>
              <p className="text-muted mb-2">
                We believe in partnerships that create long-term value, build
                faith, and bring digital empowerment to the last mile.
              </p>
              <ul className="list-unstyled">
                {reasonsToPartner.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-start mb-2">
                    <FiCheckCircle className="me-2 text-success mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-6 mb-4">
              <h4>Who Can Become a Partner?</h4>
              <ul className="list-unstyled">
                {whoCanJoin.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-start mb-2">
                    <FiCheckCircle className="me-2 text-success mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12">
              <h4 className="mb-3">
                What Services Can You Offer as Our Partner?
              </h4>
              <p className="text-muted mb-3">
                All services can be accessed via our unified platform or mobile dashboard.
              </p>
              <div className="row">
                {servicesOffered.map((service, idx) => (
                  <div
                    key={idx}
                    className="col-md-6 mb-2 d-flex align-items-start"
                  >
                    <FiCheckCircle className="me-2 text-primary mt-1" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="row mb-3">
            <h4 className="mb-4">Partnership Models Available</h4>
            <p className="text-muted mb-4">
              Whether you're a retailer, distributor, or a platform looking to integrate services, we have a model for you.
            </p>
            {partnershipModels.map((model, idx) => (
              <div key={idx} className="col-md-4 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{model.title}</h5>
                    <p className="card-text">{model.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-center mb-4">Our Banking & Financial Partners</h4>
          <p className="text-center text-muted mb-5">
            Powering trust, compliance & nationwide access through partnerships with India’s top banks and financial service providers.
          </p>

          <div className="page-content partner-logo">
            <section className="pb-0 partner">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-4 col-sm-6 mt-5 ps-lg-4">
                    <img
                      src="images/axis-bank.jpg"
                      alt="axis"
                      className="rounded img-fluid bankpartner"
                    />
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mt-5 ps-lg-4">
                    <img
                      src="images/federral.png"
                      alt="federral"
                      className="rounded img-fluid bankpartner"
                    />
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mt-5 ps-lg-4">
                    <img
                      src="images/HDFC.png"
                      alt="HDFC"
                      className="rounded img-fluid bankpartner"
                    />
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mt-5 ps-lg-4">
                    <img
                      src="images/ICICI.jpg"
                      alt="ICICI"
                      className="rounded img-fluid bankpartner"
                    />
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mt-5 ps-lg-4">
                    <img
                      src="images/paytm-logo.png"
                      alt="paytm"
                      className="rounded img-fluid bankpartner"
                    />
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mt-5 ps-lg-4">
                    <img
                      src="images/yes-bank.png"
                      alt="yes"
                      className="rounded img-fluid bankpartner"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="text-center mt-5">
            <p className="fw-bold mb-3">
              We are already connected to 1000+ active retailers and distributors across Rajasthan and expanding every day. Whether you're launching your first fintech venture or scaling an existing business, ABDKS is your gateway to the digital revolution powered by BBPS.
            </p>
            <div className="partnerbtnjoin">
              <button className="btn btn-primary me-3">
                Join as a Retail Partner
              </button>
              <button className="btn btn-outline-secondary">
                Apply as a Distributor
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPartener;
