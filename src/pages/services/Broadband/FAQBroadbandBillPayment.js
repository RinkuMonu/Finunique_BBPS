import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FAQBroadbandBillPayment = () => {
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
      title: "Pay Your Broadband Bill Online with Ease",
      body: (
        <>
          <p>
            Stay connected seamlessly. Finunique offers a secure, quick, and intuitive platform to pay your broadband bills online. Manage your home Wi-Fi or provide bill payment services to customers — all with instant confirmations.
          </p>
          <p>
            <strong>Broadband bill payment made simple.</strong> Fast, safe, and convenient — anytime, anywhere.
          </p>
        </>
      ),
    },
    {
      title: "Supported Broadband Providers",
      body: (
        <>
          <p>Recharge or pay bills for:</p>
          <ul>
            <li>Airtel Broadband</li>
            <li>ACT Fibernet</li>
            <li>BSNL Broadband</li>
            <li>JioFiber</li>
            <li>Hathway</li>
            <li>Tikona</li>
            <li>YOU Broadband</li>
            <li>MTNL</li>
            <li>Excitel</li>
            <li>RailWire</li>
          </ul>
          <p>Coverage may vary by region.</p>
        </>
      ),
    },
    {
      title: "How to Pay Your Broadband Bill",
      body: (
        <ol>
          <li>Visit the bill payment section on Finunique platform.</li>
          <li>Select broadband as service category.</li>
          <li>Choose your provider.</li>
          <li>Enter account/user ID.</li>
          <li>Check and confirm your bill details.</li>
          <li>Pay via UPI, card, wallet, or net banking.</li>
          <li>Receive instant confirmation and digital receipt.</li>
        </ol>
      ),
    },
    {
      title: "Key Benefits",
      body: (
        <ul>
          <li><strong>24x7 Access</strong> — Pay anytime.</li>
          <li><strong>Real-Time Updates</strong> — Instant confirmation.</li>
          <li><strong>Multiple Payment Options</strong> — UPI, cards, wallets.</li>
          <li><strong>All Major ISPs Supported</strong> — Manage all bills in one place.</li>
          <li><strong>Secure & Encrypted</strong> — Fully compliant with banking security.</li>
          <li><strong>Mobile-Friendly</strong> — Works great on any device.</li>
        </ul>
      ),
    },
    {
      title: "For Retailers & Agents",
      body: (
        <>
          <p>Add broadband bill payments to your services and boost revenue:</p>
          <ul>
            <li>Attract more customers.</li>
            <li>Serve residential and business clients.</li>
            <li>No technical expertise required.</li>
            <li>Earn commission per payment.</li>
            <li>Real-time support from our team.</li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions",
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How fast are broadband bill payments processed?</Accordion.Header>
            <Accordion.Body>Most are processed instantly with real-time confirmation.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Can I pay bills for any provider?</Accordion.Header>
            <Accordion.Body>Yes, we support all major ISPs like Airtel, BSNL, JioFiber, ACT, and more.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I pay for someone else?</Accordion.Header>
            <Accordion.Body>Yes! Just enter their valid account/user ID.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Are there extra charges?</Accordion.Header>
            <Accordion.Body>No extra transaction fees on Finunique platform.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Stay Connected Without Worry",
      body: (
        <>
          <p>With Finunique, pay broadband bills securely and stay online — whether for your home, office, or your customers.</p>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <Link to="#" className="btn btn-warning text-dark fw-semibold shadow-sm px-4">Pay Now</Link>
            <Link to="/createaccount?role=Retailer" className="btn btn-outline-secondary fw-semibold px-4">Join as Partner</Link>
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

export default FAQBroadbandBillPayment;
