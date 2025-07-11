import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FAQLoanEMIPayments = () => {
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
      title: "Simple & Secure EMI Payments with ABDKS",
      body: (
        <>
          <p>
            Pay your loan EMIs easily from home or your nearest retailer using ABDKS. Whether it's a personal loan, vehicle loan, or home loan — our platform ensures instant, secure, and reliable transactions across major NBFCs and banks.
          </p>
          <p>
            Forget queues and delays — pay on time and stay worry-free.
          </p>
        </>
      ),
    },
    {
      title: "Supported Loan Types",
      body: (
        <ul>
          <li>Personal Loans</li>
          <li>Home Loans</li>
          <li>Car/Bike Loans</li>
          <li>Business Loans</li>
          <li>Education Loans</li>
          <li>Consumer Durable Loans</li>
          <li>Gold Loans</li>
          <li>BNPL & Digital Credit</li>
        </ul>
      ),
    },
    {
      title: "Partnered NBFCs & Banks",
      body: (
        <ul>
          <li>Bajaj Finserv</li>
          <li>HDFC Bank</li>
          <li>IDFC First Bank</li>
          <li>Capital Float</li>
          <li>Tata Capital</li>
          <li>Indiabulls</li>
          <li>Home Credit</li>
          <li>Kissht</li>
          <li>ZestMoney</li>
          <li>Paysense</li>
          <li>And many more</li>
        </ul>
      ),
    },
    {
      title: "How to Pay EMI via ABDKS",
      body: (
        <ol>
          <li>Go to EMI Payment on ABDKS website/app.</li>
          <li>Select your bank or NBFC.</li>
          <li>Enter account or mobile number.</li>
          <li>View outstanding amount & due date.</li>
          <li>Pay using UPI, card, wallet, or net banking.</li>
          <li>Get instant receipt and confirmation.</li>
        </ol>
      ),
    },
    {
      title: "Features & Benefits",
      body: (
        <ul>
          <li>Instant confirmation & receipts</li>
          <li>24x7 access — pay anytime</li>
          <li>Supports major lenders</li>
          <li>Multiple payment options</li>
          <li>Mobile & desktop friendly</li>
        </ul>
      ),
    },
    {
      title: "For Retailers & Agents",
      body: (
        <ul>
          <li>Serve walk-in customers for EMI payments</li>
          <li>Earn commission per transaction</li>
          <li>Easy-to-use ABDKS dashboard</li>
          <li>Dedicated support team</li>
        </ul>
      ),
    },
    {
      title: "Frequently Asked Questions",
      body: (
        <ul>
          <li>
            <strong>Can I pay EMI for any bank?</strong><br />
            Yes, we support most leading NBFCs & banks. Check our partner list on the portal.
          </li>
          <li>
            <strong>Do I get a receipt?</strong><br />
            Yes. You’ll receive a digital receipt via SMS and email immediately.
          </li>
          <li>
            <strong>Can I pay for someone else?</strong><br />
            Yes. Just use their valid account/loan or mobile number.
          </li>
          <li>
            <strong>Are there any extra charges?</strong><br />
            No hidden charges for standard EMI payments.
          </li>
        </ul>
      ),
    },
    {
      title: "Stay On Track with Your EMI Payments",
      body: (
        <>
          <p>
            Avoid penalties and keep your credit score healthy — pay EMIs securely and on time with ABDKS.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-3">
            <Link to="#" className="btn px-4 btn-warning text-dark fw-semibold shadow-sm">Pay EMI Now</Link>
            <Link to="/createaccount?role=Retailer" className="btn px-4 btn-outline-secondary fw-semibold">Become a Retail Partner</Link>
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

export default FAQLoanEMIPayments;
