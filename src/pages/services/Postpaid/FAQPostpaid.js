import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FAQPostpaid = () => {
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
      title: "Why Choose ABDKS for Postpaid Bill Payment?",
      body: (
        <>
          <p>
            Pay your postpaid mobile bills easily and securely with ABDKS. Enjoy real-time bill fetching, instant confirmation, and flexible payment options — all on one modern, intuitive platform.
          </p>
        </>
      ),
    },
    {
      title: "Supported Mobile Operators",
      body: (
        <>
          <p>Recharge your postpaid numbers from all leading operators:</p>
          <ul>
            <li>Airtel</li>
            <li>Jio</li>
            <li>Vi (Vodafone Idea)</li>
            <li>BSNL</li>
          </ul>
          <p><em>Availability may vary by region.</em></p>
        </>
      ),
    },
    {
      title: "Steps to Recharge",
      body: (
        <ol>
          <li>Go to Postpaid Recharge on ABDKS.</li>
          <li>Select operator and enter your number.</li>
          <li>Check bill details.</li>
          <li>Choose payment method and confirm.</li>
          <li>Get instant confirmation and receipt.</li>
        </ol>
      ),
    },
    {
      title: "Top Features",
      body: (
        <ul>
          <li>Real-time bill fetching</li>
          <li>24/7 availability</li>
          <li>Multiple payment modes</li>
          <li>Fully secure RBI-compliant gateway</li>
        </ul>
      ),
    },
    {
      title: "Retailer Benefits",
      body: (
        <>
          <p>Expand your services and earn more:</p>
          <ul>
            <li>Earn commissions on each bill paid</li>
            <li>Increase footfall to your shop</li>
            <li>Access detailed reports & dashboards</li>
            <li>Easy onboarding, no tech setup needed</li>
          </ul>
        </>
      ),
    },
    {
      title: "Recharge Your Mobile Today",
      body: (
        <>
          <p>
            Never miss a due date. Pay your mobile bills instantly and securely with ABDKS.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <Link to="#" className="btn btn-warning px-4 text-dark fw-semibold shadow-sm">
              Recharge Now
            </Link>
            <Link to="/createaccount?role=Retailer" className="btn px-4 btn-outline-secondary fw-semibold">
              Become a Partner
            </Link>
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
    </div>
  );
};

export default FAQPostpaid;
