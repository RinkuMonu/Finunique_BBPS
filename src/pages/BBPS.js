import React from "react";
import "./styles/bbps.css";
import img from "../Assets/images/BBPS.png";

const BBPS = () => {
  return (
    <div>
      <section className="hero-section heroaabout overflow-hidden">
        <div className="container-fluid p-0 d-flex flex-column align-items-center">
          <div className="row align-items-center hero-content-wrapper">
            {/* Left Side Content */}
            <div className="col-lg-7 col-md-12 text-content px-4 px-lg-5">
              <h1 className="hero-headline">
                <span className="highlight">BBPS</span> - Bharat Bill Payment System by Finunique
              </h1>
              <p className="hero-subheadline">
                Immediate, safe, and profitable bill payment for retailers across India
              </p>
              <p className="hero-subheadline">
                Looking for a digital business to start? Want to offer utility bill payment services in your local store? Finunique provides a fully integrated, government-official BBPS platform that enables safe and real-time bill payment across India. Made for retailers, entrepreneurs, and rural service providers, this is your opportunity to tap in India's growing digital economy.
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

      <section className="py-5 bg-light">
        <div className="container">
          {/* What is BBPS */}
          <div className="row mb-5 text-center">
            <div className="col-lg-10 mx-auto">
              <h2 className="text-primary">What is BBPS?</h2>
              <p className="lead">
                BBPS (Bharat Bill Payment System) is a centralized payment platform approved by the RBI and NPCI, offering an integrated system for all utility bill payments. With Finunique, you get direct access to the BBPS infrastructure, allowing you to distribute reliable digital services such as utility bill payment, DTH recharge, and mobile postpaid payment through the same platform.
              </p>
            </div>
          </div>

          {/* Bill Categories */}
          <div className="row mb-4">
            <div className="col-md-12">
              <h4 className="mb-3 text-warning">Bill Categories Supported on Finunique BBPS</h4>
              <div className="row gy-2">
                {[
                  "Electricity Bill Payment",
                  "Piped and LPG Gas Bills",
                  "Water Supply Bill Payment",
                  "Mobile Postpaid Bill Payment",
                  "DTH Recharge Services",
                  "Broadband and Landline Bills",
                  "Insurance Premium Payment",
                  "Loan EMI Payment",
                  "Municipal Tax & Water Bills",
                  "FASTag Recharge Services",
                ].map((item, i) => (
                  <div key={i} className="col-md-6">
                    <i className="bi bi-arrow-right-short"></i> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="row mt-5">
            <div className="col-md-12">
              <h4 className="mb-3 text-warning">Benefits of Using BBPS with Finunique</h4>
              <ul className="list-unstyled">
                <li>✔️ <strong>Instant Payment Confirmation:</strong> Every bill payment is processed in real-time and comes with a digital receipt.</li>
                <li>✔️ <strong>RBI-Compliant Secure Transactions:</strong> All payments are processed through encrypted channels and authorized by BBPS protocols.</li>
                <li>✔️ <strong>Pan India Bill Coverage:</strong> Accept and process payments from over 100 national and regional billers under BBPS.</li>
                <li>✔️ <strong>24x7 Service Availability:</strong> Services operate round-the-clock, even on weekends and public holidays.</li>
                <li>✔️ <strong>Earn Commission Per Transaction:</strong> Get paid for every successful BBPS transaction with a transparent commission system.</li>
                <li>✔️ <strong>Jaipur-Based Retailer Support:</strong> Local support team available for onboarding assistance and technical guidance.</li>
              </ul>
            </div>
          </div>

          {/* Who Can Use */}
          <div className="row mt-5">
            <div className="col-md-12">
              <h4 className="mb-3 text-warning">Who Can Use the Finunique BBPS Platform?</h4>
              <div className="row gy-2">
                {[
                  "Kirana Stores",
                  "Mobile Recharge Points",
                  "Cyber Cafés",
                  "Jan Seva Kendras (CSCs)",
                  "Utility Counters",
                  "Rural Distributors",
                  "Local Retail Shops",
                  "Digital Entrepreneurs",
                ].map((item, i) => (
                  <div key={i} className="col-md-4">📌 {item}</div>
                ))}
              </div>
            </div>
          </div>

          {/* How to Start */}
          <div className="row mt-5">
            <div className="col-md-12">
              <h4 className="mb-3">How to Start with Finunique BBPS</h4>
              <ol className="ps-3">
                <li>Register as a BBPS Retail Partner</li>
                <li>Complete KYC with PAN and Aadhaar</li>
                <li>Get active within 24 hours</li>
                <li>Start accepting utility and recharge payments immediately</li>
                <li>Track the earnings through a real-time dashboard</li>
              </ol>
            </div>
          </div>

          {/* Why Choose */}
          <div className="row mt-5 text-center">
            <div className="col-md-12">
              <h4 className="text-success mb-3">Why Choose Finunique?</h4>
              <p className="mb-1">7+ Years of Industry Legacy</p>
              <p className="mb-1">Trusted by 1000+ Retailers in Jaipur</p>
              <p className="mb-1">24x7 Multilingual Customer Support</p>
              <p className="mb-3">Fast Onboarding & Transparent Commissions</p>
            </div>
          </div>

          {/* CTA */}
          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <h5 className="mb-3">Start Your BBPS Business with Finunique</h5>
              <p>
                Join the Finunique Network and provide official, government-backed BBPS services to your customers. Whether you are in a city or village, you can create a powerful digital payment business, increase footfall, and earn a recurring commission through every transaction.
              </p>
              <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
                <a href="#" className="btn btn-primary px-4">Be BBPS Partner</a>
                <a href="#" className="btn btn-outline-secondary px-4">Talk to Our Team</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BBPS;
