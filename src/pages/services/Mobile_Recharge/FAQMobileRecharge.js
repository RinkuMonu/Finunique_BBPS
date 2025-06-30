import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const FAQMobileRecharge = () => {
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
      title: "Quick, Safe, and Real-Time Recharge with ABDKS",
      body: (
        <p>
          Experience uninterrupted recharge using India's reliable BBPS recharge system. Abdks provides a fully integrated mobile recharge BBPS platform, designed for individuals, retailers and fintech entrepreneurs. With support to all major telecommunications networks and real-time recharge confirmation, you can serve customers anytime, anywhere.
        </p>
      ),
    },
    {
      title: "Operator supported across India",
      body: (
        <>
          <p>
            Our prepaid recharge BBPS platform and postpaid mobile bill payment system support all major telecom operators:
          </p>
          <ul>
            <li>Jio</li>
            <li>Airtel</li>
            <li>Vodafone Idea (VI)</li>
            <li>BSNL</li>
          </ul>
          <p>
            Support includes mobile recharge, BBPS postpaid bill payment, and integration with our comprehensive utility bill payment software.
          </p>
        </>
      ),
    },
    {
      title: "How to recharge using ABDKS BBPS",
      body: (
        <>
          <p>Follow these simple steps on the ABDKS platform or mobile dashboard:</p>
          <ol>
            <li>Go to the mobile recharge section</li>
            <li>Select your telecom operator and field/circle</li>
            <li>Please enter the mobile number</li>
            <li>Choose a recharge plan or manually enter an amount</li>
            <li>Pay through UPI, Debit/Credit Card, Wallet, or Net Banking</li>
            <li>Get immediate recharge confirmation and a digital receipt</li>
          </ol>
          <p>
            All transactions are processed through our RBI-authorized BBPS recharge system.
          </p>
        </>
      ),
    },
    {
      title: "Major features of our mobile recharge BBPS platform",
      body: (
        <ul>
          <li>Immediate recharge BBPS integration - No delay, real-time update</li>
          <li>24x7 recharge access - available on weekends and holidays</li>
          <li>Prepaid and Postpaid Support - BBPS Bill Payment for all types</li>
          <li>Multiple payment methods - UPI, card, net banking, and wallet</li>
          <li>Mobile-friendly interface—anyone can work on an Android smartphone</li>
          <li>End-to-end security-RBI-defined and encrypted transactions</li>
        </ul>
      ),
    },
    {
      title: "Why retailers choose ABDKS for mobile recharge",
      body: (
        <>
          <p>Expand your service offerings and create a revenue stream with our mobile recharge BBPS solution:</p>
          <ul>
            <li>Earn commission on every prepaid and postpaid transaction</li>
            <li>No basic structure cost - just a mobile phone and internet</li>
            <li>Serve all major Indian networks with a single BBPS interface</li>
            <li>Real times access to the commission and transaction logs</li>
            <li>Jaipur-based aid team dedicated for training and issues</li>
          </ul>
          <p><strong>Perfect for:</strong> Kirana stores || Recharge shops || Cyber cafés || Jan Seva Kendra operators || and digital entrepreneurs.</p>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions",
      body: (
        <ul>
          <li>
            <strong>Is mobile recharge safe through ABDKS?</strong><br />
            Yes. Our BBPS recharge platform uses the RBI-authorized payment gateway with full encryption.
          </li>
          <li>
            <strong>Can I recharge other people's numbers?</strong><br />
            Yes, retailers and individuals can recharge for any mobile user in India.
          </li>
          <li>
            <strong>Are there additional charges for mobile recharge?</strong><br />
            No. Abdks does not impose any hidden fees on mobile recharge BBPS transactions.
          </li>
          <li>
            <strong>Which payment methods are supported?</strong><br />
            UPI, debit/credit card, net banking, and wallet—all are available for convenience.
          </li>
        </ul>
      ),
    },
    {
      title: "Start Mobile Recharge BBPS Business with ABDKS",
      body: (
        <>
          <p>
            Whether you're a new retailer or want to add services to your existing shop, ABDKS makes mobile recharges fast, secure, and commission-generating. Tap into India’s growing demand for digital transactions with our prepaid recharge BBPS and postpaid payment tools.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="/ContactUs" className="btn btn-primary cta-main" size="lg">
              Start Recharging Now
            </Link>
            <Link  to="/createaccount" className="btn btn-outline-secondary cta-secondary" size="lg">
              Become a Partner
            </Link>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="container my-4">
      {isMobile ? (
        <Accordion>
          {content.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{item.title}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      ) : (
        <div>
          {content.map((item, index) => (
            <Card key={index} className="mb-4">
              <Card.Body>
                <Card.Title className="h4 mb-3 text-warning-emphasis">{item.title}</Card.Title>
                {item.body}
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FAQMobileRecharge;
