import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const FAQDataCardRecharge = () => {
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
      title: "About Datacard Recharge",
      body: (
        <>
          <p>
            In today’s digital-first world, uninterrupted internet is essential. Whether you’re streaming, working remotely, attending online classes, or gaming — your dongle or data card should never run out of balance. 
            <strong> ABDKS Solutions Private Ltd.</strong> offers a secure, fast, and user-friendly platform for recharging any prepaid data card or dongle across India.
          </p>
          <p>
            Backed by <strong>BBPS (Bharat Bill Payment System)</strong>, we ensure real-time confirmation and 100% operator coverage.
          </p>
        </>
      ),
    },
    {
      title: "Supported Datacard & Dongle Operators",
      body: (
        <>
          <p>Recharge is supported for all leading internet devices and service providers:</p>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>JioFi Datacard</li>
                <li>Airtel 4G Dongle / Hotspot</li>
                <li>VI Dongle (Vodafone Idea)</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>BSNL Data Card</li>
                <li>MTNL Dongle</li>
                <li>Other prepaid internet providers</li>
              </ul>
            </div>
          </div>
          <p>Whether it’s a USB modem, Wi-Fi dongle, or 4G stick — recharge securely with just a few taps using ABDKS.</p>
        </>
      ),
    },
    {
      title: "How to Recharge Your Data Card Online",
      body: (
        <>
          <ol>
            <li>Open the ABDKS app or visit our official website.</li>
            <li>Navigate to the ‘Recharge’ section.</li>
            <li>Select ‘Data Card Recharge’ as the category.</li>
            <li>Choose your operator (e.g., Jio, Airtel, VI, BSNL).</li>
            <li>Enter your datacard or registered mobile number.</li>
            <li>Select a plan or input a custom recharge amount.</li>
            <li>Choose your payment method: UPI, Debit/Credit Card, Wallet, or Net Banking.</li>
            <li>Complete the transaction and receive instant confirmation.</li>
          </ol>
        </>
      ),
    },
    {
      title: "Why Choose ABDKS for Datacard Recharge?",
      body: (
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>Instant Recharge – Real-time success and balance update</li>
              <li>BBPS-supported – RBI-authorized, safe digital payment ecosystem</li>
              <li>Multi-operator Support – Recharge any major data provider</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Available 24x7 – Recharge any time, even on holidays</li>
              <li>Mobile-friendly Interface – Optimized for speed and usability</li>
              <li>No Hidden Fees – Transparent pricing with 0 extra charges</li>
              <li>Exciting Cashback & Offers – Earn rewards and coupons</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "For Retailers & Digital Service Points",
      body: (
        <>
          <p>If you run a cyber café, CSC center, recharge shop, or a local store, you can earn by providing datacard recharge services with ABDKS:</p>
          <ul>
            <li>Serve customers in your locality with essential internet services</li>
            <li>No technical setup – Just login and start recharging</li>
            <li>Track commissions, earnings, and reports in real-time</li>
            <li>Onboarding and ongoing support from our Jaipur-based team</li>
            <li>Boost footfall and increase monthly earnings</li>
          </ul>
        </>
      ),
    },
    {
      title: "Frequently Asked Questions (FAQs)",
      body: (
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I recharge my internet dongle?</Accordion.Header>
            <Accordion.Body>
              Log in to ABDKS, choose “Datacard Recharge”, select your operator, enter your number, and complete the payment.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What is a datacard?</Accordion.Header>
            <Accordion.Body>
              A datacard is a device (USB, SIM-based, or wireless) that enables internet access using a mobile network.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Is dongle recharge the same as datacard recharge?</Accordion.Header>
            <Accordion.Body>
              Yes. Dongles and datacards are often used interchangeably. Both require similar recharge plans.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Is dongle internet faster than mobile internet?</Accordion.Header>
            <Accordion.Body>
              Speeds vary by device, location, and operator. Dongles often offer more stable connections for laptops and PCs.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Are there any extra charges on ABDKS?</Accordion.Header>
            <Accordion.Body>
              No. There are zero hidden or additional charges on our platform.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Can I check available datacard recharge plans?</Accordion.Header>
            <Accordion.Body>
              Yes. After selecting your operator and entering your number, available plans will be shown automatically.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ),
    },
    {
      title: "Keep Your Internet Running with ABDKS",
      body: (
        <>
          <p>
            Whether you're at home, traveling, or running a business — stay connected with ABDKS. Recharge online in seconds and enjoy uninterrupted browsing anytime, anywhere.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link to="#" className="btn btn-primary cta-main" size="lg">Recharge Now</Link>
            <Link  to="/createaccount" className="btn btn-outline-secondary cta-secondary" size="lg">Join as a Retail Partner</Link>
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

export default FAQDataCardRecharge;
