import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const FAQInsurancePayment = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = [
    {
      title: 'One Platform for All Your Insurance Payment Needs',
      body: (
        <>
          <p>
            <strong>Finunique Small Private Limited.</strong> offers a fast, reliable, and secure solution to pay your insurance premiums online.
            Whether you’re paying for life, health, or vehicle insurance, our platform is designed to help you make payments effortlessly — with instant confirmation and support for leading insurers in India.
          </p>
        </>
      ),
    },
    {
      title: 'Types of Insurance Supported',
      body: (
        <ul>
          <li>Life Insurance</li>
          <li>Health Insurance</li>
          <li>Motor Insurance (Car/Bike)</li>
          <li>Travel Insurance</li>
          <li>Home & Property Insurance</li>
        </ul>
      ),
    },
    {
      title: 'Insurance Providers Supported',
      body: (
        <ul>
          <li>LIC (Life Insurance Corporation of India)</li>
          <li>ICICI Prudential</li>
          <li>HDFC Life</li>
          <li>SBI Life Insurance</li>
          <li>Max Life</li>
          <li>Kotak Life Insurance</li>
          <li>Reliance General Insurance</li>
          <li>Star Health Insurance</li>
          <li>Bajaj Allianz</li>
          <li>Future Generali</li>
          <li>And many more</li>
        </ul>
      ),
    },
    {
      title: 'How to Pay Insurance Premiums Online with Finunique',
      body: (
        <ol>
          <li>Go to the Bill Payment section on the Finunique app or website</li>
          <li>Select Insurance as the bill category</li>
          <li>Choose your insurance provider from the list</li>
          <li>Enter your policy number or customer ID</li>
          <li>The system will auto-fetch your premium details</li>
          <li>Confirm the amount and complete the payment via UPI, card, wallet, or net banking</li>
          <li>Receive instant payment confirmation and digital receipt</li>
        </ol>
      ),
    },
    {
      title: 'Key Features',
      body: (
        <ul>
          <li>24x7 Payment Availability – Pay anytime, even during non-banking hours</li>
          <li>Instant Policy Updates – No delays in premium acknowledgment</li>
          <li>Safe & Encrypted – RBI-authorized, secure payment gateways</li>
          <li>Multi-Channel Payments – UPI, debit/credit card, wallet, net banking supported</li>
          <li>Wide Insurer Network – Covers all major insurance providers</li>
          <li>User-Friendly Interface – Easy to use for both individual users and retailers</li>
        </ul>
      ),
    },
    {
      title: 'Benefits for Retailers & Digital Service Centers',
      body: (
        <ul>
          <li>Attract more customers with value-added services</li>
          <li>Earn commissions on every insurance premium paid</li>
          <li>Support your community by simplifying policy renewals</li>
          <li>Get full transaction tracking and real-time reporting</li>
          <li>Expand your fintech service portfolio with zero investment</li>
        </ul>
      ),
    },
    {
      title: 'About Insurance Premium Payment',
      body: (
        <>
          <p>Insurance is just like a safety cushion that people avail for themselves in times of emergency...</p>
          <p>Finunique Small Private Limited provides an easy approach for making the insurance premium payment online via the website and application...</p>
        </>
      ),
    },
    {
      title: 'How to Pay Life Insurance Premiums Online?',
      body: (
        <>
          <p>Using Finunique Small Private Limited to make a life insurance online payment is fairly simple...</p>
          <ol>
            <li>Download the Finunique Small Private Limited App.</li>
            <li>Click on 'Recharge/ Bill Pay' option on the home page.</li>
            <li>Select 'Insurance' from the available options.</li>
            <li>Select your insurance premium operator.</li>
            <li>Enter your policy number.</li>
            <li>Enter your date of birth and proceed.</li>
            <li>Get your premium details.</li>
            <li>Click on 'Make Payment' to finish.</li>
          </ol>
        </>
      ),
    },
    {
      title: 'Get Cashback Offers on Online Insurance Premium Payments',
      body: (
        <p>Finunique Small Private Limited knows how to take care of its customers and rewards you every time you use the app...</p>
      ),
    },
    {
      title: 'Make Your Life Insurance Premium Payment Online Securely',
      body: (
        <p>All payments made using the Finunique App or website vow full security. You do not have to disclose any private information...</p>
      ),
    },
    {
      title: 'The Flexibility Offered at Finunique',
      body: (
        <>
          <p>Finunique offers complete flexibility in the modes you wish to make the payment:</p>
          <ul>
            <li>Payments using credit/debit cards (no CVV storage).</li>
            <li>Net banking or direct transactions.</li>
            <li>UPI ID-based payments.</li>
            <li>Finunique ZIP option for quick payments in a cash crunch.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Frequently Asked Questions (FAQs)',
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Can I pay premiums for LIC and private insurers?</Accordion.Header>
            <Accordion.Body>Yes, both are supported.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How fast is the payment processed?</Accordion.Header>
            <Accordion.Body>Instantly and updated in real-time.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I pay for another person’s insurance?</Accordion.Header>
            <Accordion.Body>Yes, just use the correct policy number.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Are there extra charges?</Accordion.Header>
            <Accordion.Body>No extra service fees for standard payments.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: 'Pay Insurance Premiums Easily with Finunique',
      body: (
        <>
          <p>
            Never miss a renewal again. Whether you're paying for yourself or assisting customers,
            Finunique makes insurance payments smooth, secure, and on time.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/billpayment" className="btn btn-warning text-dark fw-semibold shadow-sm px-4">Pay Insurance Now</Link>
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

export default FAQInsurancePayment;
