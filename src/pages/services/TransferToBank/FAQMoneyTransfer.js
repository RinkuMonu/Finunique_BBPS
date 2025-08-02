import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const FAQMoneyTransfer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const content = [
    {
      title: "About Domestic Money Transfer via ABDKS",
      body: (
        <>
          <p>
            ABDKS Solutions Private Ltd. offers a robust, bank-grade platform for secure online domestic money transfers. Whether you're transferring funds to a friend, sending money home, or helping customers with bank transactions as a retailer, ABDKS enables real-time money transfers to any bank account in India.
          </p>
          <p>
            Our service is designed for both individual users and digital agents looking to provide value-added financial services at scale.
          </p>
        </>
      ),
    },
    {
      title: "Key Features",
      body: (
        <>
          <ul>
            <li><strong>Instant Fund Transfer</strong> – Real-time settlement to any Indian bank</li>
            <li><strong>Supports All Banks</strong> – Compatible with IMPS, NEFT, and UPI rails</li>
            <li><strong>Aadhaar-Based Transfers</strong> – AEPS-enabled transfers for rural inclusion</li>
            <li><strong>24x7 Availability</strong> – Transfer money anytime, including weekends & holidays</li>
            <li><strong>Retailer Dashboard</strong> – Simple, secure, and accessible even from mobile devices</li>
            <li><strong>High Transaction Success Rate</strong> – Industry-leading uptime and confirmation rate</li>
          </ul>
        </>
      ),
    },
    {
      title: "How to Send Money Online via ABDKS",
      body: (
        <>
          <ul>
            <li>Log in to your ABDKS dashboard or mobile app</li>
            <li>Navigate to Money Transfer / DMT section</li>
            <li>Enter the recipient’s name, bank account number, and IFSC code</li>
            <li>Enter the amount to be transferred</li>
            <li>Choose your preferred transfer method: IMPS, NEFT, or UPI</li>
            <li>Confirm payment using your ABDKS wallet balance or linked payment method</li>
            <li>Receive instant confirmation and transaction ID</li>
          </ul>
        </>
      ),
    },
    {
      title: "Who Can Use This Service?",
      body: (
        <>
          <ul>
            <li>Individuals looking to send money to family or friends</li>
            <li>Migrant workers sending remittances</li>
            <li>Small business owners paying vendors or employees</li>
            <li>Retailers offering cash-to-bank services</li>
            <li>Jan Seva Kendra & CSC operators</li>
            <li>Financial service providers in rural areas</li>
          </ul>
        </>
      ),
    },
    {
      title: "Benefits for Retailers & Agents",
      body: (
        <>
          <ul>
            <li>Provide essential financial services in your locality</li>
            <li>Earn commission on each successful transaction</li>
            <li>Increase footfall to your shop or digital center</li>
            <li>Access full transaction history and daily reports</li>
            <li>Get onboarding, support, and tools from ABDKS</li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions",
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Can I transfer money to any bank in India?</Accordion.Header>
            <Accordion.Body>Yes. ABDKS supports transfers to all major banks using IMPS, NEFT, and UPI.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is the transaction limit?</Accordion.Header>
            <Accordion.Body>Limits vary based on the payment method and KYC level. IMPS usually supports ₹1 to ₹2,00,000 per transaction.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Is the service available 24x7?</Accordion.Header>
            <Accordion.Body>Yes. You can transfer funds anytime, even on weekends and public holidays.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Is my money safe?</Accordion.Header>
            <Accordion.Body>Yes. All transactions are encrypted and processed through certified, RBI-compliant channels.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Can retailers offer money transfer services?</Accordion.Header>
            <Accordion.Body>Yes. Retailers can become ABDKS agents and provide cash deposit & money transfer services to customers.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Send Money Online with Confidence",
      body: (
        <>
          <p>
            Whether you're transferring funds for family, business, or community support — trust ABDKS for fast, secure, and compliant online money transfers across India.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="#" className="btn btn-primary cta-main" size="lg">Send Money Now</Link>
            <Link  to="/createaccount?role=Retailer" className="btn btn-outline-secondary cta-secondary" size="lg">Become a Money Transfer Agent</Link>
          </div>
        </>
      ),
    },
  ];

  return (
     <div className="container my-4">
      {isMobile ? (
        <div className="accordion-container">
          {content.map((item, index) => (
            <div key={index} className="accordion-item">
              <div className="accordion-header">
                <button 
                  className={`accordion-button ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="h5 mb-0 text-warning-emphasis">
                    {item.title}
                  </span>
                  <span className="accordion-icon">{activeIndex === index ? '−' : '+'}</span>
                </button>
              </div>
              <div className={`accordion-content ${activeIndex === index ? 'show' : ''}`}>
                <div className="accordion-body">
                  {item.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="">
          {content.map((item, index) => (
            <div key={index} className="custom-card my-5">
              <div className="card-header">
                <h4 className="h4 text-warning-emphasis">
                  {item.title}
                </h4>
              </div>
              <div className="card-body">
                {item.body}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
 

  );
};

export default FAQMoneyTransfer;
