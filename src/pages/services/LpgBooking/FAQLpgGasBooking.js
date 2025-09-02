import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FAQLpgGasBooking = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = [
    {
      title: "About LPG Gas Booking",
      body: (
        <>
          <p>
            Finunique Small Private Limited. offers a convenient way to book LPG gas
            cylinders online for all major providers in India. With our Quick
            Gas Booking Service, you can schedule a cylinder refill anytime — no need to visit the gas agency or wait in long queues.
          </p>
          <p>
            Whether you're booking for your home or helping customers as a retailer, Finunique ensures smooth, secure, and instant gas booking with digital confirmation.
          </p>
        </>
      ),
    },
    {
      title: "Supported Gas Providers",
      body: (
        <ul>
          <li>Indane (Indian Oil)</li>
          <li>HP Gas (Hindustan Petroleum)</li>
          <li>Bharat Gas (Bharat Petroleum)</li>
          <li>Booking support is available for both regular and subsidized connections.</li>
        </ul>
      ),
    },
    {
      title: "How to Book Gas Cylinder with Finunique",
      body: (
        <ol>
          <li>Visit the Gas Booking section on the Finunique app or website</li>
          <li>Select your LPG Provider (e.g., Indane, HP, Bharat)</li>
          <li>Enter your Consumer Number / Registered Mobile Number</li>
          <li>Confirm your booking details and delivery address</li>
          <li>Choose your payment method (if required)</li>
          <li>Submit the request and receive instant confirmation via SMS/email</li>
        </ol>
      ),
    },
    {
      title: "Features of Finunique Gas Booking",
      body: (
        <ul>
          <li>24x7 Booking Access – Book gas refills anytime, including holidays</li>
          <li>No Manual Visit Needed – Fully digital process from start to finish</li>
          <li>Supports All Major LPG Agencies – One platform for all customers</li>
          <li>Digital Receipt Generation – Instantly download or share booking details</li>
          <li>Safe & Secure System – All data and transactions are encrypted</li>
          <li>Mobile-Friendly Interface – Designed for smooth use on all devices</li>
        </ul>
      ),
    },
    {
      title: "Benefits for Retailers & Service Agents",
      body: (
        <ul>
          <li>Help customers in your area book LPG refills easily</li>
          <li>Earn small commissions on successful bookings</li>
          <li>Increase customer footfall with essential services</li>
          <li>Simple integration with Finunique dashboard</li>
          <li>Onboarding and support provided by the Finunique team</li>
        </ul>
      ),
    },
    {
      title: "Frequently Asked Questions (FAQs)",
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Can I book gas for any LPG provider?</Accordion.Header>
            <Accordion.Body>
              Yes. Finunique supports Indane, Bharat Gas, and HP Gas bookings.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Do I get a confirmation after booking?</Accordion.Header>
            <Accordion.Body>
              Yes. Confirmation is sent instantly via SMS and email.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I book gas for someone else?</Accordion.Header>
            <Accordion.Body>
              Yes. Just enter their valid consumer number and delivery details.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Are there extra charges for booking?</Accordion.Header>
            <Accordion.Body>
              There are no hidden charges for standard LPG booking through Finunique.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Book Your Gas Cylinder the Smart Way",
      body: (
        <>
          <p>
            Choose Finunique for quick, reliable, and secure LPG gas booking — available 24x7 for you and your customers.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/billpayment" className="btn btn-warning text-dark fw-semibold shadow-sm px-4">
              Book Now
            </Link>
            <Link to="/ContactUs" className="btn btn-outline-secondary fw-semibold px-4">
              Become a Gas Booking Agent
            </Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container my-5">
      {isMobile ? (
        <Accordion className="mb-4">
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

export default FAQLpgGasBooking;
