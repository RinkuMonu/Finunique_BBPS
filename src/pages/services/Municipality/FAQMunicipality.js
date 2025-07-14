import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FAQMunicipality = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = [
    {
      title: 'ABDKS: Your Trusted Partner for Municipal Bill Payments',
      body: (
        <>
          <p>
            ABDKS Solutions Private Ltd. empowers citizens and retailers with a simple and secure way to pay municipal dues online. Whether it's property tax, water tax, sewerage charges, or municipal service fees, our digital platform ensures quick payments with real-time status updates — without standing in queues.
          </p>
        </>
      ),
    },
    {
      title: 'Types of Municipal Bills You Can Pay',
      body: (
        <ul>
          <li>Property Tax</li>
          <li>Water Tax</li>
          <li>Sewerage Charges</li>
          <li>Solid Waste Management Fees</li>
          <li>Trade License Renewal Fees</li>
          <li>Development Charges & Other Civic Fees</li>
        </ul>
      ),
    },
    {
      title: 'Supported Municipal Corporations',
      body: (
        <ul>
          <li>Jaipur Municipal Corporation</li>
          <li>Delhi MCD (North, South, East)</li>
          <li>Pune Municipal Corporation</li>
          <li>Chennai Corporation</li>
          <li>Greater Hyderabad Municipal Corporation (GHMC)</li>
          <li>Bhopal Municipal Corporation</li>
          <li>And many others based on regional coverage</li>
        </ul>
      ),
    },
    {
      title: 'How to Pay Municipal Bills via ABDKS',
      body: (
        <ol>
          <li>Go to the Bill Payment section on the ABDKS app or website</li>
          <li>Choose Municipal Bill as the service category</li>
          <li>Select your city or municipality from the list</li>
          <li>Enter your property ID, account number, or consumer number</li>
          <li>Fetch and verify the bill details</li>
          <li>Complete payment using UPI, debit/credit card, wallet, or net banking</li>
          <li>Get instant confirmation and receipt</li>
        </ol>
      ),
    },
    {
      title: 'Why Use ABDKS for Municipal Payments?',
      body: (
        <ul>
          <li>24x7 Availability – Pay your bills anytime, from any location</li>
          <li>Multiple Services in One Place – Pay property tax, water bills, and more</li>
          <li>Instant Updates – View current dues and receive instant confirmations</li>
          <li>Secure Payment Gateway – RBI-authorized, encrypted transactions</li>
          <li>Mobile-Friendly Interface – Seamless experience on mobile or desktop</li>
          <li>Retailer Access – Offer civic payment services in your shop or center</li>
        </ul>
      ),
    },
    {
      title: 'For Retailers & Digital Entrepreneurs',
      body: (
        <ul>
          <li>Expand your digital services by offering municipal bill payments to your community</li>
          <li>Increase customer footfall and revenue</li>
          <li>Offer value-added services to residents</li>
          <li>Earn a commission on every successful payment</li>
          <li>View and manage transactions easily from your ABDKS dashboard</li>
          <li>Get real-time support from our local Jaipur-based team</li>
        </ul>
      ),
    },
    {
      title: 'Frequently Asked Questions',
      body: (
        <ul>
          <li><strong>Can I pay property tax online through ABDKS?</strong><br />Yes. You can pay property tax and other civic dues for supported municipalities.</li>
          <li><strong>What details do I need to pay a municipal bill?</strong><br />Typically, your property ID, account number, or consumer ID is required.</li>
          <li><strong>Are municipal payments processed instantly?</strong><br />Yes. Once paid, the confirmation is generated instantly and shared via email/SMS.</li>
          <li><strong>Is there a charge for paying municipal bills via ABDKS?</strong><br />There are no additional service charges for standard municipal bill payments.</li>
        </ul>
      ),
    },
    {
      title: 'Make Civic Payments Simple & Stress-Free',
      body: (
        <>
          <p>
            Whether you're a resident or a digital retailer, ABDKS helps you manage all your civic dues from one trusted platform — quickly, securely, and without delay.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <Link to="/billpayment" className="btn btn-warning text-dark fw-semibold shadow-sm px-4">Pay Municipal Bill Now</Link>
            <Link to="/createaccount" className="btn btn-outline-secondary fw-semibold px-4">Become a Service Partner</Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container my-5">
      {isMobile ? (
        <Accordion>
          {content.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index} className="faq-accordion-item">
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <div className="timeline">
          {content.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content glassy-bg p-4 shadow-sm rounded">
                <h4 className="fw-bold mb-3 text-gradient">{item.title}</h4>
                {item.body}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <style jsx>{`
        .timeline {
          position: relative;
          margin-left: 20px;
        }
        .timeline-card {
          position: relative;
          margin-bottom: 50px;
        }
        .timeline-marker {
          position: absolute;
          left: -27px;
          top: 20px;
          width: 12px;
          height: 12px;
          background: #fcbf49;
          border-radius: 50%;
          border: 2px solid #fff;
          box-shadow: 0 0 0 4px rgba(252, 191, 73, 0.3);
        }
        .glassy-bg {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
        }
        .text-gradient {
          background: linear-gradient(90deg, #ff8a00, #e52e71);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
};

export default FAQMunicipality;
